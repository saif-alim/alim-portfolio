import "./App.css";
import { NavBar } from "./components/custom/NavBar";
import { HeroSection } from "./sections/HeroSection";
import { WorkSection } from "./sections/WorkSection";

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <WorkSection />
    </>
  );
}

export default App;
