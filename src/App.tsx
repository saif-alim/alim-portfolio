import "./App.css";
import { Footer } from "./components/custom/Footer";
import { NavBar } from "./components/custom/NavBar";
import PixelBlast from "./components/PixelBlast";
import { ContactSection } from "./sections/ContactSection";
import { HeroSection } from "./sections/HeroSection";
import { ProjectSection } from "./sections/projects/ProjectSection";
import { WorkSection } from "./sections/work/WorkSection";

function App() {
  return (
    <>
      <PixelBlast
        color="#86439e"
        patternDensity={1}
        speed={1.5}
        pixelSize={6}
        variant="diamond"
        patternScale={1}
      />
      <NavBar />
      <HeroSection />
      <WorkSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
