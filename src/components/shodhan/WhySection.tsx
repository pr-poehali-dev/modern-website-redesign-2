import FadeIn from "./FadeIn";

const CARDS = [
  {
    img: "https://cdn.poehali.dev/projects/756e28ae-f342-42b1-ab53-44233856dec1/files/222c8ac9-87c0-4cc7-8b91-6c5be23f56f2.jpg",
    text: "Чувствуешь выгорание, находишься в эмоциональном кризисе, без сил и энергии",
  },
  {
    img: "https://cdn.poehali.dev/projects/756e28ae-f342-42b1-ab53-44233856dec1/files/71d36cfa-b023-4dcb-a4bb-fd18a0dcabbb.jpg",
    text: "Испытываешь депрессию, фобии, подвержен зависимостям (курение, алкоголь, наркотики и пр.)",
  },
  {
    img: "https://cdn.poehali.dev/projects/756e28ae-f342-42b1-ab53-44233856dec1/files/24b66719-00e5-4600-9ffb-0fc6706b2426.jpg",
    text: "Часто болеешь, появились хронические заболевания, ощущаешь зажимы в теле, боли в суставах, спине",
  },
  {
    img: "https://cdn.poehali.dev/projects/756e28ae-f342-42b1-ab53-44233856dec1/files/a36555eb-7760-4e6b-b870-5eb79db19db4.jpg",
    text: "Хочешь вернуть радость жизни, энергию, вдохновение, чувство благодарности, ресурсное состояние",
  },
];

export default function WhySection() {
  return (
    <section
      id="why"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a0e1a 0%, #0d0520 50%, #0a0e1a 100%)" }}
    >
      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "150px 150px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5">
        {/* Title */}
        <FadeIn>
          <h2
            className="text-center mb-14 md:mb-18 text-4xl md:text-5xl lg:text-6xl uppercase tracking-widest"
            style={{
              fontFamily: "'Cinzel', serif",
              color: "#e8dcc8",
              textShadow: "0 2px 30px rgba(201,168,76,0.25)",
              letterSpacing: "0.12em",
            }}
          >
            ШОДХАН НУЖЕН ТЕБЕ, ЕСЛИ
          </h2>
        </FadeIn>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {CARDS.map((card, i) => (
            <FadeIn key={i} delay={i * 120}>
              <div
                className="relative rounded-2xl overflow-hidden group cursor-default"
                style={{
                  background: "#111420",
                  border: "1px solid rgba(255,255,255,0.07)",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.55)",
                  minHeight: 400,
                  transform: i % 2 === 0 ? "rotate(-1deg)" : "rotate(0.8deg)",
                  transition: "transform 0.35s ease, box-shadow 0.35s ease",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = "rotate(0deg) scale(1.025)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 60px rgba(0,0,0,0.75)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = i % 2 === 0 ? "rotate(-1deg)" : "rotate(0.8deg)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 40px rgba(0,0,0,0.55)";
                }}
              >
                {/* Image */}
                <img
                  src={card.img}
                  alt=""
                  className="w-full h-full object-cover absolute inset-0"
                  style={{ filter: "grayscale(1) contrast(1.05) brightness(0.85)" }}
                />

                {/* Bottom gradient */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(5,5,15,0.97) 0%, rgba(5,5,15,0.6) 38%, rgba(5,5,15,0.0) 65%)",
                  }}
                />

                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <p
                    className="text-sm md:text-[15px] leading-relaxed"
                    style={{
                      color: "rgba(232,220,200,0.92)",
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    {card.text}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
