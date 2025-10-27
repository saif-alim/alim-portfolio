import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import type { Project } from "./projects";

interface ProjectDetailModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectDetailModal = ({
  project,
  onClose,
}: ProjectDetailModalProps) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative max-w-3xl w-full bg-[#0a0a0a] border border-gray-800 rounded-xl p-6 font-mono text-gray-200"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center border-b border-gray-800 pb-3 mb-4">
            <h3 className="text-xl text-[var(--color-accent)]">
              //{" "}
              {project.shortProjectName ||
                project.projectTitle.toLowerCase().replace(/\s+/g, "_")}
            </h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-[var(--color-accent)] text-sm"
            >
              [close]
            </button>
          </div>

          <div className="space-y-4">
            <Carousel opts={{ loop: true }}>
              <CarouselContent>
                {project.imageUrls.map((url, index) => (
                  <CarouselItem key={index}>
                    <img
                      src={url}
                      alt={`${project.projectTitle} - image ${index + 1}`}
                      className="w-full rounded-md border border-gray-800"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              {project.imageUrls.length > 1 && (
                <>
                  <CarouselPrevious className="absolute left-3 top-1/2 rounded-md size-8 text-gray-400 hover:text-[var(--color-accent)]">
                    {"<"}
                  </CarouselPrevious>

                  <CarouselNext className="absolute right-3 top-1/2 rounded-md size-8 text-gray-400 hover:text-[var(--color-accent)]">
                    {">"}
                  </CarouselNext>
                </>
              )}
            </Carousel>
            <h2 className="text-2xl">{project.projectTitle}</h2>
            <p className="text-sm leading-relaxed tracking-wide">
              {project.detailedDescription || project.projectDescription}
            </p>

            <p className="text-sm text-[var(--color-accent)]">
              <span className="text-gray-500">// tech_stack:</span>{" "}
              {"{" + project.techStack.join(", ") + "}"}
            </p>

            {project.projectUrl && (
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-block text-[var(--color-accent)] hover:underline text-sm"
              >
                → View project
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
