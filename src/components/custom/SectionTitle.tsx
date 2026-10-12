import { cn } from "@/lib/utils";
import type React from "react";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export const SectionTitle: React.FC<{
  children: ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <Reveal
    as="h2"
    className={cn(
      "font-medium tracking-[3px] text-[clamp(28px,4vw,40px)] text-white m-0 mb-14",
      className,
    )}
  >
    {children}
    <span className="text-accent-2">_</span>
  </Reveal>
);
