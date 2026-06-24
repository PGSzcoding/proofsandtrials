import { Link } from "react-router-dom";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <Container>
        <div className="flex flex-col items-center justify-center py-6  text-center">
          <a href="/" className="text-3xl font-semibold italic">
            P & T
          </a>
          <small className="italic text-white/50">Proofs and trials</small>

          <nav className="mt-8 flex flex-wrap justify-center gap-8 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            <a href="#nosotros" className="hover:text-white">
              Nosotros
            </a>
            <Link to="/servicios" className="hover:text-white">
              Servicios
            </Link>
            <a href="#contacto" className="hover:text-white">
              Contacto
            </a>
          </nav>
        </div>

        <div className="border-t border-white/10 py-2 text-center text-xs text-white/50">
          Desarrollado por @Paolagtzsal
        </div>
      </Container>
    </footer>
  );
}