"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  image: string;
  title: string;
  text: string;
  urlProject: string;
  urlGithub: string;
}

const ProjectCard = ({ image, title, text, urlProject, urlGithub }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }
  return (
    <div
      onClick={handleFlip}
      className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 h-[280px] rounded-md cursor-pointer mb-4 p-6"
    >
      <motion.div
        className="flip-card-inner w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.6, animationDirection: "normal" }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="w-full h-full group relative flip-card-front bg-cover bg-center text-white rounded-lg p-4"
        >
          <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40" />
          <div className="absolute inset-0 w-full h-full text-[20px] pb-5 hidden group-hover:flex items-center z-[20] justify-center">
            Learn more &gt;
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="w-full h-full group relative flip-card-back bg-cover bg-center text-white rounded-lg p-4"
        >
          <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-50 z-[-1]" />
          <div className="flex flex-col gap-10 py-3 z-[30]">
            <h1 className="text-white text-2xl font-semibold sm:text-xl">
              {title}
            </h1>
            <p className="text-gray-200 text-[14px] mt-16">{text}</p>
          </div>
        </div>
      </motion.div>
      <div className="flex justify-end mt-2">
        <a
          href={urlProject}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <button className="mr-4 rounded-[10px] border border-white px-2 py-1 text-white">
            Demo
          </button>
        </a>

        <a
          href={urlGithub}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <button className="rounded-[10px] border border-white px-2 py-1 text-white">
            Github
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
