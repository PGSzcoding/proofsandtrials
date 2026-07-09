
import { ArrowRight } from "lucide-react";
import { Fade } from "react-awesome-reveal";
import { servicesGalery } from "../data/services";

export default function ServicesGallery() {
  return (
    <section id="services" className="bg-slate-950 relative overflow-hidden  w-full   px-4 md:pt-36 md:pb-28 py-20 md:px-10"  >
      
 {/* Fondo degradado */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(14,165,233,0.30),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(2,132,199,0.20),_transparent_30%)]" />

  {/* Ondas animadas */}
  <div className="pointer-events-none absolute right-0 top-0 h-full w-full opacity-25">
    <svg
      className="bg-waves h-full w-[140%]"
      viewBox="0 0 1200 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 160 C 250 60, 450 260, 700 160 S 1000 60, 1200 160"
        stroke="rgba(14,165,233,0.7)"
        strokeWidth="2"
      />
      <path
        d="M0 210 C 250 110, 450 310, 700 210 S 1000 110, 1200 210"
        stroke="rgba(14,165,233,0.5)"
        strokeWidth="1.5"
      />
      <path
        d="M0 260 C 250 160, 450 360, 700 260 S 1000 160, 1200 260"
        stroke="rgba(14,165,233,0.35)"
        strokeWidth="1"
      />
      <path
        d="M0 310 C 250 210, 450 410, 700 310 S 1000 210, 1200 310"
        stroke="rgba(14,165,233,0.25)"
        strokeWidth="1"
      />
    </svg>
  </div>
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <Fade direction="right" cascade >
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">Nuestros Servicios </span>
          <h2 className="mt-3 text-3xl font-bold text-white  md:text-5xl">¿QUÉ OFRECEMOS?</h2>
          </Fade>
        </div>
          
        <Fade cascade >
          <div className="grid auto-rows-[260px] grid-cols-1 gap-3 md:grid-cols-4">
            {servicesGalery.map((item) => (
              <article key={item.title}  className={`group relative overflow-hidden rounded-md shadow-2xl transition duration-300 hover:-translate-y-1
            hover:border-sky-400/70 border border-white/10
            bg-slate-900 ${item.size}`}>
                {item.image ? 
                <img  src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"/>
                  :''}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-0 bg-sky-600/70 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" />

                <div className="absolute inset-x-0 bottom-0 z-10 p-6 transition-transform duration-500 ease-out group-hover:-translate-y-2">
                   
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                    <div className="mt-2 h-1 w-14 rounded-full bg-sky-400" />
                </div>
              </article>
            ))}
            <a href="/servicios" className="group relative h-[260px] overflow-hidden rounded-sm md:col-span-1 border border-white/10 bg-slate-900/70 transition hover:border-sky-400/70 hover:bg-sky-900/30 flex flex-col items-center justify-center cursor-pointer">
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