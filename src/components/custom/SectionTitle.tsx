import type React from "react";
import type { ReactNode } from "react";

export const SectionTitle: React.FC<{ children: ReactNode }> = ({
  children,
}) => (
  <h1 className="font-medium text-left tracking-widest text-3xl md:text-4xl leading-none m-0 pb-10">
    {children}
  </h1>
);
