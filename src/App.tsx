import { Analytics } from "@vercel/analytics/react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import TrustMarquee from "./components/TrustMarquee";
import BeforeAfterSlider from "./components/BeforeAfterSlider";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Membership from "./components/Membership";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";
import FloatingBook from "./components/FloatingBook";

function App() {
  return (
    <div className="bg-cream text-ink">
      <Nav />
      <main>
        <Hero />
        <TrustMarquee />
        <BeforeAfterSlider />
        <Services />
        <Stats />
        <Membership />
        <Gallery />
        <About />
        <Team />
        <Testimonials />
        <FAQ />
        <CTA />
        <MapSection />
      </main>
      <Footer />
      <FloatingBook />
      <Analytics />
    </div>
  );
}

export default App;
