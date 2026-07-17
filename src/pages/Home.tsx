import Hero from "../sections/Hero";
import About from "../sections/About";
import Contact from "../sections/Contact";
import ServicesGallery from "../sections/ServicesGallery";
import National from "../sections/National";
import KeywordsMarquee from "../sections/KeywordsMarquee";
import SEO from "../components/SEO";
export default function Home() {
  return (
    <>
      <SEO
        title="Inicio"
        description="Proofs and Trials P&T S.A.S. es una compañía colombiana con más de 7 años de experiencia, especializada en ensayos no destructivos, que aplica diversos métodos de inspección mediante altos estándares de calidad, avalados por los entes de control."
        canonical="/"
      />

      <Hero />
      <About />
      <ServicesGallery />
      <KeywordsMarquee />
      <Contact />
      <National />

    </>
  );
}