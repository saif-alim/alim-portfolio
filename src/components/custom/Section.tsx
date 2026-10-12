import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = "",
  ...rest
}) => {
  return (
    <section
      className={cn(
        "w-full max-w-content mx-auto px-7 pt-[120px] pb-10",
        className,
      )}
      {...rest}
    >
      {children}
    </section>
  );
};
