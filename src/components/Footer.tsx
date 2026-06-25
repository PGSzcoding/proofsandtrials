import { Link } from "react-router-dom";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <Container>
        <div className="flex flex-col items-center justify-center py-6  text-center">
          <a href="/" className="text-3xl font-semibold ">
            P & T
          </a>
          <small className="italic text-white/50">Proofs and trials</small>

          <nav className="mt-8 flex flex-wrap justify-center gap-8 text-xs font-semibold uppercase  text-white/70">
            <Link to="/#nosotros" className="hover:text-white">Nosotros</Link>
            <Link to="/servicios" className="hover:text-white">Servicios</Link>
            <Link to="/#contacto" className="hover:text-white">Contactanos</Link>
          </nav>
        </div>

        <div className="border-t border-white/10 py-2 text-center text-xs text-white/50">
          Desarrollado por @Paolagtzsal
        </div>
      </Container>
    </footer>
  );
}