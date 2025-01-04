import React, { useState } from "react";
import data from "../../../data.json";
import ProjectCard, { ProjectCardModal } from "../../sub/ProjectCard";
import ProductModal from "./modal/ProjectModal";

interface Props {
  themed: string;
  type: string;
  language: string;
}

const ProjectsList = ({ themed, type, language }: Props) => {
  const [visible, setVisible] = useState(false);
  const [selectProject, setSelectProject] = useState<any>();

  const filterProjects = () => {
    return data.projetos.filter((project) => {
      const matchesLanguage =
        language === "All" || project.technology === language;
      const matchesType = type === "All" || project.tags.includes(type);

      return matchesLanguage && matchesType;
    });
  };

  const changeProject = (project: any) => {
    setSelectProject(project);
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
    setSelectProject(undefined);
  };

  const filteredProjects = filterProjects();

  return (
    <div
      className="overflow-hidden flex flex-col pb-10 z-[20]"
      id="my-projects"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-10">
        {filteredProjects.map((project, index) => (
          <ProjectCardModal
            key={index}
            themed={themed}
            action={() => changeProject(project)}
            src={project.src}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
      <ProductModal
        themed={themed}
        isOpen={visible}
        onClose={closeModal}
        title={selectProject?.title}
        image={selectProject?.src}
        tags={selectProject?.tags}
        link={selectProject?.link}
      >
        <p>{selectProject?.descriptionComplete}</p>
      </ProductModal>
    </div>
  );
};

export default ProjectsList;
