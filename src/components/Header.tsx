import { Link } from "react-router-dom";
import logoImage from "../assets/logo.png";
import Container from "./Container";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-sm">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          <a href="/" className="text-xl font-bold text-slate-900">
            <img src={logoImage}  alt="Logo"
    className="h-18 w-auto" />
          </a>

          <div className="hidden items-center gap-10  font-medium text-slate-700 md:flex">
            <a href="/#" className="hover:text-slate-950">Inicio</a>
            <a href="#about" className="hover:text-slate-950">Nosotros</a>
            <Link to="/servicios" className="hover:text-slate-950">Servicios</Link>
            <a href="#contact" className="hover:text-slate-950">Contactanos</a>
          </div>

        <Link to="/consulta-certificado" className="hidden rounded-full bg-[#4EACE9] px-7 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 md:inline-flex">Consulta</Link>
       

          <button className="md:hidden text-2xl">
            ☰
          </button>
        </nav>
      </Container>
    </header>
  );
}