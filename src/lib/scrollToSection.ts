export const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const scrollToSection = (id: string, smooth = true) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({
      behavior: smooth && !prefersReducedMotion() ? "smooth" : "instant",
    });
  }
};
