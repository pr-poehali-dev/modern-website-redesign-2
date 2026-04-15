import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, register } from "@/lib/api";
import Icon from "@/components/ui/icon";

export default function Login() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"login" | "register">("login");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [form, setForm] = useState({ full_name: "", phone: "", city: "" });

  const set = (k: string, v: string) => setForm(prev => ({ ...prev, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      if (mode === "register") {
        const res = await register(form.full_name, form.phone, form.city);
        if (res.error) {
          setError(res.error);
        } else {
          setSuccess("Регистрация успешна! Теперь войдите в кабинет.");
          setMode("login");
          setForm(prev => ({ ...prev, city: "" }));
        }
      } else {
        const res = await login(form.full_name, form.phone);
        if (res.error) {
          setError(res.error);
        } else {
          navigate("/cabinet");
        }
      }
    } catch {
      setError("Ошибка соединения. Попробуйте ещё раз.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4"
      style={{ background: "linear-gradient(135deg,#060c14 0%,#0a1a0f 100%)" }}>

      {/* Фоновое свечение */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(ellipse,#1a6b2a,transparent)" }} />
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Логотип */}
        <div className="text-center mb-8">
          <a href="/" className="inline-block">
            <h1 className="text-4xl font-bold tracking-widest"
              style={{ fontFamily: "'Oswald',sans-serif", color: "#fff", letterSpacing: "0.15em" }}>
              ШОДХАН
            </h1>
          </a>
          <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Montserrat',sans-serif" }}>
            Кабинет инструктора
          </p>
        </div>

        {/* Карточка */}
        <div className="rounded-2xl p-8"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(16px)" }}>

          {/* Переключатель */}
          <div className="flex rounded-xl p-1 mb-8"
            style={{ background: "rgba(255,255,255,0.05)" }}>
            {(["login", "register"] as const).map(m => (
              <button key={m} onClick={() => { setMode(m); setError(""); setSuccess(""); }}
                className="flex-1 py-2.5 rounded-lg text-sm font-semibold tracking-wide transition-all duration-200"
                style={{
                  fontFamily: "'Oswald',sans-serif",
                  letterSpacing: "0.08em",
                  background: mode === m ? "linear-gradient(135deg,#3a8f4a,#5cb86e)" : "transparent",
                  color: mode === m ? "#fff" : "rgba(255,255,255,0.45)",
                }}>
                {m === "login" ? "ВОЙТИ" : "РЕГИСТРАЦИЯ"}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold tracking-widest uppercase mb-2"
                style={{ color: "rgba(92,184,110,0.7)", fontFamily: "'Oswald',sans-serif" }}>
                ФИО
              </label>
              <input
                type="text"
                placeholder="Иванов Иван Иванович"
                value={form.full_name}
                onChange={e => set("full_name", e.target.value)}
                required
                className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", fontFamily: "'Montserrat',sans-serif" }}
                onFocus={e => (e.currentTarget.style.borderColor = "rgba(92,184,110,0.5)")}
                onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold tracking-widest uppercase mb-2"
                style={{ color: "rgba(92,184,110,0.7)", fontFamily: "'Oswald',sans-serif" }}>
                Номер телефона
              </label>
              <input
                type="tel"
                placeholder="+7 (___) ___-__-__"
                value={form.phone}
                onChange={e => set("phone", e.target.value)}
                required
                className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", fontFamily: "'Montserrat',sans-serif" }}
                onFocus={e => (e.currentTarget.style.borderColor = "rgba(92,184,110,0.5)")}
                onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
              />
            </div>

            {mode === "register" && (
              <div>
                <label className="block text-xs font-semibold tracking-widest uppercase mb-2"
                  style={{ color: "rgba(92,184,110,0.7)", fontFamily: "'Oswald',sans-serif" }}>
                  Ваш город
                </label>
                <input
                  type="text"
                  placeholder="Москва"
                  value={form.city}
                  onChange={e => set("city", e.target.value)}
                  required
                  className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", fontFamily: "'Montserrat',sans-serif" }}
                  onFocus={e => (e.currentTarget.style.borderColor = "rgba(92,184,110,0.5)")}
                  onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                />
              </div>
            )}

            {error && (
              <div className="rounded-xl px-4 py-3 text-sm flex items-center gap-2"
                style={{ background: "rgba(200,50,50,0.12)", border: "1px solid rgba(200,50,50,0.3)", color: "#ff8080" }}>
                <Icon name="AlertCircle" size={14} />
                {error}
              </div>
            )}
            {success && (
              <div className="rounded-xl px-4 py-3 text-sm flex items-center gap-2"
                style={{ background: "rgba(50,160,80,0.12)", border: "1px solid rgba(50,160,80,0.3)", color: "#7edb95" }}>
                <Icon name="CheckCircle" size={14} />
                {success}
              </div>
            )}

            <button type="submit" disabled={loading}
              className="w-full py-4 rounded-xl font-bold text-sm tracking-widest uppercase transition-all duration-200 hover:opacity-90 disabled:opacity-50"
              style={{ background: "linear-gradient(135deg,#3a8f4a,#5cb86e)", color: "#fff", fontFamily: "'Oswald',sans-serif", letterSpacing: "0.1em" }}>
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <Icon name="Loader2" size={16} className="animate-spin" />
                  Подождите...
                </span>
              ) : mode === "login" ? "ВОЙТИ В КАБИНЕТ" : "ЗАРЕГИСТРИРОВАТЬСЯ"}
            </button>
          </form>
        </div>

        <div className="text-center mt-6">
          <a href="/" className="text-xs transition-colors duration-200"
            style={{ color: "rgba(255,255,255,0.3)" }}
            onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}>
            ← Вернуться на сайт
          </a>
        </div>
      </div>
    </div>
  );
}
