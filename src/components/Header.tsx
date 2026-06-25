import { Link } from "react-router-dom";
import logoImage from "../assets/logo.png";
import Container from "./Container";
import { useState } from "react";

export default function Header() {
    const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-sm">
      <Container>
        <nav className="flex md:h-20  h-18 items-center justify-between">
          <a href="/">
            <img  src={logoImage}  alt="Logo" className="md:h-18 w-auto h-15" />
          </a>

          {/* Desktop */}
          <div className="hidden items-center gap-10 font-medium text-slate-700 md:flex">
            <Link to="/#inicio" className="hover:text-slate-950">Inicio</Link>
            <Link to="/#nosotros" className="hover:text-slate-950">Nosotros</Link>
            <Link to="/servicios" className="hover:text-slate-950">Servicios</Link>
            <Link to="/#contacto" className="hover:text-slate-950">Contactanos</Link>
          </div>


          <Link to="/consulta-certificado" className="hidden rounded-full bg-sky-400 px-7 py-3 text-sm font-semibold text-white transition hover:bg-sky-500 md:inline-flex" >
            Consulta
          </Link>


          {/* Mobile button */}
          <button onClick={() => setOpen(!open)} className="cursor-pointer text-3xl md:hidden">
            {open ? "×" : "☰"}
          </button>

        </nav>

        {/* Mobile menu */}
        <div className={`overflow-hidden transition-all duration-300 md:hidden ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="flex flex-col gap-6 border-t border-slate-100 py-8 text-center font-medium text-slate-700 md:hidden">

            <Link  to="/#inicio" onClick={() => setOpen(false)}>Inicio</Link>
            <Link  to="/#nosotros" onClick={() => setOpen(false)}>Nosotros</Link>
            <Link  to="/servicios" onClick={() => setOpen(false)}>Servicios</Link>
            <Link  to="/#contacto" onClick={() => setOpen(false)}> Contactanos</Link>


            <Link to="/consulta-certificado" onClick={() => setOpen(false)} className="mx-auto rounded-full bg-sky-400 px-10 py-3 text-white ">
              Consulta
            </Link>

          </div>
        </div>
      </Container>
    </header>
  );
}