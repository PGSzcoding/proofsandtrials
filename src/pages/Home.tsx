import Hero from "../sections/Hero";
import About from "../sections/About";
import Contact from "../sections/Contact";
import ServicesGallery from "../sections/ServicesGallery";
import National from "../sections/National";
import KeywordsMarquee from "../sections/KeywordsMarquee";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ServicesGallery />
      <KeywordsMarquee />
      <Contact />
      <National />

    </>
  );
}