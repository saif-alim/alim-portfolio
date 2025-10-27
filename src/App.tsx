import "./App.css";
import { NavBar } from "./components/custom/NavBar";
import PixelBlast from "./components/PixelBlast";
import { HeroSection } from "./sections/HeroSection";
import { ProjectSection } from "./sections/projects/ProjectSection";
import { WorkSection } from "./sections/work/WorkSection";

function App() {
  return (
    <>
      <PixelBlast
        color="#7e4393"
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
    </>
  );
}

export default App;
