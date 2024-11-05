"use client";
import { motion } from "framer-motion";
import Footer from "@/components/main/Footer";
import ThemeContext from "../../context/theme";
import { slideInFromLeft } from "@/utils/motion";
import React, { useContext, useState } from "react";
import ProjectsList from "@/components/main/projects/Projects";
import ProjectsFilter from "@/components/main/projects/Filters";

const Projects = () => {
  const { themed } = useContext(ThemeContext);
  const [type, setType] = useState("All");
  const [language, setLanguage] = useState("All");

  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <div className="h-full w-full flex flex-rol px-10 mt-20 gap-5 m-auto text-start">
          <motion.div
            variants={slideInFromLeft(0.5)}
            className={`flex-1 flex-col gap-6 mt-6 text-6xl font-bold ${
              themed === "light" ? "text-gray-700" : "text-white"
            } max-w-[600px] w-auto h-auto`}
          >
            <span className="hidden sm:block text-6xl">
              My
              <span
                className={`text-transparent bg-clip-text bg-gradient-to-r ${
                  themed === "light"
                    ? "from-orange-500 to-yellow-300"
                    : "from-purple-500 to-cyan-500"
                }`}
              >
                {" "}
                Projects
              </span>
            </span>

            <span className="block sm:hidden text-5xl">
              Douglas
              <span
                className={`text-transparent bg-clip-text bg-gradient-to-r ${
                  themed === "light"
                    ? "from-orange-500 to-yellow-300"
                    : "from-purple-500 to-cyan-500"
                }`}
              >
                {" "}
                Neves
              </span>
            </span>
          </motion.div>
          <ProjectsFilter
            themed={themed}
            type={type}
            language={language}
            setType={setType}
            setLanguage={setLanguage}
          />
        </div>
        <ProjectsList themed={themed} type={type} language={language} />
        <Footer themed={themed} />
      </div>
    </main>
  );
};

export default Projects;
