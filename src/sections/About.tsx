import { type LucideIcon } from "lucide-react";
import Container from "../components/Container";
import { Fade,Zoom } from "react-awesome-reveal";
import LineSeparator from "../components/LineSeparator";
import { AboutInfo } from "../data/general";

export default function About() {
  return (
    <section id="nosotros" className=" pt-24 pb-10">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Fade direction="down" >
            <h2 className="text-4xl font-bold text-slate-800">
              Expertos en <span className="text-sky-600">ensayos no destructivos, inspecciones</span> y <span className="text-sky-600">certificaciones</span> técnicas
            </h2>
            <Zoom delay={200}>
              <LineSeparator />
            </Zoom>
            <p className="mt-6 text-sm leading-7 text-slate-600">
              Proofs and Trials P&T S.A.S. es una compañía colombiana especializada en ensayos no destructivos, aplicando diferentes métodos de inspección bajo altos estándares de calidad, confiabilidad y compromiso con nuestros clientes.
            </p>
          </Fade>
        </div>
      </Container>

      <div className="mt-16 grid md:grid-cols-3">
        {AboutInfo.map(item=>{
          return (
            <InfoCard key={item.title} image={item.image} icon={item.icon} title={item.title} text={item.text} variant={item.variant} i={item.i} />
          )
        })}
       

      </div>
    </section>
  );
}

type InfoCardProps = {
  icon: LucideIcon;
  title: string;
  text: string;
  variant?: string
  image?: string;
  i?:number
};

function InfoCard({ icon, title, text, variant, image, i = 0 }: InfoCardProps) {
  const styles =variant === "blue"? "bg-sky-400": "bg-slate-950";
  const Icon = icon
  return (
    <article className={`${styles} relative overflow-hidden px-8 py-10 text-center text-white`}>
      
      {image && (
        <>
          <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover"/>
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-sky-500/10" />
        </>
      )}

      <Fade delay={i*200} >
        <div className="relative z-10">
          <div className="mb-6 flex justify-center w-[26]"><Icon /></div>

          <h3 className="text-2xl font-semibold">{title}</h3>
          <div className="mx-auto my-5 h-1 w-12 rounded-full bg-white/70" />

          <p className="mx-auto max-w-sm text-sm leading-7 text-white/90">{text}</p>
        </div>
      </Fade>

    </article>
  );
}