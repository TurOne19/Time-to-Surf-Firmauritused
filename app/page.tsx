import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import Pricing from "@/components/Pricing";
import Trust from "@/components/Trust";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Intro />
      <Features />
      <Gallery />
      <Pricing />
      <Trust />
      <FinalCta />
      <Footer />
    </main>
  );
}
