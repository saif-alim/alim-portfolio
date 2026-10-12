import { BlinkingCursor } from "@/components/custom/BlinkingCursor";
import { Reveal } from "@/components/custom/Reveal";
import { DotField } from "@/components/DotField";
import { CV_URL, GITHUB_URL, LINKEDIN_URL } from "@/lib/links";
import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const roles = [
  "software developer",
  "full-stack + mobile",
  "react · node · aws · android",
];

const TYPE_DELAY = 75;
const DELETE_DELAY = 35;
const HOLD_DELAY = 1800;
const NEXT_ROLE_DELAY = 300;

// Types each role out, holds it, deletes it, then moves on to the next.
const TypedRole = () => {
  const reduceMotion = useReducedMotion();
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (reduceMotion) return;

    let roleIndex = 0;
    let length = 0;
    let isDeleting = false;
    let timeout: number;

    const tick = () => {
      const role = roles[roleIndex];
      length += isDeleting ? -1 : 1;
      setTyped(role.slice(0, length));

      let delay = isDeleting ? DELETE_DELAY : TYPE_DELAY;
      if (!isDeleting && length === role.length) {
        isDeleting = true;
        delay = HOLD_DELAY;
      } else if (isDeleting && length === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        delay = NEXT_ROLE_DELAY;
      }
      timeout = window.setTimeout(tick, delay);
    };
    tick();

    return () => window.clearTimeout(timeout);
  }, [reduceMotion]);

  return (
    <>
      <span className="sr-only">{roles[0]}</span>
      <span aria-hidden="true">{reduceMotion ? roles[0] : typed}</span>
      <BlinkingCursor className="w-[11px] h-[1.05em] ml-1 align-[-3px]" />
    </>
  );
};

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative flex items-center min-h-[calc(100vh-66px)]"
    >
      <DotField className="[mask-image:radial-gradient(ellipse_at_60%_50%,#000_30%,transparent_78%)]" />

      {/* pointer-events-none lets mouse moves through to the dot field */}
      <div className="relative grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] items-center gap-14 w-full max-w-content mx-auto px-7 py-10 sm:py-20 pointer-events-none">
        <Reveal className="relative justify-self-center w-[180px] sm:w-[min(100%,300px)] aspect-square pointer-events-auto">
          <div className="absolute -inset-3.5 rounded-full border border-dashed border-[rgba(168,85,247,0.45)]" />
          <img
            src="/assets/alim-the-thinker.webp"
            alt="Saif Ul Alim Ahmed"
            className="size-full rounded-full object-cover p-6 select-none"
          />
        </Reveal>

        <div className="flex flex-col gap-[22px] pointer-events-auto">
          <Reveal className="text-[13px] tracking-[1px] text-accent-2">
            $ whoami
          </Reveal>

          <Reveal
            as="h1"
            index={1}
            className="font-medium tracking-[-1px] text-[clamp(40px,6vw,68px)] leading-[1.02] text-white m-0"
          >
            saif ul alim
            <br />
            ahmed
          </Reveal>

          <Reveal
            index={2}
            className="font-light tracking-[2px] text-[clamp(18px,2.2vw,24px)] text-[#9c97b0] min-h-8"
          >
            <TypedRole />
          </Reveal>

          <Reveal
            as="p"
            index={3}
            className="max-w-[520px] m-0 text-[14px] leading-[1.75] text-pretty text-[#b3afc2]"
          >
            Software Developer with 2+ years of experience building full-stack
            web and native mobile products, from requirements to production.
            Strong in TypeScript, React, Node.js, AWS and Android development,
            and currently studying for the AWS Certified Developer - Associate.
          </Reveal>

          <Reveal index={4} className="flex flex-wrap gap-3 mt-1.5">
            <Link
              to="/#projects"
              className="rounded-[8px] bg-accent px-5 py-3 font-medium text-[13px] text-white transition-[translate,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-8px_rgba(124,58,237,0.8)]"
            >
              view projects →
            </Link>
            <a
              href={CV_URL}
              download
              className="rounded-[8px] border border-[#3a3550] px-5 py-3 text-[13px] text-[#e7e4f0] transition-colors duration-200 hover:border-accent-2 hover:text-white"
            >
              download cv ↓
            </a>
          </Reveal>

          <Reveal
            index={5}
            className="flex flex-wrap gap-[22px] text-[12px] text-[#7d7891]"
          >
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="text-[#7d7891] transition-colors duration-200 hover:text-white"
            >
              github ↗
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="text-[#7d7891] transition-colors duration-200 hover:text-white"
            >
              linkedin ↗
            </a>
            <span>london, uk</span>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
