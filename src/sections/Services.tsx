import { Award, CircleArrowRight, CircleGauge, HardHat, SearchCheck, SquareCheckBig } from "lucide-react";
import Container from "../components/Container";

const services = [
  { title: "Pruebas de Hermeticidad, hidrostática ", icon: <CircleGauge size={36}/>},
    { title: "CERTIFICACIONES", icon: <Award size={36} />, description: "Quinta rueda, King pin,tornamesa, Tren de apoyo, Línea de vida"},
  { title: "INSPECCION ELEMENTOS DE IZAJE ", icon: <HardHat size={36}/>, description: '(Cadenas, Grilletes, Raches, Pasadores, Platos, Gancho, Poleas, Anillos) ' },
  { title: "CERTIFICACION DE MONTACARGA", icon: <SearchCheck size={36} />,description:'Inspección de uñas y espejo' },
  { title: "CERTIFICACION DE SOLDADURA EN GENERAL ", icon: <SquareCheckBig size={36} /> },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-slate-800">
            Nuestros Servicios
          </h2>

          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-black" /> {/*bg-blue-700*/}
      
        </div>

<div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
  {services.map((service) => (
    <article
      key={service.title}
      className="flex min-h-[280px] flex-col items-center justify-center rounded-2xl bg-slate-50 p-6 text-center transition hover:-translate-y-2 hover:shadow-lg"
    >
      <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full border-2 border-sky-400 text-sky-400">
        {service.icon}
      </div>

      <h3 className="text-lg font-bold uppercase tracking-wide text-sky-500">
        {service.title}
      </h3>

      {service.description && (
        <p className="mt-4 text-sm leading-7 text-slate-500">
          {service.description}
        </p>
      )}
    </article>
  ))}

</div>
        
      </Container>
    </section>
  );
}