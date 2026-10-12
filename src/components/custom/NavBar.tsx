import { CV_URL } from "@/lib/links";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import { Logo } from "./Logo";

const sections = ["experience", "projects", "skills", "contact"];

export const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const { pathname } = useLocation();
  const activeSection = pathname.startsWith("/projects") ? "projects" : null;

  // While the mobile menu is open: lock page scroll, and close it on a tap
  // outside, on Escape, or once the viewport grows into the desktop nav.
  useEffect(() => {
    if (!isNavOpen) return;
    const close = () => setIsNavOpen(false);
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (navRef.current?.contains(target)) return;
      if (toggleRef.current?.contains(target)) return;
      close();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      close();
      toggleRef.current?.focus();
    };
    const desktop = window.matchMedia("(min-width: 768px)");

    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", close);
    return () => {
      root.style.overflow = previousOverflow;
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", close);
    };
  }, [isNavOpen]);

  return (
    <header className="sticky top-0 z-20 border-b border-[rgba(139,92,246,0.18)] bg-[rgba(9,9,13,0.72)] backdrop-blur-md overflow-x-clip">
      <div className="mx-auto flex max-w-content items-center justify-between gap-6 px-7 py-4">
        <Link to="/">
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-7 items-center text-[13px]">
          {sections.map((section) => (
            <Link
              key={section}
              to={`/#${section}`}
              className={cn(
                "transition-colors duration-200 hover:text-white",
                section === activeSection ? "text-white" : "text-[#bdb9cc]",
              )}
            >
              {`// ${section}`}
            </Link>
          ))}
          <a
            href={CV_URL}
            download
            className="rounded-[6px] border border-accent bg-accent/12 px-3.5 py-[7px] text-white transition-colors duration-200 hover:bg-accent/35"
          >
            cv ↓
          </a>
        </nav>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isNavOpen && (
            <motion.nav
              ref={navRef}
              className="md:hidden fixed top-0 right-0 w-52 h-[120vh] bg-background shadow-lg flex flex-col items-start gap-4 pt-20 px-7 z-20 border-l text-[14px]"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              {sections.map((section) => (
                <Link
                  key={section}
                  to={`/#${section}`}
                  className={cn(
                    "transition-colors duration-200 hover:text-white",
                    section === activeSection ? "text-white" : "text-[#bdb9cc]",
                  )}
                  onClick={() => setIsNavOpen(false)}
                >
                  {`// ${section}`}
                </Link>
              ))}
              <a
                href={CV_URL}
                download
                className="mt-2 rounded-[6px] border border-accent bg-accent/12 px-3.5 py-[7px] text-white"
                onClick={() => setIsNavOpen(false)}
              >
                cv ↓
              </a>
            </motion.nav>
          )}
        </AnimatePresence>

        {/* Mobile */}
        <motion.button
          ref={toggleRef}
          className={`md:hidden bg-none border-none cursor-pointer text-xl z-30 ${isNavOpen ? "text-accent-2" : "text-white"} transition-colors`}
          aria-label={isNavOpen ? "Close menu" : "Open menu"}
          aria-expanded={isNavOpen}
          animate={{ rotate: isNavOpen ? 0 : 70 }}
          transition={{ type: "spring", stiffness: 60, damping: 10 }}
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          //
        </motion.button>
      </div>
    </header>
  );
};
