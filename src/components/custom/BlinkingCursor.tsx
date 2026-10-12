import { cn } from "@/lib/utils";

export const BlinkingCursor = ({ className }: { className?: string }) => (
  <span
    aria-hidden="true"
    className={cn(
      "inline-block bg-accent-2 animate-blink motion-reduce:animate-none",
      className,
    )}
  />
);
