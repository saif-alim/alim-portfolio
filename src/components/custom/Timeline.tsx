import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface TimelineProps {
  items: string[];
  className?: string;
}

// Bullet points hung off a vertical rule, each marked with a dot on the rule.
export const Timeline = ({ items, className }: TimelineProps) => (
  <ul
    className={cn(
      "flex flex-col gap-5 min-w-0 m-0 pl-6 border-l border-[#241f35] list-none text-[14px]",
      className,
    )}
  >
    {items.map((item, index) => (
      <Reveal
        as="li"
        key={item}
        index={index}
        className="relative leading-[1.75] text-pretty text-[#c6c2d4]"
      >
        <span className="absolute top-[0.65em] -left-[29px] size-[13px] rounded-full border-2 border-accent-2 bg-background" />
        {item}
      </Reveal>
    ))}
  </ul>
);
