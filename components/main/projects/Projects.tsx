import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../../sub/ProjectCard";
import { slideInFromLeft } from "@/utils/motion";
import data from "../../../data.json";

interface Props {
  themed: string;
}

const ProjectsList = ({ themed }: Props) => {
  return (
    <div className="flex flex-col py-20 z-[20]" id="my-projects">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-10">
        {data.projetos.map((project, index) => (
          <ProjectCard
            key={index}
            themed={themed}
            link={project.link}
            src={project.src}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
