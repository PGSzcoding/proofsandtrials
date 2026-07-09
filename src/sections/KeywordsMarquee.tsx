import { Fade } from "react-awesome-reveal";

export default function KeywordsMarquee() {
  const items = [
    "Líquidos penetrantes",
    "Partículas magnéticas",
    "Ultrasonido",
    "Inspección visual",
    "Certificación de equipos",
    "Tabla de aforo",
    "Líneas de vida",
    "Hidrostática",
  ];

  return (
    <Fade>
    <section className="overflow-hidden  border-sky-400/20 bg-sky-600 py-5">
      <div className="marquee">
        <div className="marquee-content ">
          {[...items, ...items].map((item, index) => (
            <span
              key={index}
              className="mx-6 whitespace-nowrap  font-light  text-slate-200 tracking-wider"
            >
              {item}
              <span className="ml-12  text-sky-400">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
    </Fade>
  );
}