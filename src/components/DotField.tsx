import { cn } from "@/lib/utils";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

const SPACING = 24;
const DOT_RADIUS = 1.1;
const CURSOR_EASING = 0.12;

const PRESETS = {
  home: { alpha: 0.1, wave: 0.09, reach: 170, glow: 0.75, grow: 1.4, push: 12 },
  project: {
    alpha: 0.08,
    wave: 0.07,
    reach: 150,
    glow: 0.6,
    grow: 1.2,
    push: 10,
  },
};

interface DotFieldProps {
  intensity?: keyof typeof PRESETS;
  className?: string;
}

// Canvas grid of dots with a slow travelling wave. Dots near the cursor
// brighten, grow and are pushed away from it. Fills its positioned parent.
export const DotField = ({ intensity = "home", className }: DotFieldProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const { alpha, wave, reach, glow, grow, push } = PRESETS[intensity];
    const cursor = { x: -999, y: -999, targetX: -999, targetY: -999 };
    let width = 0;
    let height = 0;
    let frame = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (time: number) => {
      cursor.x += (cursor.targetX - cursor.x) * CURSOR_EASING;
      cursor.y += (cursor.targetY - cursor.y) * CURSOR_EASING;
      ctx.clearRect(0, 0, width, height);

      for (let y = SPACING / 2; y < height; y += SPACING) {
        for (let x = SPACING / 2; x < width; x += SPACING) {
          let dotAlpha =
            alpha +
            wave *
              Math.sin(x * 0.012 + time * 0.0011) *
              Math.cos(y * 0.014 - time * 0.0008);
          let dotX = x;
          let dotY = y;
          let radius = DOT_RADIUS;

          const dx = x - cursor.x;
          const dy = y - cursor.y;
          const distance = Math.hypot(dx, dy);
          if (distance < reach) {
            const force = 1 - distance / reach;
            dotAlpha += force * glow;
            radius += force * grow;
            dotX += (dx / (distance || 1)) * force * push;
            dotY += (dy / (distance || 1)) * force * push;
          }

          ctx.fillStyle = `rgba(168,85,247,${dotAlpha})`;
          ctx.beginPath();
          ctx.arc(dotX, dotY, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    if (reduceMotion) {
      const drawStill = () => {
        resize();
        draw(0);
      };
      drawStill();
      const resizeObserver = new ResizeObserver(drawStill);
      resizeObserver.observe(canvas);
      return () => resizeObserver.disconnect();
    }

    const loop = (time: number) => {
      // The canvas can still be unmeasured (or stale) on the first frames.
      if (
        !width ||
        Math.abs(canvas.clientWidth - width) > 1 ||
        Math.abs(canvas.clientHeight - height) > 1
      ) {
        resize();
      }
      draw(time);
      frame = requestAnimationFrame(loop);
    };

    const onMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      cursor.targetX = event.clientX - rect.left;
      cursor.targetY = event.clientY - rect.top;
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    window.addEventListener("mousemove", onMouseMove);
    frame = requestAnimationFrame(loop);

    // Only keep animating while the canvas is on screen.
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      cancelAnimationFrame(frame);
      if (entry.isIntersecting) frame = requestAnimationFrame(loop);
    });
    visibilityObserver.observe(canvas);

    return () => {
      cancelAnimationFrame(frame);
      visibilityObserver.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [intensity, reduceMotion]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={cn("absolute inset-0 size-full", className)}
    />
  );
};
