//import { Award, CircleGauge, HardHat, SearchCheck, SquareCheckBig } from "lucide-react";
import { SquareCheckBig, Gauge, Award, SearchCheck, CircleGauge } from "lucide-react";
import Container from "../components/Container";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Certificación de quinta rueda ",
    icon: Gauge,
  },
  {
    title: "Certificación de King pin ",
    icon: Award,
  },
  {
    title: "Certificación de tornamesa ",
    icon: SquareCheckBig,
  },
  {
    title: "Certificación de tren de apoyo ",
    icon: SearchCheck,
  },
  {
    title: "Pruebas de Hermeticidad, hidrostática",
    icon: CircleGauge,
  },
  {
    title: "Certificación de Mondacarga ",
    icon: SearchCheck,
  },
  
  {
    title: "INSPECCION ELEMENTOS DE IZAJE",
    icon: SearchCheck,
  },
  {
    title: "Venta de repuestos originales",
    icon: SearchCheck,
  },
  {
    title: "Inspección de cama bajas ",
    icon: SearchCheck,
  },
];


export default function Services() {
  return (
    <section id="services" className="bg-white pt-20 lg:pb-35 pb-20">

      
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-slate-800">Nuestros Servicios</h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-sky-400" /> {/*bg-blue-700*/}
        </div>

        <div className="grid gap-x-16 gap-y-5 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {services.map((service,index) => {
            const Icon = service.icon;
            return (
              <div key={service.title}
                className={`group relative ml-10 flex h-24 items-center rounded-r-full bg-slate-100 px-8 pl-16 transition duration-300 hover:bg-sky-400
                ${index >= 4 ? "hidden md:flex" : "flex"}`}>
                <div className="absolute -left-10 flex h-20 w-20 items-center justify-center rounded-full border-2 border-slate-500 bg-white text-slate-600 transition duration-300 group-hover:border-sky-400 group-hover:text-sky-400">
                  <Icon size={32} />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-700 transition group-hover:text-sky-50">
                  {service.title}
                </h3>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Link to="/servicios#top" className="rounded-full border-2 border-sky-400 px-10 py-4 font-semibold text-sky-400 hover:text-sky-600 transition hover:border-sky-600">
            Ver más
          </Link>
        </div>
        
      </Container>
    </section>
  );
}