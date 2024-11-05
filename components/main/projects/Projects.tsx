import React, { useState } from "react";
import data from "../../../data.json";
import ProjectCard from "../../sub/ProjectCard";
import ProductModal from "./modal/ProjectModal";

interface Props {
  themed: string;
  type: string;
  language: string;
}

const ProjectsList = ({ themed, type, language }: Props) => {
  const [selectProject, setSelectProject] = useState({});

  const filterProjects = () => {
    return data.projetos.filter((project) => {
      const matchesLanguage =
        language === "All" || project.technology === language;
      const matchesType = type === "All" || project.tags.includes(type);

      return matchesLanguage && matchesType;
    });
  };

  const filteredProjects = filterProjects();

  return (
    <div className="flex flex-col pb-10 z-[20]" id="my-projects">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-10">
        {filteredProjects.map((project, index) => (
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
      <ProductModal isOpen={false} onClose={""} title="My Modal">
        <p>This is the content of the modal!</p>
      </ProductModal>
    </div>
  );
};

export default ProjectsList;
