"use client";

import ProjectCard from "@/components/ProjectCard";
import { Projects } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/dune4.jpg)" }}
      className="w-screen h-screen flex flex-col items-center justify-center bg-center bg-cover overflow-y-scroll"
    >
      <div className="flex flex-wrap justify-between max-w-[80%] max-h-[80%] ">
        {Projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            text={project.text}
            image={project.src}
            urlProject={project.urlProject}
            urlGithub={project.urlGithub}
          />
        ))}
        <div className="w-[450px] h-[100px] "> </div>
      </div>
    </div>
  );
};

export default Page;
