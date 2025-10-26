import type { JSX } from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: JSX.Element;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = "",
  ...rest
}) => {
  return (
    <section
      className={`flex flex-col md:flex-row min-h-screen w-full max-w-5xl max-h-[1200px] mx-auto box-border px-[5%] overflow-x-hidden pt-[110px] gap-2xl ${className}`}
      {...rest}
    >
      {children}
    </section>
  );
};
