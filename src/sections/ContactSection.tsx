import { Reveal } from "@/components/custom/Reveal";
import { Section } from "@/components/custom/Section";
import { SectionTitle } from "@/components/custom/SectionTitle";
import { EMAIL, GITHUB_URL, INSTAGRAM_URL, LINKEDIN_URL } from "@/lib/links";
import { useEffect, useRef, useState } from "react";

export const ContactSection = () => {
  const [isCopied, setIsCopied] = useState(false);
  const resetTimeout = useRef<number>(undefined);

  useEffect(() => () => window.clearTimeout(resetTimeout.current), []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      // Clipboard access unavailable or denied, so don't claim it was copied
      return;
    }
    setIsCopied(true);
    window.clearTimeout(resetTimeout.current);
    resetTimeout.current = window.setTimeout(() => {
      setIsCopied(false);
    }, 1600);
  };

  return (
    <Section id="contact" className="pb-0">
      <SectionTitle className="mb-7">connect</SectionTitle>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] items-end gap-10">
        <Reveal className="flex flex-col items-start gap-5">
          <p className="m-0 text-[14px] leading-[1.75] text-[#b3afc2]">
            Always open to new opportunities, collaborations, and conversations.
          </p>

          <button
            onClick={handleCopy}
            className="flex flex-wrap items-center gap-3.5 cursor-pointer text-left text-[clamp(18px,2.6vw,26px)] text-white transition-colors duration-200 hover:text-accent-soft"
          >
            {EMAIL}
            <span
              aria-live="polite"
              className="border border-[#3a3550] rounded-[6px] px-2.5 py-1 text-[12px] text-accent-2"
            >
              {isCopied ? "copied ✓" : "copy"}
            </span>
          </button>
        </Reveal>

        <Reveal index={1} className="grid grid-cols-3 gap-3">
          <ElsewhereCard
            platform="GitHub"
            url={GITHUB_URL}
            username="@saif-alim"
          />
          <ElsewhereCard
            platform="LinkedIn"
            url={LINKEDIN_URL}
            username="@saif-alim"
          />
          <ElsewhereCard
            platform="Instagram"
            url={INSTAGRAM_URL}
            username="@saifalim_"
          />
        </Reveal>
      </div>
    </Section>
  );
};

interface ElsewhereCardProps {
  platform: string;
  url: string;
  username: string;
}

const ElsewhereCard = ({ platform, url, username }: ElsewhereCardProps) => (
  <a
    href={url}
    target="_blank"
    rel="noreferrer"
    className="border rounded-[10px] p-4 text-center text-[13px] text-white transition-[translate,border-color] duration-200 hover:-translate-y-[3px] hover:border-accent"
  >
    {platform}
    <div className="mt-1 text-[11px] text-[#6f6a84]">{username}</div>
  </a>
);
