"use client";

import ProjectCard from "@/components/ProjectCard";
import { Projects } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/dune4.jpg)" }}
      className="w-screen h-screen flex items-center justify-center bg-center bg-cover "
    >
      <div className="flex flex-wrap justify-center gap-10 mb-20 ">
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
      </div>
    </div>
  );
};

export default Page;
