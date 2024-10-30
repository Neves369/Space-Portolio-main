"use client";
import React, { useContext } from "react";
import Footer from "@/components/main/Footer";
import ThemeContext from "../../context/theme";
import ProjectsList from "@/components/main/projects/Projects";

const Projects = () => {
  const { themed } = useContext(ThemeContext);

  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <ProjectsList themed={themed} />
        <Footer themed={themed} />
      </div>
    </main>
  );
};

export default Projects;
