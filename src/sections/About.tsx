import { Eye, RefreshCcw, Target } from "lucide-react";
import Container from "../components/Container";
import misionImage from "../assets/mision.png";
import visionImage from "../assets/mision.png";

export default function About() {
  return (
    <section id="about" className="bg-white pt-24 pb-10">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-slate-800">
            Bienvenidos a P&T
          </h2>

          <div className="mx-auto mt-3 h-1 w-20 rounded-full  bg-slate-800" />

          <p className="mt-6 text-sm leading-7 text-slate-600">
            Proofs and Trials P&T S.A.S. es una compañía colombiana especializada en ensayos no destructivos, aplicando diferentes métodos de inspección bajo altos estándares de calidad, confiabilidad y compromiso con nuestros clientes.
          </p>

        </div>
      </Container>

      <div className="mt-16 grid md:grid-cols-3">
        <InfoCard
          image={misionImage}
          icon={<RefreshCcw size={34} />}
          title="Nuestra Historia"
          text="Proofs and Trials P&T S.A.S. es una compañía colombiana especializada en ensayos no destructivos, aplicando diferentes métodos de inspección bajo altos estándares de calidad, confiabilidad y compromiso con nuestros clientes."
          variant="blue"
        />
         <InfoCard
          icon={<Target size={34} />}
          title="Nuestra Misión"
          text="Aplicar normas de calidad establecidas en el sector mediante procesos adecuados, personal capacitado y equipos especializados, proporcionando seguridad y confianza a cada uno de nuestros clientes."
          variant="dark"
        />

        <InfoCard
          image={visionImage}
          icon={<Eye size={34} />}
          title="Nuestra Visión"
          text="Ser una empresa referente a nivel nacional en la industria de ensayos no destructivos, reconocida por nuestra responsabilidad, cumplimiento y alto nivel de satisfacción de nuestros clientes."
          variant="blue"
        />

      </div>
    </section>
  );
}

type InfoCardProps = {
  icon: React.ReactNode;
  title: string;
  text: string;
  variant?: "blue" | "dark";
  image?: string;
};

function InfoCard({ icon, title, text, variant, image }: InfoCardProps) {
  const styles =
    variant === "blue"
      ? "bg-sky-400"
      : "bg-neutral-900";

  return (
    <article className={`${styles} relative overflow-hidden px-8 py-20 text-center text-white`}>
      
      {image && (
        <>
          <img
            src={image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-sky-500/50" />
        </>
      )}


      <div className="relative z-10">
        <div className="mb-6 flex justify-center">
          {icon}
        </div>

        <h3 className="text-2xl font-semibold">
          {title}
        </h3>

        <div className="mx-auto my-5 h-1 w-12 rounded-full bg-white/70" />

        <p className="mx-auto max-w-sm text-sm leading-7 text-white/90">
          {text}
        </p>
      </div>

    </article>
  );
}