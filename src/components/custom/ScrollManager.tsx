import { prefersReducedMotion, scrollToSection } from "@/lib/scrollToSection";
import { useLayoutEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router";

// The router leaves scrolling to us: follow the hash (e.g. /#projects), or
// start a new page from the top.
export const ScrollManager = () => {
  const { pathname, hash, key } = useLocation();
  const navigationType = useNavigationType();
  const previous = useRef<{ key: string; pathname: string } | null>(null);

  useLayoutEffect(() => {
    const last = previous.current;
    if (last?.key === key) return;
    previous.current = { key, pathname };

    // Back/forward: the browser restores the scroll position itself.
    if (last && navigationType === "POP") return;

    // Glide within a page, but land on a different page already in place.
    const smooth = last?.pathname === pathname;
    if (hash) {
      scrollToSection(hash.slice(1), smooth);
    } else if (last) {
      window.scrollTo({
        top: 0,
        behavior: smooth && !prefersReducedMotion() ? "smooth" : "instant",
      });
    }
  }, [pathname, hash, key, navigationType]);

  return null;
};
