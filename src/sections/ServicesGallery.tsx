
import { ArrowRight } from "lucide-react";
import { Fade } from "react-awesome-reveal";
import { servicesGalery } from "../data/services";

export default function ServicesGallery() {
  return (
    <section id="services" className="w-full  px-4 py-16 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <Fade direction="right" cascade >
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">Nuestros Servicios </span>
          <h2 className="mt-3 text-3xl font-bold  md:text-5xl">¿QUÉ OFRECEMOS?</h2>
          </Fade>
        </div>
          
        <Fade cascade >
          <div className="grid auto-rows-[260px] grid-cols-1 gap-3 md:grid-cols-4">
            {servicesGalery.map((item) => (
              <article key={item.title}  className={`group relative overflow-hidden rounded-md ${item.size}`}>
                <img  src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"/>

                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-0 bg-sky-600/70 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" />

                <div className="absolute inset-x-0 bottom-0 z-10 p-6 transition-transform duration-500 ease-out group-hover:-translate-y-2">
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                </div>
              </article>
            ))}
            <a href="/servicios" className="group relative h-[260px] overflow-hidden rounded-sm md:col-span-1 bg-slate-950 flex flex-col items-center justify-center cursor-pointer">
              <div className="z-10 flex flex-col items-center gap-2 transition-all duration-500 ease-out group-hover:scale-105">
                <ArrowRight className="h-6 w-6 text-white transition-transform duration-500 ease-out group-hover:translate-x-1" />
                <h3 className="text-xl font-bold text-white tracking-wide">
                  Ver más
                </h3>
              </div>
              <div className="absolute inset-0 bg-white/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </a>
          </div>
          </Fade>
      </div>
    </section>
  );
}