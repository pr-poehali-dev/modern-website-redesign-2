import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const useInView = (threshold = 0.15) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
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
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

const ELEMENTS = [
  { symbol: "🌬", name: "Воздух", color: "#C9A84C" },
  { symbol: "🔥", name: "Огонь", color: "#E8704A" },
  { symbol: "🌿", name: "Земля", color: "#6BAE75" },
  { symbol: "💧", name: "Вода", color: "#4A9BC9" },
  { symbol: "✦", name: "Эфир", color: "#A084DC" },
];

const PRACTICES = [
  { icon: "Zap", title: "Активная медитация", desc: "Динамические практики пробуждения, которые работают через движение тела, звук и дыхание. Не нужно «отключаться» — нужно включиться полностью.", tag: "Основа" },
  { icon: "Wind", title: "Первоэлементы", desc: "Работа с пятью стихиями — земля, вода, огонь, воздух, эфир. Каждый элемент открывает особое качество осознанности и присутствия.", tag: "Глубина" },
  { icon: "Sun", title: "Телесные практики", desc: "Медитация через тело: освобождение зажимов, восстановление естественных ритмов, пробуждение витальной энергии.", tag: "Тело" },
  { icon: "Music", title: "Голос и звук", desc: "Практики с голосом и мантрами как инструмент трансформации. Звук — прямой путь к изменению состояния сознания.", tag: "Звук" },
  { icon: "Users", title: "Групповые практики", desc: "Особая сила трансформации в группе. Поле осознанности многократно усиливается, когда практикующие работают вместе.", tag: "Группа" },
  { icon: "Layers", title: "Индивидуальная работа", desc: "Персональные сессии с инструктором для глубокой индивидуальной трансформации и точной работы с конкретными запросами.", tag: "Персонально" },
];

const INSTRUCTORS = [
  { name: "Алексей Черемных", role: "Основатель метода Шодхан", city: "Москва", image: "https://static.tildacdn.com/tild3561-3236-4035-a232-333266336139/photo.png", desc: "Создатель метода активной медитации первоэлементов. Более 15 лет практики и преподавания." },
  { name: "Мария Светлова", role: "Инструктор Шодхан", city: "Санкт-Петербург", image: "", desc: "Сертифицированный инструктор. Специализация — работа с женской энергией и телесными практиками." },
  { name: "Дмитрий Коваль", role: "Инструктор Шодхан", city: "Екатеринбург", image: "", desc: "Ведёт регулярные группы и интенсивы. Фокус на интеграции практики в повседневную жизнь." },
  { name: "Анна Берёзова", role: "Инструктор Шодхан", city: "Новосибирск", image: "", desc: "Психолог и медитативный инструктор. Работает на стыке психологии и древних практик осознанности." },
];

const TESTIMONIALS = [
  { text: "Шодхан изменил моё отношение к медитации. Я наконец нашла практику, которая работает именно для меня — через активность, а не через «сиди тихо».", author: "Екатерина С.", city: "Москва" },
  { text: "После первого интенсива почувствовал такую глубину присутствия, которой не достигал за годы традиционных практик. Метод действительно уникальный.", author: "Андрей В.", city: "Санкт-Петербург" },
  { text: "Работа с первоэлементами открыла совершенно новое измерение в понимании себя. Каждый элемент — это целый мир для исследования.", author: "Наталья М.", city: "Екатеринбург" },
];

const NAV_ITEMS = [
  { label: "Метод", href: "#method" },
  { label: "Практики", href: "#practices" },
  { label: "Инструкторы", href: "#instructors" },
  { label: "Отзывы", href: "#testimonials" },
  { label: "Контакты", href: "#contact" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen font-body overflow-x-hidden" style={{ background: "var(--violet-deep)" }}>

      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(13,5,32,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201,168,76,0.12)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #C9A84C, #E8C97A)" }}>
              <span className="text-base">✦</span>
            </div>
            <span className="font-display text-xl font-semibold tracking-wider" style={{ color: "#E8C97A" }}>
              ШОДХАН
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href}
                className="text-xs tracking-widest uppercase transition-all duration-300 hover:opacity-100"
                style={{ color: "rgba(232,201,122,0.65)", fontWeight: 500, letterSpacing: "0.12em" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#E8C97A")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(232,201,122,0.65)")}>
                {item.label}
              </a>
            ))}
            <a href="#contact" className="btn-gold px-5 py-2.5 rounded-full text-xs tracking-widest uppercase">
              Записаться
            </a>
          </div>

          <button className="md:hidden p-2" style={{ color: "#E8C97A" }} onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
            style={{ background: "rgba(13,5,32,0.97)", borderBottom: "1px solid rgba(201,168,76,0.15)" }}>
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}
                className="text-xs tracking-widest uppercase py-2"
                style={{ color: "rgba(232,201,122,0.8)" }}>
                {item.label}
              </a>
            ))}
            <a href="#contact" className="btn-gold px-6 py-3 rounded-full text-xs text-center mt-2 tracking-widest uppercase">
              Записаться
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0D0520 0%, #1A0845 35%, #0D2A3A 65%, #0A1520 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
            style={{ border: "1px solid rgba(201,168,76,0.07)", animation: "rotate-slow 30s linear infinite" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full"
            style={{ border: "1px dashed rgba(0,255,224,0.1)", animation: "rotate-slow 18s linear infinite reverse" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full"
            style={{ border: "1px solid rgba(201,168,76,0.15)" }} />
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full"
            style={{ background: "radial-gradient(ellipse, rgba(74,32,128,0.25) 0%, transparent 70%)" }} />
          <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full"
            style={{ background: "radial-gradient(ellipse, rgba(15,123,108,0.18) 0%, transparent 70%)" }} />
          <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full animate-float"
            style={{ background: "#E8C97A", boxShadow: "0 0 14px #E8C97A" }} />
          <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 rounded-full"
            style={{ background: "#00FFE0", boxShadow: "0 0 10px #00FFE0", animation: "float 6s ease-in-out 2s infinite" }} />
          <div className="absolute top-2/3 right-1/3 w-1 h-1 rounded-full"
            style={{ background: "#C9A84C", boxShadow: "0 0 8px #C9A84C", animation: "float 6s ease-in-out 4s infinite" }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs tracking-widest uppercase mb-8"
            style={{ border: "1px solid rgba(201,168,76,0.25)", background: "rgba(201,168,76,0.06)", color: "#C9A84C",
              opacity: 0, animation: "fade-in 0.7s ease 0.3s forwards" }}>
            <span>✦</span><span>Активная медитация первоэлементов</span><span>✦</span>
          </div>

          <h1 className="font-display leading-none mb-6"
            style={{ fontSize: "clamp(72px, 14vw, 160px)", fontWeight: 300, letterSpacing: "-0.02em",
              opacity: 0, animation: "fade-in 1s ease 0.5s forwards" }}>
            <span style={{ background: "linear-gradient(135deg, #C9A84C 0%, #E8C97A 50%, #9A7A2E 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              ШОД
            </span>
            <span style={{ color: "rgba(232,201,122,0.22)" }}>ХАН</span>
          </h1>

          <p className="font-display text-xl md:text-2xl mb-4 italic"
            style={{ color: "rgba(232,201,122,0.65)", fontWeight: 300, opacity: 0, animation: "fade-in 0.9s ease 0.7s forwards" }}>
            Очищение через действие. Пробуждение через присутствие.
          </p>

          <p className="text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
            style={{ color: "rgba(225,210,190,0.6)", opacity: 0, animation: "fade-in 0.9s ease 0.9s forwards" }}>
            Метод работы с сознанием через пять первоэлементов — для тех, кому тесно
            в тихой медитации и нужна живая, динамичная практика трансформации.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{ opacity: 0, animation: "fade-in 0.9s ease 1.1s forwards" }}>
            <a href="#contact" className="btn-gold px-10 py-4 rounded-full text-xs tracking-widest uppercase">
              Начать практику
            </a>
            <a href="#method" className="btn-outline-gold px-10 py-4 rounded-full text-xs tracking-widest uppercase">
              Узнать о методе
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ opacity: 0, animation: "fade-in 1s ease 1.5s forwards", color: "rgba(201,168,76,0.35)" }}>
          <span style={{ fontSize: "9px", letterSpacing: "0.2em" }}>SCROLL</span>
          <div className="w-px h-10 animate-pulse"
            style={{ background: "linear-gradient(to bottom, rgba(201,168,76,0.5), transparent)" }} />
        </div>
      </section>

      {/* ELEMENTS BAR */}
      <div style={{ background: "rgba(0,0,0,0.35)", borderTop: "1px solid rgba(201,168,76,0.08)", borderBottom: "1px solid rgba(201,168,76,0.08)" }}>
        <div className="flex justify-center items-center gap-6 md:gap-12 overflow-x-auto px-6 py-5">
          {ELEMENTS.map((el, i) => (
            <div key={i} className="flex flex-col items-center gap-2 shrink-0 group cursor-default">
              <div className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-400"
                style={{ border: `1px solid ${el.color}30`, background: `${el.color}0D` }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 0 18px ${el.color}35`)}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}>
                <span className="text-lg">{el.symbol}</span>
              </div>
              <span className="text-xs tracking-widest uppercase font-body"
                style={{ color: `${el.color}80`, fontSize: "9px", letterSpacing: "0.15em" }}>
                {el.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* О МЕТОДЕ */}
      <section id="method" className="py-28 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, #4A2080 0%, transparent 70%)" }} />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-8 h-px" style={{ background: "rgba(201,168,76,0.5)" }} />
                <span className="text-xs tracking-widest uppercase" style={{ color: "#C9A84C" }}>О методе</span>
              </div>
              <h2 className="font-display mb-6 leading-tight"
                style={{ fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 400, color: "#E8C97A" }}>
                Что такое<br /><em>Шодхан?</em>
              </h2>
              <p className="text-base leading-loose mb-5" style={{ color: "rgba(225,210,190,0.68)" }}>
                <strong style={{ color: "#C9A84C" }}>Шодхан</strong> — это метод активной медитации,
                разработанный для современного человека. В отличие от традиционной медитации,
                здесь не нужно «успокоить ум» усилием воли — практика сама приводит к
                состоянию глубокого присутствия через движение, звук и работу с первоэлементами.
              </p>
              <p className="text-base leading-loose mb-10" style={{ color: "rgba(225,210,190,0.68)" }}>
                Метод основан на работе с пятью первоэлементами: землёй, водой, огнём,
                воздухом и эфиром. Каждый из них — это живое качество опыта, которое
                можно непосредственно прожить в теле.
              </p>
              <a href="#contact" className="btn-gold px-8 py-4 rounded-full text-xs tracking-widest uppercase inline-block">
                Попробовать
              </a>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "5", label: "первоэлементов\nв основе метода" },
                  { num: "15+", label: "лет\nразработки" },
                  { num: "1000+", label: "участников\nпо всей России" },
                  { num: "20+", label: "городов\nприсутствия" },
                ].map((s, i) => (
                  <div key={i} className="rounded-2xl p-6 card-hover"
                    style={{ background: "linear-gradient(145deg, rgba(30,8,69,0.8), rgba(15,40,60,0.7))", border: "1px solid rgba(201,168,76,0.1)" }}>
                    <div className="font-display font-bold mb-2"
                      style={{ fontSize: "clamp(32px, 4vw, 52px)", background: "linear-gradient(135deg, #C9A84C, #E8C97A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                      {s.num}
                    </div>
                    <div className="text-xs leading-relaxed whitespace-pre-line"
                      style={{ color: "rgba(225,210,190,0.5)", fontSize: "11px" }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ПРАКТИКИ */}
      <section id="practices" className="py-28 px-6 relative">
        <div className="absolute inset-0 mesh-bg opacity-40 pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-px" style={{ background: "rgba(201,168,76,0.35)" }} />
              <span className="text-xs tracking-widest uppercase" style={{ color: "#C9A84C" }}>Практики</span>
              <div className="w-12 h-px" style={{ background: "rgba(201,168,76,0.35)" }} />
            </div>
            <h2 className="font-display mb-4" style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 400, color: "#E8C97A" }}>
              Форматы работы
            </h2>
            <p className="text-sm max-w-lg mx-auto" style={{ color: "rgba(225,210,190,0.55)" }}>
              Шодхан предлагает разные пути входа в практику — от коротких сессий до глубоких интенсивов
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PRACTICES.map((p, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className="rounded-2xl p-7 h-full card-hover relative overflow-hidden group"
                  style={{ background: "linear-gradient(145deg, rgba(26,8,69,0.88), rgba(13,35,50,0.82))", border: "1px solid rgba(201,168,76,0.09)" }}>
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse, rgba(201,168,76,0.07) 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.18)" }}>
                      <Icon name={p.icon as "Zap"} size={17} />
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full"
                      style={{ background: "rgba(201,168,76,0.07)", color: "rgba(201,168,76,0.65)", border: "1px solid rgba(201,168,76,0.13)" }}>
                      {p.tag}
                    </span>
                  </div>
                  <h3 className="font-display text-xl mb-3" style={{ color: "#E8C97A", fontWeight: 500 }}>
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(225,210,190,0.58)" }}>
                    {p.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* КАК ЭТО РАБОТАЕТ */}
      <section className="py-28 px-6 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] rounded-full opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, #0F7B6C 0%, transparent 70%)" }} />
        <div className="max-w-5xl mx-auto relative z-10">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-px" style={{ background: "rgba(0,255,224,0.25)" }} />
              <span className="text-xs tracking-widest uppercase" style={{ color: "#1AAFA0" }}>Процесс</span>
              <div className="w-12 h-px" style={{ background: "rgba(0,255,224,0.25)" }} />
            </div>
            <h2 className="font-display mb-4" style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 400, color: "#E8C97A" }}>
              Как это работает
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-4 gap-5">
            {[
              { step: "01", title: "Вход через тело", desc: "Медитация начинается не с попытки остановить мысли, а с движения — тело становится инструментом осознанности." },
              { step: "02", title: "Элемент как зеркало", desc: "Каждый первоэлемент раскрывает определённое качество присутствия. Ты работаешь с тем, что живёт в тебе прямо сейчас." },
              { step: "03", title: "Трансформация", desc: "Накопленное напряжение и ментальные паттерны растворяются через живую практику, а не через усилие воли." },
              { step: "04", title: "Интеграция", desc: "Состояние осознанности, пробуждённое в практике, постепенно становится фоном повседневной жизни." },
            ].map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="rounded-2xl p-6"
                  style={{ background: "linear-gradient(145deg, rgba(26,8,69,0.75), rgba(10,20,30,0.7))", border: "1px solid rgba(201,168,76,0.09)" }}>
                  <div className="font-display text-5xl font-light mb-4"
                    style={{ background: "linear-gradient(135deg, #C9A84C, #E8C97A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", opacity: 0.45 }}>
                    {s.step}
                  </div>
                  <h3 className="font-display text-lg mb-3" style={{ color: "#E8C97A", fontWeight: 500 }}>
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(225,210,190,0.52)" }}>
                    {s.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ИНСТРУКТОРЫ */}
      <section id="instructors" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-px" style={{ background: "rgba(201,168,76,0.35)" }} />
              <span className="text-xs tracking-widest uppercase" style={{ color: "#C9A84C" }}>Команда</span>
              <div className="w-12 h-px" style={{ background: "rgba(201,168,76,0.35)" }} />
            </div>
            <h2 className="font-display mb-4" style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 400, color: "#E8C97A" }}>
              Инструкторы Шодхан
            </h2>
            <p className="text-sm max-w-md mx-auto" style={{ color: "rgba(225,210,190,0.55)" }}>
              Шодхан в твоём городе — выбери своего инструктора
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {INSTRUCTORS.map((ins, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="rounded-2xl overflow-hidden card-hover group cursor-pointer"
                  style={{ background: "linear-gradient(145deg, rgba(26,8,69,0.92), rgba(13,30,45,0.88))", border: "1px solid rgba(201,168,76,0.1)" }}>
                  <div className="relative h-52 overflow-hidden"
                    style={{ background: "linear-gradient(135deg, rgba(74,32,128,0.4), rgba(15,123,108,0.3))" }}>
                    {ins.image ? (
                      <img src={ins.image} alt={ins.name}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full flex items-center justify-center"
                          style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)" }}>
                          <Icon name="User" size={30} />
                        </div>
                      </div>
                    )}
                    <div className="absolute bottom-3 left-3">
                      <span className="text-xs px-2.5 py-1 rounded-full"
                        style={{ background: "rgba(13,5,32,0.75)", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.2)", backdropFilter: "blur(8px)" }}>
                        {ins.city}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg mb-1" style={{ color: "#E8C97A", fontWeight: 500 }}>{ins.name}</h3>
                    <p className="text-xs mb-3" style={{ color: "rgba(201,168,76,0.5)", letterSpacing: "0.05em" }}>{ins.role}</p>
                    <p className="text-xs leading-relaxed mb-4" style={{ color: "rgba(225,210,190,0.52)" }}>{ins.desc}</p>
                    <div className="flex gap-2">
                      <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                        style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.18)" }}>
                        <Icon name="Send" size={12} />
                      </a>
                      <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                        style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.18)" }}>
                        <Icon name="Instagram" size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-10">
            <a href="#contact" className="btn-outline-gold px-8 py-4 rounded-full text-xs tracking-widest uppercase inline-block">
              Стать инструктором
            </a>
          </FadeIn>
        </div>
      </section>

      <div className="section-divider" />

      {/* ОТЗЫВЫ */}
      <section id="testimonials" className="py-28 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(74,32,128,0.3) 0%, transparent 70%)" }} />
        <div className="max-w-5xl mx-auto relative z-10">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-px" style={{ background: "rgba(201,168,76,0.35)" }} />
              <span className="text-xs tracking-widest uppercase" style={{ color: "#C9A84C" }}>Опыт</span>
              <div className="w-12 h-px" style={{ background: "rgba(201,168,76,0.35)" }} />
            </div>
            <h2 className="font-display mb-4" style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 400, color: "#E8C97A" }}>
              Что говорят практикующие
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="rounded-2xl p-7 h-full"
                  style={{ background: "linear-gradient(145deg, rgba(26,8,69,0.88), rgba(13,35,50,0.82))", border: "1px solid rgba(201,168,76,0.09)" }}>
                  <div className="font-display text-5xl leading-none mb-4" style={{ color: "#C9A84C", opacity: 0.28 }}>"</div>
                  <p className="text-sm leading-loose mb-6 italic" style={{ color: "rgba(225,210,190,0.72)" }}>{t.text}</p>
                  <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid rgba(201,168,76,0.09)" }}>
                    <div className="w-9 h-9 rounded-full flex items-center justify-center"
                      style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.18)" }}>
                      <Icon name="User" size={13} />
                    </div>
                    <div>
                      <div className="text-sm font-medium" style={{ color: "#E8C97A" }}>{t.author}</div>
                      <div className="text-xs" style={{ color: "rgba(201,168,76,0.45)" }}>{t.city}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* CTA */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(135deg, rgba(74,32,128,0.3), rgba(15,123,108,0.18), rgba(74,32,128,0.22))" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-15 pointer-events-none"
          style={{ border: "1px solid rgba(201,168,76,0.35)", animation: "rotate-slow 25s linear infinite" }} />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <FadeIn>
            <div className="font-display text-6xl mb-6" style={{ color: "#C9A84C", opacity: 0.3 }}>✦</div>
            <h2 className="font-display mb-4 leading-tight"
              style={{ fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 300, color: "#E8C97A" }}>
              Готов начать<br /><em>путь Шодхан?</em>
            </h2>
            <p className="text-base mb-10 leading-loose" style={{ color: "rgba(225,210,190,0.62)" }}>
              Первая сессия — лучший способ понять, что такое активная медитация первоэлементов.
              Присоединяйся к практике в своём городе.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#contact" className="btn-gold px-10 py-4 rounded-full text-xs tracking-widest uppercase"
                style={{ boxShadow: "0 0 30px rgba(201,168,76,0.3)" }}>
                Записаться на сессию
              </a>
              <a href="https://t.me/shodhan" target="_blank" rel="noopener noreferrer"
                className="btn-outline-gold px-8 py-4 rounded-full text-xs tracking-widest uppercase inline-flex items-center gap-2">
                <Icon name="Send" size={13} />
                Telegram-канал
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="section-divider" />

      {/* КОНТАКТЫ */}
      <section id="contact" className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-px" style={{ background: "rgba(201,168,76,0.35)" }} />
              <span className="text-xs tracking-widest uppercase" style={{ color: "#C9A84C" }}>Контакты</span>
              <div className="w-12 h-px" style={{ background: "rgba(201,168,76,0.35)" }} />
            </div>
            <h2 className="font-display mb-4" style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 400, color: "#E8C97A" }}>
              Связаться с нами
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn>
              <div className="rounded-2xl p-8"
                style={{ background: "linear-gradient(145deg, rgba(26,8,69,0.88), rgba(13,35,50,0.82))", border: "1px solid rgba(201,168,76,0.12)" }}>
                <h3 className="font-display text-2xl mb-6" style={{ color: "#E8C97A", fontWeight: 500 }}>
                  Оставить заявку
                </h3>
                <div className="space-y-4">
                  {[
                    { label: "Ваше имя", placeholder: "Как вас зовут?" },
                    { label: "Телефон или Email", placeholder: "+7 (___) ___-__-__" },
                    { label: "Ваш город", placeholder: "Где вы находитесь?" },
                  ].map((field, i) => (
                    <div key={i}>
                      <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "rgba(201,168,76,0.55)" }}>
                        {field.label}
                      </label>
                      <input
                        type="text"
                        placeholder={field.placeholder}
                        className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-300"
                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,168,76,0.14)", color: "rgba(232,201,122,0.85)" }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.45)")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.14)")}
                      />
                    </div>
                  ))}
                  <button className="btn-gold w-full py-4 rounded-xl text-xs tracking-widest uppercase mt-2">
                    Отправить заявку
                  </button>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="flex flex-col justify-center gap-4 h-full">
                {[
                  { icon: "Globe", label: "Сайт", value: "shodhan.ru", href: "https://shodhan.ru" },
                  { icon: "Send", label: "Telegram", value: "@shodhan", href: "https://t.me/shodhan" },
                  { icon: "Instagram", label: "Instagram", value: "@shodhan.ru", href: "#" },
                  { icon: "Mail", label: "Email", value: "info@shodhan.ru", href: "mailto:info@shodhan.ru" },
                ].map((c, i) => (
                  <a key={i} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 rounded-xl group transition-all duration-300"
                    style={{ background: "rgba(26,8,69,0.55)", border: "1px solid rgba(201,168,76,0.09)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.28)")}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.09)")}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.16)" }}>
                      <Icon name={c.icon as "Globe"} size={15} />
                    </div>
                    <div>
                      <div className="text-xs tracking-widest uppercase mb-0.5" style={{ color: "rgba(201,168,76,0.45)", fontSize: "9px" }}>{c.label}</div>
                      <div className="text-sm" style={{ color: "rgba(232,201,122,0.8)" }}>{c.value}</div>
                    </div>
                    <Icon name="ArrowUpRight" size={13} className="ml-auto opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6" style={{ borderTop: "1px solid rgba(201,168,76,0.08)" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, rgba(201,168,76,0.35), rgba(232,201,122,0.25))", border: "1px solid rgba(201,168,76,0.25)" }}>
              <span className="text-xs" style={{ color: "#C9A84C" }}>✦</span>
            </div>
            <span className="font-display text-sm tracking-widest" style={{ color: "rgba(232,201,122,0.4)" }}>ШОДХАН</span>
          </div>
          <p className="text-xs text-center" style={{ color: "rgba(225,210,190,0.25)", fontSize: "11px" }}>
            © {new Date().getFullYear()} Шодхан. Активная медитация первоэлементов.
          </p>
          <div className="flex items-center gap-5">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href}
                className="text-xs tracking-wider uppercase transition-colors duration-300"
                style={{ color: "rgba(201,168,76,0.3)", fontSize: "10px" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(201,168,76,0.65)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(201,168,76,0.3)")}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
