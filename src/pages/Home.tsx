import Hero from "../sections/Hero";
import About from "../sections/About";
import Contact from "../sections/Contact";
import ServicesGallery from "../sections/ServicesGallery";
import National from "../sections/National";
import KeywordsMarquee from "../sections/KeywordsMarquee";
import SEO from "../components/SEO";
import OrganizationSchema from "../components/OrganizationSchema";
export default function Home() {
  return (
    <>
      <SEO
        title="Inicio"
        description="Proofs and Trials P&T S.A.S. es una empresa colombiana especializada en ensayos no destructivos, inspección industrial, ingeniería y servicios de confiabilidad, con más de 7 años de experiencia."
        canonical="/"
      />

      <OrganizationSchema />
      <Hero />
      <About />
      <ServicesGallery />
      <KeywordsMarquee />
      <Contact />
      <National />

    </>
  );
}