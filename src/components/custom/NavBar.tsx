import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { scrollToSection } from "../../lib/scrollToSection";
import { Logo } from "./Logo";

export const NavBar = () => {
  const [top, setTop] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      if (isNavOpen) return;
      const currentScrollY = window.pageYOffset;
      if (Math.abs(currentScrollY - lastScrollY) > 50) {
        setTop(lastScrollY < currentScrollY ? -155 : -2);
        lastScrollY = currentScrollY;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isNavOpen]);

  useEffect(() => {
    const overlay = document.getElementById("screen-overlay");
    if (overlay) overlay.style.display = isNavOpen ? "block" : "none";
  }, [isNavOpen]);

  return (
    <header
      className="fixed w-full flex justify-between items-center z-20 backdrop-blur-md px-10 py-5 md:px-20 md:py-5 border-b-[0.1px] border-gray-300 transition-colors duration-300"
      style={{ top: `${top}px`, transition: "top 0.5s" }}
    >
      <div
        className="cursor-pointer pr-2"
        onClick={() => scrollToSection("home")}
      >
        <Logo />
      </div>

      <div className="flex items-center">
        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-12 items-center">
          {["home", "experience", "projects", "contact"].map((section) => (
            <span
              key={section}
              className="cursor-pointer font-[Space_Mono] transition duration-200 ease-in-out hover:text-[var(--color-accent)] hover:scale-105"
              onClick={() => scrollToSection(section)}
            >
              {`// ${section}`}
            </span>
          ))}
        </nav>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isNavOpen && (
            <motion.div
              className="fixed top-0 right-0 w-52 h-[120vh] bg-gradient-to-b from-gray-100 to-gray-200 shadow-lg flex flex-col gap-2 pt-16 px-5 z-20"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              {["home", "experience", "projects", "contact"].map((section) => (
                <span
                  key={section}
                  className="cursor-pointer font-[Space_Mono] transition duration-200 ease-in-out hover:text-[var(--color-accent)] hover:scale-105"
                  onClick={() => {
                    scrollToSection(section);
                    setIsNavOpen(false);
                  }}
                >
                  {`// ${section}`}
                </span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Theme Toggle
        <div className="pl-6 lg:pl-6 md:pl-0 md:pr-5 md:pt-1">
          <ToggleTheme
            isLightMode={isLightMode}
            toggleTheme={() => setIsLightMode(!isLightMode)}
          />
        </div> */}

        {/* Mobile Menu Button */}
        <motion.button
          className="lg:hidden bg-none border-none cursor-pointer font-[Space_Mono] text-xl fixed top-5 right-5 z-30"
          animate={{ rotate: isNavOpen ? 0 : 72 }}
          transition={{ type: "spring", stiffness: 60, damping: 10 }}
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          //
        </motion.button>
      </div>
    </header>
  );
};
