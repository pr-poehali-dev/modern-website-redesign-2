import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "@/lib/api";
import Icon from "@/components/ui/icon";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ login: "", password: "" });

  const set = (k: string, v: string) => setForm(prev => ({ ...prev, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await login(form.login, form.password);
      if (res.error) {
        setError(res.error);
      } else {
        if (res.instructor?.role === "admin") {
          navigate("/admin");
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

      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(ellipse,#1a6b2a,transparent)" }} />
      </div>

      <div className="relative z-10 w-full max-w-md">
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

        <div className="rounded-2xl p-8"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(16px)" }}>

          <h2 className="text-center text-lg font-bold mb-8 uppercase tracking-widest"
            style={{ fontFamily: "'Oswald',sans-serif", color: "#fff" }}>
            ВОЙТИ
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold tracking-widest uppercase mb-2"
                style={{ color: "rgba(92,184,110,0.7)", fontFamily: "'Oswald',sans-serif" }}>
                Логин
              </label>
              <input
                type="text"
                placeholder="Введите логин"
                value={form.login}
                onChange={e => set("login", e.target.value)}
                required
                autoComplete="username"
                className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", fontFamily: "'Montserrat',sans-serif" }}
                onFocus={e => (e.currentTarget.style.borderColor = "rgba(92,184,110,0.5)")}
                onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold tracking-widest uppercase mb-2"
                style={{ color: "rgba(92,184,110,0.7)", fontFamily: "'Oswald',sans-serif" }}>
                Пароль
              </label>
              <input
                type="password"
                placeholder="Введите пароль"
                value={form.password}
                onChange={e => set("password", e.target.value)}
                required
                autoComplete="current-password"
                className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", fontFamily: "'Montserrat',sans-serif" }}
                onFocus={e => (e.currentTarget.style.borderColor = "rgba(92,184,110,0.5)")}
                onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
              />
            </div>

            {error && (
              <div className="rounded-xl px-4 py-3 text-sm flex items-center gap-2"
                style={{ background: "rgba(200,50,50,0.12)", border: "1px solid rgba(200,50,50,0.3)", color: "#ff8080" }}>
                <Icon name="AlertCircle" size={14} />
                {error}
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
              ) : "ВОЙТИ В КАБИНЕТ"}
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
