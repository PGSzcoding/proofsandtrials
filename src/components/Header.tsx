import { Link, useLocation } from "react-router-dom";
import logoImage from "../assets/logo-2.png";
import Container from "./Container";
import { useEffect, useState } from "react";
import { menuItems } from "../data/general";

export default function Header() {
    const [open, setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("inicio");
    const location = useLocation();

    const logo = <a href="/#"><img  src={logoImage}  alt="Logo" className="md:h-18 w-auto h-15" /></a>
     useEffect(() => {
    if (location.pathname !== "/") return;
    const sections = ["inicio", "nosotros", "contacto"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section!));

    return () => observer.disconnect();
  }, [location.pathname]);

  const isActiveItem = (section: string, to: string) => {
    if (to === "/servicios") return location.pathname === "/servicios";
    return location.pathname === "/" && activeSection === section;
  };
  return (

    <header className={`top-0 left-0 z-50 w-full shadow-sm transition-all duration-800 ease ${
        location.pathname === "/servicios"
          ? "bg-slate-950"
          : "bg-white"
      }`} >
      <Container>
        <nav className="flex md:h-20  h-18 items-center justify-between">
          {logo}

          {/* Desktop */}
          <div className={`hidden items-center font-semibold  md:flex gap-8 transition-all duration-800 ease text-slate-700`}>
              {menuItems.map((item) => {
                const active = isActiveItem(item.section, item.to);
                return (
                  <Link key={item.label} to={item.to}
                    className={`relative px-5  py-2 ${location.pathname === "/servicios"? "text-white": "text-slate-700"}
      transition hover:text-sky-500 after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:bg-sky-400 after:transition-all hover:after:w-8`}>
                    {item.label}
                    <span  className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-slate-700 transition-all duration-300 ${
                        active ? "w-8" : "w-0"}`} />
                  </Link>
                );})}
          </div>
          
          <Link  to="/consulta-certificado"  className="hidden rounded-full bg-sky-400 px-8 py-3 text-sm font-bold text-white shadow shadow-sky-400/30 transition  hover:bg-sky-500  md:inline-flex">
            Consulta
          </Link>
    
          {/* Mobile button */}
          <button onClick={() => setOpen(!open)} className={`cursor-pointer text-3xl md:hidden ${location.pathname === "/servicios"? "text-white": ""}`}>
            {open ? "×" : "☰"}
          </button>

        </nav>
        {/* Mobile menu */}
        <div className={`overflow-hidden transition-all duration-300 md:hidden ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className={`flex flex-col gap-6 pb-8 pt-4 text-center font-medium md:hidden ${location.pathname === "/servicios"? "text-white ": "text-slate-700 "}`}>

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