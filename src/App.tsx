import { MotionConfig } from "framer-motion";
import { Navigate, Route, Routes } from "react-router";
import { Footer } from "./components/custom/Footer";
import { NavBar } from "./components/custom/NavBar";
import { ScrollManager } from "./components/custom/ScrollManager";
import { HomePage } from "./pages/HomePage";
import { ProjectPage } from "./pages/ProjectPage";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ScrollManager />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </MotionConfig>
  );
}

export default App;
