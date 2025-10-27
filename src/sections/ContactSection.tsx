import { Section } from "@/components/custom/Section";
import { SectionTitle } from "@/components/custom/SectionTitle";
import { CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";

export const ContactSection = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("saifalimdev@gmail.com");
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 5000);
  };
  return (
    <Section id="contact" className="justify-between pb-12">
      <div className="w-full flex flex-row justify-between">
        <SectionTitle>connect_</SectionTitle>
        <h3 className="text-gray-500 uppercase tracking-widest text-xs mt-4">
          // elsewhere
        </h3>
      </div>
      <div className="w-full flex flex-row gap-2 md:gap-8 justify-between">
        <div className="space-y-6">
          <p className="text-gray-400 text-left text-sm leading-relaxed">
            Always open to new opportunities, collaborations, and conversations.
          </p>

          <span className="flex flex-row items-center gap-2">
            {isCopied ? (
              <CheckIcon size={14} color="var(--color-accent)" />
            ) : (
              <CopyIcon
                size={14}
                color="var(--color-accent)"
                onClick={handleCopy}
                className="cursor-pointer"
              />
            )}
            <a
              href="mailto:saifalimdev@gmail.com"
              className="block text-left text-[var(--color-accent)] hover:underline text-xs md:text-sm"
            >
              saifalimdev@gmail.com →
            </a>
          </span>
        </div>

        <div className="flex flex-col md:items-end w-full md:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
            <ElsewhereCard
              platform="GitHub"
              url="https://github.com/saif-alim"
              username="@saif-alim"
            />
            <ElsewhereCard
              platform="LinkedIn"
              url="https://www.linkedin.com/in/saif-alim"
              username="@saif-alim"
            />
            <ElsewhereCard
              platform="Instagram"
              url="https://www.instagram.com/saifalim_"
              username="@saifalim_"
            />
          </div>
        </div>
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
    className="group border border-gray-800 hover:border-[var(--color-accent)] transition-colors rounded-lg p-4 flex flex-col justify-between"
  >
    <span className="text-white text-sm">{platform}</span>
    <span className="text-gray-500 text-xs group-hover:text-[var(--color-accent)] transition-colors">
      {username}
    </span>
  </a>
);
