import heroImage from "../assets/hero.png";
import Container from "../components/Container";

export default function Hero() {
  return (
    <section className="relative h-[90vh]" id="inicio">
      <img
        src={heroImage}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <Container className="relative z-10 flex h-full items-center">
    <div className="max-w-2xl text-left">
      <h1 className="text-4xl font-extrabold uppercase leading-tight tracking-tight text-white md:text-6xl">
        Calidad <br />
        Garantizada
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-8 text-white/90 md:text-xl">
        Soluciones confiables con altos estándares de calidad y personal capacitado.
      </p>

      <a
        href="#contact"
        className="mt-10 inline-flex cursor-pointer rounded-full bg-white px-10 py-4 text-lg font-medium text-slate-900 transition hover:bg-sky-400 hover:text-white"
      >
        Solicita tu servicio
      </a>
    </div>
  </Container>

    </section>
  );
}
