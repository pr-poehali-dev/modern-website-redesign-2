"""
Авторизация инструкторов Шодхан.
Все запросы идут на один endpoint, действие определяется полем action в body:
  action=register — регистрация (full_name, phone, city)
  action=login    — вход (full_name, phone)
  action=me       — получить профиль (X-Session-Token)
  action=logout   — выход (X-Session-Token)
  action=update   — обновить профиль (bio, city, photo_url + X-Session-Token)
"""

import json
import os
import secrets
import psycopg2


def get_conn():
    return psycopg2.connect(os.environ["DATABASE_URL"])


def cors_headers():
    return {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, X-Session-Token",
    }


def ok(data):
    return {
        "statusCode": 200,
        "headers": {**cors_headers(), "Content-Type": "application/json"},
        "body": json.dumps(data, ensure_ascii=False, default=str),
    }


def err(msg, code=400):
    return {
        "statusCode": code,
        "headers": {**cors_headers(), "Content-Type": "application/json"},
        "body": json.dumps({"error": msg}, ensure_ascii=False),
    }


def get_instructor_by_token(cur, token):
    if not token:
        return None
    cur.execute(
        "SELECT id, full_name, city, bio, photo_url FROM shodhan_instructors WHERE session_token = %s",
        (token,),
    )
    return cur.fetchone()


def handler(event: dict, context) -> dict:
    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": cors_headers(), "body": ""}

    body = {}
    if event.get("body"):
        body = json.loads(event["body"])

    token = (event.get("headers") or {}).get("X-Session-Token", "")
    action = body.get("action", "")

    conn = get_conn()
    cur = conn.cursor()

    # ── REGISTER ──────────────────────────────────────────────────────────────
    if action == "register":
        full_name = (body.get("full_name") or "").strip()
        phone = (body.get("phone") or "").strip()
        city = (body.get("city") or "").strip()

        if not full_name or not phone or not city:
            conn.close()
            return err("Заполните ФИО, телефон и город")

        cur.execute("SELECT id FROM shodhan_instructors WHERE phone = %s", (phone,))
        if cur.fetchone():
            conn.close()
            return err("Инструктор с таким телефоном уже зарегистрирован")

        cur.execute(
            "INSERT INTO shodhan_instructors (full_name, phone, city) VALUES (%s, %s, %s) RETURNING id",
            (full_name, phone, city),
        )
        new_id = cur.fetchone()[0]
        conn.commit()
        conn.close()
        return ok({"success": True, "id": new_id})

    # ── LOGIN ─────────────────────────────────────────────────────────────────
    if action == "login":
        full_name = (body.get("full_name") or "").strip()
        phone = (body.get("phone") or "").strip()

        if not full_name or not phone:
            conn.close()
            return err("Введите ФИО и телефон")

        cur.execute(
            "SELECT id, full_name, city, bio, photo_url FROM shodhan_instructors WHERE phone = %s AND lower(full_name) = lower(%s)",
            (phone, full_name),
        )
        row = cur.fetchone()
        if not row:
            conn.close()
            return err("Инструктор не найден. Проверьте ФИО и телефон.")

        inst_id, name, city, bio, photo_url = row
        new_token = secrets.token_hex(32)
        cur.execute("UPDATE shodhan_instructors SET session_token = %s WHERE id = %s", (new_token, inst_id))
        conn.commit()
        conn.close()
        return ok({
            "success": True,
            "token": new_token,
            "instructor": {"id": inst_id, "full_name": name, "city": city, "bio": bio or "", "photo_url": photo_url or ""},
        })

    # ── ME ────────────────────────────────────────────────────────────────────
    if action == "me":
        row = get_instructor_by_token(cur, token)
        if not row:
            conn.close()
            return err("Токен недействителен", 401)
        inst_id, name, city, bio, photo_url = row
        conn.close()
        return ok({"id": inst_id, "full_name": name, "city": city, "bio": bio or "", "photo_url": photo_url or ""})

    # ── LOGOUT ────────────────────────────────────────────────────────────────
    if action == "logout":
        if token:
            cur.execute("UPDATE shodhan_instructors SET session_token = NULL WHERE session_token = %s", (token,))
            conn.commit()
        conn.close()
        return ok({"success": True})

    # ── UPDATE PROFILE ────────────────────────────────────────────────────────
    if action == "update":
        row = get_instructor_by_token(cur, token)
        if not row:
            conn.close()
            return err("Требуется авторизация", 401)
        inst_id = row[0]
        cur.execute(
            "UPDATE shodhan_instructors SET bio = %s, photo_url = %s, city = %s WHERE id = %s",
            (body.get("bio", ""), body.get("photo_url", ""), body.get("city", ""), inst_id),
        )
        conn.commit()
        conn.close()
        return ok({"success": True})

    conn.close()
    return err("Неизвестное действие", 400)
