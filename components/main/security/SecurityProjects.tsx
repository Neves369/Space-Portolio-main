import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import { useLoading } from "@/context/loading";
import ProductModal from "./modal/ProjectModal";
import { ProjectCardModal } from "../../sub/ProjectCard";
import { containerVariants, itemVariants } from "@/utils/motion";

interface Props {
  themed: string;
}

const ProjectsList = ({
  themed
}: Props) => {
  const [visible, setVisible] = useState(false);
  const [projects, setProjects] = useState<any[]>([]);
  const [selectedProject, setSelectedProject] = useState<any>();

  const blockToText = (blocks: any) => {
    if (!blocks) return "";
    if (typeof blocks === "string") return blocks;
    return blocks
      .map((block: any) =>
        (block.children || []).map((child: any) => child.text || "").join(""),
      )
      .join("\n\n");
  };


  const changeProject = (project: any) => {
    setSelectedProject(project);
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
    setSelectedProject(undefined);
  };


  const { startLoading, stopLoading } = useLoading();

  useEffect(() => {
    const q = `*[_type == "security"]{title, summary, description, mainImage, gallery, tags, links, slug, publishedAt}`;
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
        {projects.map((project, index) => (
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
