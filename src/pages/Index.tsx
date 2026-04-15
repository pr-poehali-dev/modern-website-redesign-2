import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const useInView = (threshold = 0.1) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
};

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
    }}>
      {children}
    </div>
  );
};

// ─── ДАННЫЕ ───────────────────────────────────────────────────────────────────

const INSTRUCTORS_MAIN = [
  { name: "Алексей\nЧеремных", img: "https://static.tildacdn.com/tild3561-3236-4035-a232-333266336139/photo.png" },
  { name: "Мария\nСветлова", img: "https://static.tildacdn.com/tild6261-3136-4265-b665-376634613365/photo.png" },
  { name: "Дмитрий\nКоваль", img: "https://static.tildacdn.com/tild3237-6632-4361-b033-343464303535/photo.png" },
  { name: "Анна\nБерёзова", img: "https://static.tildacdn.com/tild3564-6434-4661-b535-323930303565/photo.png" },
  { name: "Иван\nПетров", img: "https://static.tildacdn.com/tild6164-3861-4362-b336-633136623034/photo.png" },
  { name: "Ольга\nМорозова", img: "https://static.tildacdn.com/tild6163-3062-4265-b431-633465643537/photo.png" },
  { name: "Сергей\nВолков", img: "https://static.tildacdn.com/tild3766-3039-4535-b764-633762653934/photo.png" },
  { name: "Наталья\nЛебедева", img: "https://static.tildacdn.com/tild6165-3163-4034-b032-356561383439/photo.png" },
  { name: "Павел\nСоколов", img: "https://static.tildacdn.com/tild3132-6235-4237-b034-656435626335/photo.png" },
  { name: "Елена\nКузнецова", img: "https://static.tildacdn.com/tild6264-3131-4533-b231-393763323361/photo.png" },
];

const ELEMENTS_16 = [
  { n: "1", title: "Земля", desc: "Устойчивость, опора, принятие себя" },
  { n: "2", title: "Вода", desc: "Поток, гибкость, эмоциональный интеллект" },
  { n: "3", title: "Огонь", desc: "Трансформация, сила воли, энергия действия" },
  { n: "4", title: "Воздух", desc: "Свобода, лёгкость, широта восприятия" },
  { n: "5", title: "Эфир", desc: "Единство, пространство, безмолвие" },
  { n: "6", title: "Звук", desc: "Вибрация, мантра, резонанс с миром" },
  { n: "7", title: "Свет", desc: "Ясность, осознанность, внутренний свет" },
  { n: "8", title: "Тьма", desc: "Принятие тени, интеграция, глубина" },
  { n: "9", title: "Движение", desc: "Тело как инструмент трансформации" },
  { n: "10", title: "Покой", desc: "Остановка, созерцание, тишина" },
  { n: "11", title: "Дыхание", desc: "Пранаяма, жизненная сила, пробуждение" },
  { n: "12", title: "Взаимодействие", desc: "Зеркало, контакт, поле группы" },
  { n: "13", title: "Голос", desc: "Самовыражение, освобождение, звукотерапия" },
  { n: "14", title: "Касание", desc: "Телесный контакт, границы, присутствие" },
  { n: "15", title: "Пространство", desc: "Расширение, выход за рамки, горизонты" },
  { n: "16", title: "Интеграция", desc: "Объединение опыта в целостность жизни" },
];

const AFTER_MEDITATION = [
  "Тело расслаблено и наполнено энергией",
  "Ум ясный и спокойный",
  "Эмоции выровнены",
  "Чувствуешь связь с собой",
  "Снят накопленный стресс",
  "Появляется ощущение лёгкости",
  "Повышается чувствительность",
  "Углубляется самопонимание",
];

const INSTRUCTORS_FULL = [
  { name: "Алексей Черемных", city: "Москва", role: "Основатель метода", img: "https://static.tildacdn.com/tild3561-3236-4035-a232-333266336139/photo.png", tg: "#", ig: "#" },
  { name: "Мария Светлова", city: "Санкт-Петербург", role: "Инструктор", img: "https://static.tildacdn.com/tild6261-3136-4265-b665-376634613365/photo.png", tg: "#", ig: "#" },
  { name: "Дмитрий Коваль", city: "Екатеринбург", role: "Инструктор", img: "https://static.tildacdn.com/tild3237-6632-4361-b033-343464303535/photo.png", tg: "#", ig: "#" },
  { name: "Анна Берёзова", city: "Новосибирск", role: "Инструктор", img: "https://static.tildacdn.com/tild3564-6434-4661-b535-323930303565/photo.png", tg: "#", ig: "#" },
  { name: "Иван Петров", city: "Казань", role: "Инструктор", img: "https://static.tildacdn.com/tild6164-3861-4362-b336-633136623034/photo.png", tg: "#", ig: "#" },
  { name: "Ольга Морозова", city: "Краснодар", role: "Инструктор", img: "https://static.tildacdn.com/tild6163-3062-4265-b431-633465643537/photo.png", tg: "#", ig: "#" },
  { name: "Сергей Волков", city: "Воронеж", role: "Инструктор", img: "https://static.tildacdn.com/tild3766-3039-4535-b764-633762653934/photo.png", tg: "#", ig: "#" },
  { name: "Наталья Лебедева", city: "Самара", role: "Инструктор", img: "https://static.tildacdn.com/tild6165-3163-4034-b032-356561383439/photo.png", tg: "#", ig: "#" },
  { name: "Павел Соколов", city: "Уфа", role: "Инструктор", img: "https://static.tildacdn.com/tild3132-6235-4237-b034-656435626335/photo.png", tg: "#", ig: "#" },
  { name: "Елена Кузнецова", city: "Ростов-на-Дону", role: "Инструктор", img: "https://static.tildacdn.com/tild6264-3131-4533-b231-393763323361/photo.png", tg: "#", ig: "#" },
  { name: "Виктор Орлов", city: "Пермь", role: "Инструктор", img: "", tg: "#", ig: "#" },
  { name: "Светлана Жукова", city: "Омск", role: "Инструктор", img: "", tg: "#", ig: "#" },
];

const NAV = [
  { label: "О методе", href: "#about" },
  { label: "Практики", href: "#elements" },
  { label: "Инструкторы", href: "#instructors" },
  { label: "После медитации", href: "#after" },
  { label: "Контакты", href: "#contact" },
];

// ─── КОМПОНЕНТ ────────────────────────────────────────────────────────────────

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ fontFamily: "'Montserrat', sans-serif", background: "#0a0e1a" }}>

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
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Фоновое изображение — горы и облака */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80"
            alt="горы"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.55) saturate(1.1)" }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,20,40,0.3) 0%, rgba(0,10,30,0.15) 40%, rgba(0,10,30,0.6) 80%, #0a0e1a 100%)" }} />
          {/* Мистический свет сверху */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse, rgba(120,200,255,0.25) 0%, transparent 70%)" }} />
        </div>

        <div className="relative z-10 px-4 max-w-4xl mx-auto pt-20">
          <div style={{ opacity: 0, animation: "fade-in 1s ease 0.3s forwards" }}>
            <h1 className="font-display mb-4 leading-none tracking-widest"
              style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(72px, 16vw, 180px)", fontWeight: 700, color: "#fff", textShadow: "0 0 60px rgba(100,180,255,0.4)", letterSpacing: "0.08em" }}>
              ШОДХАН
            </h1>
          </div>
          <div style={{ opacity: 0, animation: "fade-in 0.9s ease 0.6s forwards" }}>
            <p className="text-base md:text-xl font-medium mb-2 tracking-wide"
              style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(255,255,255,0.92)", textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}>
              Активная медитация первоэлементов
            </p>
            <p className="text-sm md:text-base mb-10" style={{ color: "rgba(255,255,255,0.65)" }}>
              Шодхан в твоём городе! Выбери своего инструктора
            </p>
          </div>

          {/* Круглые фото инструкторов */}
          <div style={{ opacity: 0, animation: "fade-in 0.9s ease 0.9s forwards" }}>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {INSTRUCTORS_MAIN.slice(0, 10).map((ins, i) => (
                <div key={i} className="flex flex-col items-center gap-1.5 group cursor-pointer">
                  <div className="rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-110"
                    style={{ width: 60, height: 60, border: "2px solid rgba(255,255,255,0.4)", boxShadow: "0 4px 16px rgba(0,0,0,0.4)" }}>
                    <img src={ins.img} alt={ins.name}
                      className="w-full h-full object-cover"
                      onError={e => { (e.currentTarget as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(ins.name.replace('\n',' '))}&background=2d4a2d&color=fff&size=60`; }} />
                  </div>
                  <span className="text-center whitespace-pre-line leading-tight"
                    style={{ fontSize: "9px", color: "rgba(255,255,255,0.7)", fontFamily: "'Montserrat', sans-serif" }}>
                    {ins.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center"
            style={{ opacity: 0, animation: "fade-in 0.9s ease 1.1s forwards" }}>
            <a href="#about"
              className="px-8 py-3.5 rounded-full font-semibold text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105"
              style={{ background: "linear-gradient(135deg,#3a8f4a,#5cb86e)", color: "#fff", boxShadow: "0 6px 24px rgba(60,150,80,0.45)" }}>
              Узнать о методе
            </a>
            <a href="#instructors"
              className="px-8 py-3.5 rounded-full font-medium text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105"
              style={{ border: "1px solid rgba(255,255,255,0.4)", color: "#fff", backdropFilter: "blur(8px)", background: "rgba(255,255,255,0.08)" }}>
              Выбрать инструктора
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ opacity: 0, animation: "fade-in 1s ease 1.5s forwards", color: "rgba(255,255,255,0.35)" }}>
          <div className="w-px h-10 animate-pulse"
            style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)" }} />
        </div>
      </section>

      {/* ══════════ ЧТО ТАКОЕ ШОДХАН ══════════ */}
      <section id="about" className="py-24 px-5 relative overflow-hidden"
        style={{ background: "linear-gradient(180deg,#0a0e1a 0%,#0d1520 50%,#0a1a0f 100%)" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
            style={{ background: "radial-gradient(ellipse,#1a6b2a,transparent)" }} />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-8"
            style={{ background: "radial-gradient(ellipse,#0a3a6b,transparent)" }} />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <FadeIn className="text-center mb-16">
            <h2 className="font-display mb-4"
              style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(32px,5vw,56px)", fontWeight: 700, color: "#fff", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              ЧТО ТАКОЕ ШОДХАН?
            </h2>
            <div className="w-20 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg,#3a8f4a,#5cb86e)" }} />
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <p className="text-base leading-loose mb-5" style={{ color: "rgba(255,255,255,0.75)" }}>
                <strong style={{ color: "#5cb86e" }}>Шодхан</strong> — это уникальный метод активной медитации,
                разработанный специально для современного человека. Название происходит от санскритского слова,
                означающего «очищение».
              </p>
              <p className="text-base leading-loose mb-5" style={{ color: "rgba(255,255,255,0.75)" }}>
                В отличие от традиционной медитации, где нужно «отключить» ум усилием воли, Шодхан
                работает через активное взаимодействие с первоэлементами: землёй, водой, огнём, воздухом и эфиром.
              </p>
              <p className="text-base leading-loose mb-8" style={{ color: "rgba(255,255,255,0.75)" }}>
                Практика включает движение, дыхание, голос, звук и медитативное погружение — всё это
                вместе создаёт мощный инструмент трансформации сознания.
              </p>
              <a href="#contact"
                className="inline-block px-8 py-3.5 rounded-full font-semibold text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105"
                style={{ background: "linear-gradient(135deg,#3a8f4a,#5cb86e)", color: "#fff" }}>
                Попробовать
              </a>
            </FadeIn>

            <FadeIn delay={0.2}>
              {/* Видео-превью (плейсхолдер) */}
              <div className="relative rounded-2xl overflow-hidden cursor-pointer group"
                style={{ aspectRatio: "16/9", background: "linear-gradient(135deg,#0d2a15,#0a1a30)" }}>
                <img
                  src="https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80"
                  alt="Медитация Шодхан"
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-85 transition-opacity duration-400"
                />
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-18 h-18 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ width: 72, height: 72, background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "2px solid rgba(255,255,255,0.4)" }}>
                    <Icon name="Play" size={28} />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.9)", fontFamily: "'Montserrat',sans-serif" }}>
                    Смотреть видео о методе
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Основатель */}
          <FadeIn delay={0.1} className="mt-16">
            <div className="rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div className="rounded-full overflow-hidden shrink-0" style={{ width: 120, height: 120, border: "3px solid rgba(92,184,110,0.5)" }}>
                <img src="https://static.tildacdn.com/tild3561-3236-4035-a232-333266336139/photo.png"
                  alt="Алексей Черемных"
                  className="w-full h-full object-cover"
                  onError={e => { (e.currentTarget as HTMLImageElement).src = `https://ui-avatars.com/api/?name=АЧ&background=2d4a2d&color=fff&size=120`; }} />
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "#5cb86e", fontFamily: "'Oswald',sans-serif" }}>Основатель метода</p>
                <h3 className="font-display text-2xl font-bold mb-3" style={{ fontFamily: "'Oswald',sans-serif", color: "#fff", letterSpacing: "0.05em" }}>
                  АЛЕКСЕЙ ЧЕРЕМНЫХ
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Более 15 лет изучения и практики медитации. Создал метод Шодхан как синтез
                  древних традиций и современного понимания психологии и нейронауки.
                  Провёл сотни семинаров и обучил тысячи практикующих по всей России и миру.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════ КАРТА МИРА ══════════ */}
      <section className="py-16 px-5 relative overflow-hidden"
        style={{ background: "linear-gradient(180deg,#0a1a0f,#081218)" }}>
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display mb-3"
              style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(28px,4vw,48px)", fontWeight: 700, color: "#fff", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              ШОДХАН В ТВОЁМ ГОРОДЕ
            </h2>
            <p className="text-sm mb-10" style={{ color: "rgba(255,255,255,0.55)" }}>
              Инструкторы Шодхан уже работают в десятках городов России и СНГ
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="relative rounded-2xl overflow-hidden"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <img
                src="https://images.unsplash.com/photo-1589519160732-57fc498494f8?w=1200&q=70"
                alt="Карта мира"
                className="w-full object-cover opacity-40"
                style={{ height: 320 }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-display text-6xl font-bold mb-2"
                    style={{ fontFamily: "'Oswald',sans-serif", color: "#5cb86e" }}>20+</div>
                  <div className="text-lg font-medium" style={{ color: "rgba(255,255,255,0.8)" }}>городов присутствия</div>
                </div>
              </div>
              {/* Точки городов */}
              {[
                { top: "35%", left: "55%", city: "Москва" },
                { top: "30%", left: "54%", city: "СПб" },
                { top: "38%", left: "60%", city: "Екб" },
                { top: "42%", left: "62%", city: "Новосиб" },
                { top: "45%", left: "63%", city: "Омск" },
                { top: "40%", left: "58%", city: "Казань" },
              ].map((dot, i) => (
                <div key={i} className="absolute" style={{ top: dot.top, left: dot.left, transform: "translate(-50%,-50%)" }}>
                  <div className="relative">
                    <div className="w-3 h-3 rounded-full animate-pulse"
                      style={{ background: "#5cb86e", boxShadow: "0 0 12px #5cb86e" }} />
                    <span className="absolute top-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-center"
                      style={{ fontSize: "8px", color: "rgba(255,255,255,0.7)" }}>
                      {dot.city}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════ 16 ЭЛЕМЕНТОВ ══════════ */}
      <section id="elements" className="py-24 px-5 relative"
        style={{ background: "linear-gradient(180deg,#081218,#0a0e1a)" }}>
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2 className="font-display mb-4"
              style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(32px,5vw,56px)", fontWeight: 700, color: "#fff", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              ПРАКТИКИ МЕДИТАЦИИ
            </h2>
            <div className="w-20 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg,#3a8f4a,#5cb86e)" }} />
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ELEMENTS_16.map((el, i) => (
              <FadeIn key={i} delay={(i % 4) * 0.07}>
                <div className="rounded-xl p-5 group transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "linear-gradient(145deg,rgba(20,35,25,0.9),rgba(10,18,30,0.85))",
                    border: "1px solid rgba(92,184,110,0.12)",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(92,184,110,0.35)")}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(92,184,110,0.12)")}>
                  <div className="flex items-start gap-3 mb-2">
                    <span className="font-display font-bold text-3xl leading-none"
                      style={{ fontFamily: "'Oswald',sans-serif", color: "rgba(92,184,110,0.3)", lineHeight: 1 }}>
                      {el.n}
                    </span>
                    <h3 className="font-display font-semibold text-base pt-1"
                      style={{ fontFamily: "'Oswald',sans-serif", color: "#fff", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                      {el.title}
                    </h3>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {el.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ ПОСЛЕ МЕДИТАЦИИ ══════════ */}
      <section id="after" className="py-24 px-5 relative overflow-hidden"
        style={{ background: "linear-gradient(180deg,#0a0e1a,#0a1a0f)" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-8"
            style={{ background: "radial-gradient(ellipse,#1a6b2a,transparent)" }} />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <FadeIn className="text-center mb-16">
            <h2 className="font-display mb-4"
              style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(32px,5vw,56px)", fontWeight: 700, color: "#fff", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              ПОСЛЕ МЕДИТАЦИИ ТЫ
            </h2>
            <div className="w-20 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg,#3a8f4a,#5cb86e)" }} />
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {AFTER_MEDITATION.map((item, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="rounded-xl p-5 text-center group transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "linear-gradient(145deg,rgba(20,45,25,0.85),rgba(10,25,15,0.8))",
                    border: "1px solid rgba(92,184,110,0.15)",
                  }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3"
                    style={{ background: "rgba(92,184,110,0.12)", border: "1px solid rgba(92,184,110,0.25)" }}>
                    <Icon name="Check" size={16} />
                  </div>
                  <p className="text-sm font-medium leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
                    {item}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center">
            <a href="#contact"
              className="inline-block px-10 py-4 rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105"
              style={{ background: "linear-gradient(135deg,#3a8f4a,#5cb86e)", color: "#fff", boxShadow: "0 8px 30px rgba(60,150,80,0.4)" }}>
              Записаться на медитацию
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ══════════ ИНСТРУКТОРЫ ══════════ */}
      <section id="instructors" className="py-24 px-5"
        style={{ background: "linear-gradient(180deg,#0a1a0f,#0a0e1a)" }}>
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2 className="font-display mb-4"
              style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(32px,5vw,56px)", fontWeight: 700, color: "#fff", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              ИНСТРУКТОРЫ ШОДХАН
            </h2>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
              Сертифицированные инструкторы в твоём городе
            </p>
            <div className="w-20 h-1 mx-auto rounded-full mt-4" style={{ background: "linear-gradient(90deg,#3a8f4a,#5cb86e)" }} />
          </FadeIn>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {INSTRUCTORS_FULL.map((ins, i) => (
              <FadeIn key={i} delay={(i % 4) * 0.07}>
                <div className="rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-2"
                  style={{
                    background: "linear-gradient(145deg,rgba(18,32,22,0.95),rgba(10,18,28,0.9))",
                    border: "1px solid rgba(92,184,110,0.12)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                  }}>
                  {/* Фото */}
                  <div className="relative overflow-hidden" style={{ height: 220 }}>
                    {ins.img ? (
                      <img src={ins.img} alt={ins.name}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        style={{ filter: "brightness(0.9)" }}
                        onError={e => {
                          (e.currentTarget as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(ins.name)}&background=1a3a22&color=5cb86e&size=220`;
                        }} />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center"
                        style={{ background: "linear-gradient(135deg,#0d2a15,#0a1a25)" }}>
                        <div className="w-20 h-20 rounded-full flex items-center justify-center"
                          style={{ background: "rgba(92,184,110,0.1)", border: "2px solid rgba(92,184,110,0.25)" }}>
                          <Icon name="User" size={32} />
                        </div>
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 h-16"
                      style={{ background: "linear-gradient(to top,rgba(10,18,28,0.9),transparent)" }} />
                    <div className="absolute bottom-2 left-3">
                      <span className="text-xs px-2.5 py-1 rounded-full font-medium"
                        style={{ background: "rgba(0,0,0,0.6)", color: "#5cb86e", backdropFilter: "blur(6px)", fontFamily: "'Montserrat',sans-serif" }}>
                        {ins.city}
                      </span>
                    </div>
                  </div>

                  {/* Инфо */}
                  <div className="p-4">
                    <p className="text-xs mb-1" style={{ color: "rgba(92,184,110,0.7)", fontFamily: "'Oswald',sans-serif", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                      {ins.role}
                    </p>
                    <h3 className="font-bold text-base mb-3"
                      style={{ fontFamily: "'Oswald',sans-serif", color: "#fff", letterSpacing: "0.04em" }}>
                      {ins.name}
                    </h3>
                    <div className="flex gap-2">
                      <a href={ins.tg}
                        className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                        style={{ background: "rgba(92,184,110,0.1)", border: "1px solid rgba(92,184,110,0.2)" }}>
                        <Icon name="Send" size={12} />
                      </a>
                      <a href={ins.ig}
                        className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                        style={{ background: "rgba(92,184,110,0.1)", border: "1px solid rgba(92,184,110,0.2)" }}>
                        <Icon name="Instagram" size={12} />
                      </a>
                      <a href="#contact"
                        className="ml-auto text-xs px-3 py-1.5 rounded-full font-medium transition-all duration-200 hover:opacity-80"
                        style={{ background: "linear-gradient(135deg,#3a8f4a,#5cb86e)", color: "#fff", fontFamily: "'Montserrat',sans-serif" }}>
                        Записаться
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-12">
            <a href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105"
              style={{ border: "1px solid rgba(92,184,110,0.4)", color: "#5cb86e", background: "rgba(92,184,110,0.05)" }}>
              <Icon name="UserPlus" size={16} />
              Стать инструктором
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ══════════ КАК ПРОХОДИТ ПРАКТИКА ══════════ */}
      <section className="py-24 px-5 relative overflow-hidden"
        style={{ background: "linear-gradient(180deg,#0a0e1a,#0a1a0f)" }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2 className="font-display mb-4"
              style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(28px,4vw,52px)", fontWeight: 700, color: "#fff", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              КАК ПРОХОДИТ ПРАКТИКА
            </h2>
            <div className="w-20 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg,#3a8f4a,#5cb86e)" }} />
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=70", title: "Групповые сессии", desc: "Медитации в группе создают особое поле осознанности. Совместная практика усиливает эффект многократно." },
              { img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=70", title: "Индивидуальная работа", desc: "Персональные сессии позволяют работать с конкретными запросами и глубоко погрузиться в практику." },
              { img: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=600&q=70", title: "Природные интенсивы", desc: "Выездные практики на природе — горы, лес, море. Первоэлементы в их живом воплощении усиливают медитацию." },
              { img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=70", title: "Онлайн-практики", desc: "Практикуй Шодхан из любой точки мира. Онлайн-формат сохраняет глубину и эффективность метода." },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-1"
                  style={{ border: "1px solid rgba(92,184,110,0.1)" }}>
                  <div className="relative overflow-hidden" style={{ height: 200 }}>
                    <img src={item.img} alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ filter: "brightness(0.65) saturate(0.8)" }} />
                    <div className="absolute inset-0 flex items-end p-5"
                      style={{ background: "linear-gradient(to top,rgba(0,0,0,0.7),transparent)" }}>
                      <h3 className="font-bold text-xl"
                        style={{ fontFamily: "'Oswald',sans-serif", color: "#fff", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-5" style={{ background: "rgba(255,255,255,0.03)" }}>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="py-20 px-5 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#0d2a15 0%,#0a1825 50%,#0d2a15 100%)" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-15"
            style={{ background: "radial-gradient(ellipse,#1a6b2a,transparent)" }} />
        </div>
        <div className="max-w-2xl mx-auto relative z-10">
          <FadeIn>
            <h2 className="font-display mb-4"
              style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(32px,5vw,60px)", fontWeight: 700, color: "#fff", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              ГОТОВ НАЧАТЬ ПРАКТИКУ?
            </h2>
            <p className="text-base mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>
              Присоединяйся к Шодхан в своём городе. Первая сессия — лучший способ
              почувствовать силу активной медитации.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact"
                className="px-10 py-4 rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105"
                style={{ background: "linear-gradient(135deg,#3a8f4a,#5cb86e)", color: "#fff", boxShadow: "0 8px 30px rgba(60,150,80,0.5)" }}>
                Записаться на сессию
              </a>
              <a href="https://t.me/shodhan" target="_blank" rel="noopener noreferrer"
                className="px-8 py-4 rounded-full font-medium text-sm tracking-widest uppercase inline-flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
                style={{ border: "1px solid rgba(255,255,255,0.3)", color: "#fff", background: "rgba(255,255,255,0.05)" }}>
                <Icon name="Send" size={14} />
                Telegram-канал
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════ КОНТАКТЫ ══════════ */}
      <section id="contact" className="py-24 px-5"
        style={{ background: "linear-gradient(180deg,#0a1825,#0a0e1a)" }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-14">
            <h2 className="font-display mb-4"
              style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(32px,5vw,56px)", fontWeight: 700, color: "#fff", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              СВЯЗАТЬСЯ С НАМИ
            </h2>
            <div className="w-20 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg,#3a8f4a,#5cb86e)" }} />
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-10">
            <FadeIn>
              <div className="rounded-2xl p-8"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <h3 className="font-display font-bold text-xl mb-6"
                  style={{ fontFamily: "'Oswald',sans-serif", color: "#fff", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  ОСТАВИТЬ ЗАЯВКУ
                </h3>
                <div className="space-y-4">
                  {[
                    { label: "Ваше имя", placeholder: "Как вас зовут?" },
                    { label: "Телефон или Email", placeholder: "+7 (___) ___-__-__" },
                    { label: "Ваш город", placeholder: "Москва, Санкт-Петербург..." },
                  ].map((f, i) => (
                    <div key={i}>
                      <label className="block text-xs font-medium tracking-widest uppercase mb-2"
                        style={{ color: "rgba(92,184,110,0.7)", fontFamily: "'Oswald',sans-serif" }}>
                        {f.label}
                      </label>
                      <input type="text" placeholder={f.placeholder}
                        className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-300"
                        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.85)", fontFamily: "'Montserrat',sans-serif" }}
                        onFocus={e => (e.currentTarget.style.borderColor = "rgba(92,184,110,0.5)")}
                        onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")} />
                    </div>
                  ))}
                  <textarea placeholder="Ваш вопрос или пожелание..."
                    rows={3}
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-300 resize-none"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.85)", fontFamily: "'Montserrat',sans-serif" }}
                    onFocus={e => (e.currentTarget.style.borderColor = "rgba(92,184,110,0.5)")}
                    onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")} />
                  <button
                    className="w-full py-4 rounded-xl font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
                    style={{ background: "linear-gradient(135deg,#3a8f4a,#5cb86e)", color: "#fff", fontFamily: "'Oswald',sans-serif" }}>
                    ОТПРАВИТЬ ЗАЯВКУ
                  </button>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="flex flex-col gap-4 h-full justify-center">
                {[
                  { icon: "Globe", label: "Сайт", value: "shodhan.ru", href: "https://shodhan.ru" },
                  { icon: "Send", label: "Telegram", value: "@shodhan", href: "https://t.me/shodhan" },
                  { icon: "Instagram", label: "Instagram", value: "@shodhan.ru", href: "#" },
                  { icon: "Youtube", label: "YouTube", value: "Шодхан — медитация", href: "#" },
                  { icon: "Mail", label: "Email", value: "info@shodhan.ru", href: "mailto:info@shodhan.ru" },
                ].map((c, i) => (
                  <a key={i} href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl group transition-all duration-300"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(92,184,110,0.35)")}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110"
                      style={{ background: "rgba(92,184,110,0.1)", border: "1px solid rgba(92,184,110,0.2)" }}>
                      <Icon name={c.icon as "Globe"} size={15} />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest mb-0.5"
                        style={{ color: "rgba(92,184,110,0.55)", fontSize: "9px", fontFamily: "'Oswald',sans-serif" }}>
                        {c.label}
                      </div>
                      <div className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.8)", fontFamily: "'Montserrat',sans-serif" }}>
                        {c.value}
                      </div>
                    </div>
                    <Icon name="ArrowUpRight" size={13} className="ml-auto opacity-0 group-hover:opacity-50 transition-opacity duration-200" />
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer className="py-8 px-5" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display font-bold tracking-widest text-lg"
            style={{ fontFamily: "'Oswald',sans-serif", color: "rgba(255,255,255,0.35)", letterSpacing: "0.15em" }}>
            ШОДХАН
          </span>
          <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "11px", fontFamily: "'Montserrat',sans-serif" }}>
            © {new Date().getFullYear()} Шодхан. Активная медитация первоэлементов.
          </p>
          <div className="flex gap-5">
            {NAV.map(n => (
              <a key={n.href} href={n.href}
                className="transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.25)", fontSize: "10px", fontFamily: "'Oswald',sans-serif", letterSpacing: "0.1em", textTransform: "uppercase" }}
                onMouseEnter={e => (e.currentTarget.style.color = "rgba(92,184,110,0.7)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.25)")}>
                {n.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
