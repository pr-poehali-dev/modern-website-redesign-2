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
      <div className="relative z-10 max-w-7xl mx-auto px-5">
        <FadeIn>
          <h2
            className="text-center mb-14 text-4xl md:text-5xl lg:text-6xl uppercase"
            style={{
              fontFamily: "'Oswald', sans-serif",
              color: "#fff",
              letterSpacing: "0.08em",
              fontWeight: 700,
            }}
          >
            ШОДХАН НУЖЕН ТЕБЕ, ЕСЛИ
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {CARDS.map((card, i) => (
            <FadeIn key={i} delay={i * 0.12}>
              <div
                className="relative rounded-2xl overflow-hidden cursor-default flex flex-col"
                style={{
                  background: "#111420",
                  border: "1px solid rgba(255,255,255,0.07)",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.55)",
                  height: 420,
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
                {/* Image — takes top 65% */}
                <div className="relative flex-shrink-0" style={{ height: "65%" }}>
                  <img
                    src={card.img}
                    alt=""
                    className="w-full h-full object-cover object-top"
                    style={{ filter: "grayscale(1) contrast(1.05) brightness(0.85)" }}
                  />
                  {/* Fade into card body */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
                    style={{ background: "linear-gradient(to bottom, transparent, #111420)" }}
                  />
                </div>

                {/* Text — bottom 35% */}
                <div className="flex-1 flex items-start px-5 pt-2 pb-5">
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: "rgba(232,220,200,0.88)",
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