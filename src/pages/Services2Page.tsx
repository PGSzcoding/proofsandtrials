import Container from "../components/Container"
import { services } from "../data/services"
import ServiceInspection from "../sections/ServiceInspection"
import ServiceTransport from "../sections/ServiceTransport"
import heroImage from "../assets/servicios.png";
import ServiceMontacarga from "../sections/ServiceMontacarga";
import { Fade } from "react-awesome-reveal";

export default function ServicesPage() {
    const servicios_transp = services[0]
    const inspeccion = services[1]
    const montacarga = services[2]
    return (
      <main>
        <section className="relative destello overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 text-center">
            <div className="absolute  inset-0 bg-cover bg-center opacity-35" style={{ backgroundImage: `url(${heroImage})`,}}/>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40" />
            <div className="absolute right-0 top-0 h-80 w-80 rounded-full border border-sky-400/30 translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-10 right-40 h-px w-96 rotate-[-12deg] bg-sky-400/40" />

            <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-16 lg:px-8 text-center">
              <Fade direction="down">
              <h1 className="mt-6  text-3xl font-bold tracking-tight text-white md:text-5xl">
                Nuestros servicios
              </h1>
              </Fade>
            </div>
        </section>
    

        <section className="w-full  px-4 py-16 md:px-10"  id="top">
         
            <Container className="relative ">
                <ServiceTransport title={servicios_transp.title} subtitle={servicios_transp.subtitle} items={servicios_transp.items}/>
                <ServiceInspection title={inspeccion.title} subtitle={inspeccion.subtitle} items={inspeccion.items}/>
               
            </Container>
            
        </section>  
                <ServiceMontacarga  title={montacarga.title} subtitle={montacarga.subtitle} items={montacarga.items} />

        </main>
    )
}