import { services } from "../data/services"
import { Fade } from "react-awesome-reveal";
import ServiceInspection from "../sections/ServiceInspection"
import ServiceTransport from "../sections/ServiceTransport"
import heroImage from "../assets/servicios.webp";
import ServiceMontacarga from "../sections/ServiceMontacarga";
import Container from "../components/Container"
import LineSeparator from "../components/UI/LineSeparator";


export default function ServicesPage() {
    const servicios_transp = services[0]
    const inspeccion = services[1]
    const montacarga = services[2]
    const title = "Nuestros servicios"
    const description ="Ingeniería, inspección y confiabilidad para la industria colombiana."
    
    return (
      <main>
        <section id="top" className="relative destello overflow-hidden bg-linear-to-r from-slate-950 via-slate-900 to-slate-800 text-center">
            {/* Background */}
            <div className="absolute  inset-0 bg-cover bg-center opacity-35" style={{ backgroundImage: `url(${heroImage})`,}}/>
            <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/85 to-slate-950/40" />
            <div className="absolute right-0 top-0 h-80 w-80 rounded-full border border-sky-400/30 translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-10 right-40 h-px w-96 -rotate-12 bg-sky-400/40" />
            {/* /Background */}

            <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-14 lg:px-8 text-center">
              <Fade direction="down" cascade>
                <h1 className="mt-2  text-3xl font-bold tracking-tight text-white md:text-5xl">{title}</h1>
                <LineSeparator className="mx-auto mt-6 bg-sky-400" width="20" />
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">{description}</p>
              </Fade>
            </div>
        </section>
    

        <section className="w-full  pt-16 pb-8 md:py-16 md:px-10"  >
            <Container className="relative ">
                <ServiceTransport title={servicios_transp.title} subtitle={servicios_transp.subtitle} items={servicios_transp.items}/>
                <ServiceInspection title={inspeccion.title} subtitle={inspeccion.subtitle} items={inspeccion.items}/>
            </Container>
        </section>  
        
        <ServiceMontacarga  title={montacarga.title} subtitle={montacarga.subtitle} items={montacarga.items} />

      </main>
    )
}