
import { ArrowRight } from "lucide-react";
import { Fade } from "react-awesome-reveal";
import { servicesGalery } from "../data/services";
import BgWaves from "../components/BgWaves";
import BlueText from "../components/UI/BlueText";
import LineSeparator from "../components/UI/LineSeparator";


export default function ServicesGallery() {
  return (
    <section id="services" className="bg-slate-950 relative overflow-hidden  w-full   px-4 md:pt-36 md:pb-28 py-20 md:px-10"  >
      
      {/*Background*/}
      <BgWaves />

      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <Fade direction="right" cascade >
            <BlueText>Nuestros Servicios </BlueText>
            <h2 className="mt-3 text-3xl font-bold text-white  md:text-5xl">¿QUÉ OFRECEMOS?</h2>
          </Fade>
        </div>
          
        <Fade cascade >
          <div className="grid auto-rows-[260px] grid-cols-1 gap-3 md:grid-cols-4">
            {servicesGalery.map((item) => (
              <article key={item.title}  className={`group relative overflow-hidden rounded-md shadow-2xl transition duration-300 hover:-translate-y-1 hover:border-sky-400/70 border border-white/10 bg-slate-900 ${item.size}`}>
                {item.image ? 
                  <img  src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"/>
                  :''
                }

                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-0 bg-sky-600/70 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" />

                <div className="absolute inset-x-0 bottom-0 z-10 p-6 transition-transform duration-500 ease-out group-hover:-translate-y-2">
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                    <LineSeparator className="mt-2 bg-[#0281FC]" width="14" />
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