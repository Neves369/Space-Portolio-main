import React, { useEffect, useState } from "react";
import ProjectCard, { ProjectCardModal } from "../../sub/ProjectCard";
import ProductModal from "./modal/ProjectModal";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { useLoading } from "@/context/loading";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/utils/motion";

interface Props {
  themed: string;
  type: string;
  language: string;
  sortOrder?: string;
}

const ProjectsList = ({
  themed,
  type,
  language,
  sortOrder = "desc",
}: Props) => {
  const [visible, setVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>();
  const [projects, setProjects] = useState<any[]>([]);

  const blockToText = (blocks: any) => {
    if (!blocks) return "";
    if (typeof blocks === "string") return blocks;
    return blocks
      .map((block: any) =>
        (block.children || []).map((child: any) => child.text || "").join(""),
      )
      .join("\n\n");
  };

  const filterProjects = () => {
    return projects.filter((project) => {
      const projTags: string[] = project.tags || [];
      const matchesLanguage =
        language === "All" ||
        projTags.includes(language) ||
        project.projectType === language;
      const matchesType =
        type === "All" ||
        projTags.includes(type) ||
        project.projectType === type;

      return matchesLanguage && matchesType;
    });
  };

  const changeProject = (project: any) => {
    setSelectedProject(project);
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
    setSelectedProject(undefined);
  };

  const filteredProjects = filterProjects();

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    const aDate = a?.publishedAt ? new Date(a.publishedAt).getTime() : 0;
    const bDate = b?.publishedAt ? new Date(b.publishedAt).getTime() : 0;
    return sortOrder === "asc" ? aDate - bDate : bDate - aDate;
  });

  const { startLoading, stopLoading } = useLoading();

  useEffect(() => {
    const q = `*[_type == "project"]{title, summary, description, mainImage, gallery, tags, projectType, links, slug, publishedAt}`;
    startLoading();
    client
      .fetch(q)
      .then((res) => {
        setProjects(res || []);
      })
      .catch(() => setProjects([]))
      .finally(() => stopLoading());
  }, [startLoading, stopLoading]);

  return (
    <div
      className="overflow-hidden flex flex-col pb-10 z-[20]"
      id="my-projects"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-10"
      >
        {sortedProjects.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <ProjectCardModal
              themed={themed}
              action={() => changeProject(project)}
              src={
                project.mainImage
                  ? urlFor(project.mainImage).width(1200).url()
                  : project.src
              }
              title={project.title}
              description={
                project.summary ||
                blockToText(project.description) ||
                "No summary available."
              }
            />
          </motion.div>
        ))}
      </motion.div>


      <ProductModal
        themed={themed}
        isOpen={visible}
        onClose={closeModal}
        title={selectedProject?.title}
        image={
          selectedProject?.mainImage
            ? urlFor(selectedProject.mainImage).width(1200).url()
            : selectedProject?.src
        }
        gallery={selectedProject?.gallery}
        tags={selectedProject?.tags || []}
        link={
          selectedProject?.links?.live ||
          selectedProject?.links?.github ||
          selectedProject?.link
        }
        summary={selectedProject?.summary}
        description={blockToText(selectedProject?.description)}
        projectType={selectedProject?.projectType}
        publishedAt={selectedProject?.publishedAt}
        githubLink={selectedProject?.links?.github}
        liveLink={selectedProject?.links?.live}
      />
    </div>
  );
};

export default ProjectsList;
