import { GithubIcon } from "@/assets/icons/GithubIcon";
import { LinkedInIcon } from "@/assets/icons/LinkedInIcon";
import { LocationIcon } from "@/assets/icons/LocationIcon";
import { Section } from "@/components/custom/Section";
import { useState } from "react";

export const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Section className="justify-center items-center" id="home">
      <>
        <div id="image-container">
          <img
            src="/assets/alim-the-thinker.png"
            alt="Saif Ul Alim Ahmed"
            className="w-[80vw] max-w-xs md:w-[40vw] md:max-w-sm pb-5 md:pb-0 m-0"
          />
        </div>

        <div className="pb-5 md:pb-0">
          <h1 className="font-medium text-left tracking-wide text-4xl md:text-6xl leading-none m-0 pb-1">
            Saif Ul Alim
            <br />
            Ahmed
          </h1>

          <h2 className="bg-gradient-to-r text-left from-gray-500 to-gray-600 bg-clip-text text-transparent tracking-widest text-2xl md:text-4xl leading-tight m-0">
            Software Engineer
          </h2>

          <div className="flex flex-row justify-start gap-8 pt-0 md:pt-2">
            <a
              href="https://www.linkedin.com/in/saif-alim"
              aria-label="LinkedIn"
            >
              <div className="transition-transform duration-200 ease-in-out hover:scale-110 group pt-1">
                <LinkedInIcon />
              </div>
            </a>

            <a href="https://github.com/saif-alim/" aria-label="GitHub">
              <div className="transition-transform duration-200 ease-in-out hover:scale-110 group pt-1">
                <GithubIcon />
              </div>
            </a>

            <div className="flex flex-row gap-[2px] items-center overflow-hidden">
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="transition-transform duration-200 ease-in-out hover:scale-110 group"
              >
                <LocationIcon />
              </div>
              <div className="relative overflow-hidden">
                <p
                  className={`pl-1 pt-0 text-left tracking-widest text-xs md:text-sm leading-tight m-0 bg-gradient-to-r from-gray-500 to-gray-700 bg-clip-text text-transparent transition-[left] duration-300 ease-in-out relative ${
                    isHovered ? "left-0" : "-left-full"
                  }`}
                >
                  London, <br />
                  United Kingdom
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    </Section>
  );
};
