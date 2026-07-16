import { Fade } from "react-awesome-reveal";
import { buttonStyles } from "../styles/general";
import Container from "../components/Container";
import heroImage from "../assets/hero.webp";


export default function Hero() {
  return (
    <section style={{backgroundImage:`url(${heroImage})`}} className="destello parralax relative h-[90vh] " id="inicio">
      <div className="absolute inset-0 bg-black/40" />
        <Container className="relative z-10 flex h-full items-center">
          <div className="max-w-2xl text-left">
            <Fade direction="left" cascade >
            <h1 className="text-4xl font-extrabold uppercase leading-tight tracking-tight text-white md:text-6xl">
              Calidad <br />Garantizada
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/90 md:text-xl">
              Soluciones confiables con altos estándares de calidad y personal capacitado.
            </p>
            <a href="/#contacto"  className={`${buttonStyles.white} inline-flex px-10 py-4 text-lg font-medium mt-10`}>Solicita tu servicio</a>
          </Fade>
          </div>
        </Container>
    </section>
  );
}
