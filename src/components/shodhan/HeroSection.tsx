import Icon from "@/components/ui/icon";
import FadeIn from "./FadeIn";
import { DMITRY_PHOTO, INSTRUCTORS_MAIN, NAV } from "./shared";

type Props = {
  scrolled: boolean;
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
};

export default function HeroSection({ scrolled, menuOpen, setMenuOpen }: Props) {
  return (
    <>
      {/* ══════════ NAV ══════════ */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
        style={{
          background: scrolled ? "rgba(8,10,22,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}>
        <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-widest uppercase"
              style={{ fontFamily: "'Oswald', sans-serif", color: "#fff", letterSpacing: "0.15em" }}>
              ШОДХАН
            </span>
          </a>
          <div className="hidden md:flex items-center gap-6">
            {NAV.map(n => (
              <a key={n.href} href={n.href}
                className="text-xs font-medium tracking-widest uppercase transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.65)", letterSpacing: "0.1em" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}>
                {n.label}
              </a>
            ))}
            <a href="#contact"
              className="px-5 py-2 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-200"
              style={{ background: "linear-gradient(135deg,#3a8f4a,#5cb86e)", color: "#fff", letterSpacing: "0.12em" }}>
              Записаться
            </a>
          </div>
          <button className="md:hidden p-1" style={{ color: "#fff" }} onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden px-5 pb-5 flex flex-col gap-3"
            style={{ background: "rgba(8,10,22,0.98)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
            {NAV.map(n => (
              <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)}
                className="text-xs font-medium tracking-widest uppercase py-2"
                style={{ color: "rgba(255,255,255,0.75)" }}>
                {n.label}
              </a>
            ))}
            <a href="#contact" className="mt-2 py-3 rounded-full text-xs font-semibold text-center tracking-widest uppercase"
              style={{ background: "linear-gradient(135deg,#3a8f4a,#5cb86e)", color: "#fff" }}>
              Записаться
            </a>
          </div>
        )}
      </nav>

      {/* ══════════ HERO ══════════ */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        {/* Фон — горы */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80"
            alt="горы"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.45) saturate(1.1)" }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,10,25,0.35) 0%, rgba(0,8,20,0.1) 35%, rgba(0,8,20,0.55) 75%, #0a0e1a 100%)" }} />
          <div className="absolute bottom-0 right-0 w-[55%] h-full pointer-events-none"
            style={{ background: "linear-gradient(to left, rgba(0,0,0,0.0) 0%, rgba(0,8,20,0.5) 100%)" }} />
        </div>

        {/* Фото Дмитрия — правая сторона, во весь рост */}
        <div className="absolute bottom-0 right-0 z-10 pointer-events-none"
          style={{
            width: "clamp(280px, 45vw, 620px)",
            opacity: 0,
            animation: "fade-in 1s ease 0.4s forwards",
          }}>
          <img
            src={DMITRY_PHOTO}
            alt="Дмитрий Хара"
            className="w-full object-contain object-bottom"
            style={{ maxHeight: "92vh" }}
          />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-32 pointer-events-none"
            style={{ background: "radial-gradient(ellipse, rgba(92,184,110,0.18) 0%, transparent 70%)" }} />
        </div>

        {/* Контент — левая сторона */}
        <div className="relative z-20 flex flex-col justify-center min-h-screen px-6 md:px-16 max-w-2xl">
          <div className="pt-24">
            <div style={{ opacity: 0, animation: "fade-in 0.9s ease 0.2s forwards" }}>
              <p className="text-xs font-semibold tracking-widest uppercase mb-3"
                style={{ fontFamily: "'Oswald',sans-serif", color: "#5cb86e", letterSpacing: "0.2em" }}>
                Авторский метод
              </p>
              <h1 className="font-display leading-none mb-4"
                style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(70px, 14vw, 160px)", fontWeight: 700, color: "#fff", textShadow: "0 0 80px rgba(92,184,110,0.2)", letterSpacing: "0.05em" }}>
                ШОДХАН
              </h1>
            </div>
            <div style={{ opacity: 0, animation: "fade-in 0.9s ease 0.55s forwards" }}>
              <p className="text-base md:text-xl font-medium mb-2"
                style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(255,255,255,0.88)" }}>
                Активная медитация первоэлементов
              </p>
              <p className="text-sm mb-2" style={{ color: "rgba(255,255,255,0.55)" }}>
                Автор метода — <strong style={{ color: "rgba(255,255,255,0.8)" }}>Дмитрий Хара</strong>
              </p>
              <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.5)" }}>
                Шодхан в твоём городе! Выбери своего инструктора
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-12"
              style={{ opacity: 0, animation: "fade-in 0.9s ease 0.8s forwards" }}>
              <a href="#about"
                className="px-8 py-3.5 rounded-full font-semibold text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105 text-center"
                style={{ background: "linear-gradient(135deg,#3a8f4a,#5cb86e)", color: "#fff", boxShadow: "0 6px 24px rgba(60,150,80,0.45)" }}>
                Узнать о методе
              </a>
              <a href="#instructors"
                className="px-8 py-3.5 rounded-full font-medium text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105 text-center"
                style={{ border: "1px solid rgba(255,255,255,0.35)", color: "#fff", backdropFilter: "blur(8px)", background: "rgba(255,255,255,0.07)" }}>
                Выбрать инструктора
              </a>
            </div>

            {/* Круглые фото инструкторов */}
            <div style={{ opacity: 0, animation: "fade-in 0.9s ease 1s forwards" }}>
              <p className="text-xs mb-3" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'Montserrat',sans-serif", letterSpacing: "0.08em" }}>
                ИНСТРУКТОРЫ
              </p>
              <div className="flex flex-wrap gap-3">
                {INSTRUCTORS_MAIN.slice(0, 9).map((ins, i) => (
                  <div key={i} className="flex flex-col items-center gap-1 group cursor-pointer">
                    <div className="rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-110"
                      style={{ width: 50, height: 50, border: "2px solid rgba(255,255,255,0.3)", boxShadow: "0 3px 12px rgba(0,0,0,0.5)" }}>
                      <img src={ins.img} alt={ins.name}
                        className="w-full h-full object-cover object-top"
                        onError={e => { (e.currentTarget as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(ins.name.replace('\n',' '))}&background=1a3a22&color=5cb86e&size=50`; }} />
                    </div>
                    <span className="text-center whitespace-pre-line leading-tight"
                      style={{ fontSize: "8px", color: "rgba(255,255,255,0.55)", fontFamily: "'Montserrat', sans-serif" }}>
                      {ins.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
          style={{ opacity: 0, animation: "fade-in 1s ease 1.5s forwards", color: "rgba(255,255,255,0.3)" }}>
          <div className="w-px h-10 animate-pulse"
            style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)" }} />
        </div>
      </section>
    </>
  );
}
