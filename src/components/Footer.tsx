import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { menuItems } from "../data/general";
import { Socials } from "./Socials";
import Container from "./Container";
import logoBlanco from "../assets/logo2_letras.png"

export default function Footer() {
  return (
    <Fade >
      <footer className="bg-linear-to-r from-slate-950 via-slate-900 to-slate-800 text-white">
        <Container>
          <div className="flex flex-col items-center justify-center py-6  text-center">
             <Link to="/#inicio" >
               <img src={logoBlanco} alt="P&T Logo" className="w-55 object-contain"/>
             </Link>
            {/* 
            <Link to="/#inicio" className="text-3xl font-semibold ">P & T</Link>
            <small className="italic text-white/50">Proofs and trials</small>
            */}
            <nav className="mt-4 flex flex-wrap justify-center gap-8 text-xs font-semibold uppercase  text-white/70">
              {menuItems.map(item => {
                return (
                  <Link key={item.label} to={item.to} className="hover:text-white">{item.label}</Link>
                )
              })}
            </nav>
            <Socials />
          </div>
          <div className="border-t border-white/10 py-2 text-center text-xs text-white/50">
            <a href="mailto:paolagtzsal@gmail.com">Desarrollado por @Paolagtzsal</a>
          </div>
        </Container>
      </footer>
    </Fade>
  );
}