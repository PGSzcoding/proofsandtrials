import Container from "../components/Container";
import heroImage from "../assets/servicios.png";

const serviceGroups = [
  {
    title: "Sector Transporte",
    subtitle: "Carga seca y líquida",
    services: [
      "Certificación de quinta rueda",
      "Certificación de King pin",
      "Certificación de tornamesa",
      "Certificación de tren de apoyo",
      "Pruebas de hermeticidad e hidrostática",
      "Certificación línea de vida",
      "Venta de repuestos originales del sistema de enganche",
      "Inspección de cama bajas",
    ],
  },
  {
    title: "Elementos de Izaje",
    subtitle: "Inspección especializada",
    services: [
      "Cadenas",
      "Grilletes",
      "Raches",
      "Pasadores",
      "Platos",
      "Ganchos",
      "Poleas",
      "Anillos",
      "Grúas móviles",
      "Torre grúas",
      "Inspección de eslingas",
      "Winche",
    ],
  },
  {
    title: "Montacargas",
    subtitle: "Certificación e inspección",
    services: [
      "Certificación de montacarga",
      "Inspección de uñas",
      "Inspección de espejo",
    ],
  },
  {
    title: "Soldadura",
    subtitle: "Certificación general",
    services: [
      "Certificación de soldadura en general",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main>
     <section className="relative h-[320px] overflow-hidden md:h-[380px]" id="top">
      <img src={heroImage} alt="Servicios P&T" className="absolute inset-0 h-full w-full object-cover"/>
      <div className="absolute inset-0 bg-black/55" />

      <Container className="relative z-10 flex h-full items-center justify-center text-center">
        <h1 className="text-5xl font-bold text-white md:text-6xl pt-10">
          Nuestros servicios
        </h1>
     
      </Container>
    </section>

      <section className="bg-slate-50 py-10">
        <Container>
          <div className="mb-14 flex flex-col justify-center items-center text-center">
          
            <div className="mt-4 h-1 w-16 rounded-full bg-sky-400" />

            <p className="mt-6 text-lg w-[90%] lg:w-[60%] leading-8 text-slate-500">
              Contamos con procesos técnicos orientados al cumplimiento de normas, seguridad operativa y confiabilidad para nuestros clientes.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {serviceGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-semibold uppercase tracking-widest text-sky-500">
                  {group.subtitle}
                </span>

                <h3 className="mt-3 text-3xl font-bold text-slate-800">
                  {group.title}
                </h3>

                <ul className="mt-7 grid gap-4 sm:grid-cols-2">
                  {group.services.map((service) => (
                    <li
                      key={service}
                      className="flex gap-3 text-slate-600"
                    >
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-sky-500">
                        ✓
                      </span>

                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-3xl bg-slate-900 p-10 text-center text-white">
            <h3 className="text-3xl font-bold">
              ¿Necesitas una certificación o inspección?
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-white/70">
              Ponte en contacto con nuestro equipo para recibir asesoría personalizada según el tipo de servicio que necesitas.
            </p>

            <a
              href="/#contacto"
              className="mt-8 inline-flex rounded-full bg-sky-400 px-10 py-4 font-semibold text-white transition hover:bg-sky-500"
            >
              Solicitar información
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}