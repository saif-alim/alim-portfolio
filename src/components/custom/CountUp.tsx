import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const easeOutCubic = (progress: number) => 1 - Math.pow(1 - progress, 3);

interface CountUpProps {
  value: number;
  suffix?: string;
}

// Counts from 0 up to `value` the first time it scrolls into view.
export const CountUp = ({ value, suffix = "" }: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(value);

  useEffect(() => {
    if (!isInView || reduceMotion) return;
    const controls = animate(0, value, {
      duration: 1.2,
      ease: easeOutCubic,
      onUpdate: (latest) => setCount(Math.round(latest)),
    });
    return () => controls.stop();
  }, [isInView, reduceMotion, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};
