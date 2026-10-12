import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  as?: "div" | "h1" | "h2" | "p" | "li";
  /** Position among siblings: each step delays the reveal by 80ms. */
  index?: number;
  className?: string;
  children: ReactNode;
}

// Fades and slides its content in the first time it scrolls into view.
export const Reveal = ({
  as = "div",
  index = 0,
  className,
  children,
}: RevealProps) => {
  const reduceMotion = useReducedMotion();
  const Tag = motion[as] as typeof motion.div;

  return (
    <Tag
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{
        duration: 0.8,
        ease: [0.2, 0.8, 0.2, 1],
        delay: Math.min(index, 6) * 0.08,
      }}
    >
      {children}
    </Tag>
  );
};
