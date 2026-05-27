import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";


export default function Home() {
  return (
    <div >
      <Hero />
      <Services />
      {/* <Features /> */}
      <Gallery />
      <Contact />
      <Testimonials />
    </div>
  );
}
