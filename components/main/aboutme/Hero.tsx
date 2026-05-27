import { useContext } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromTop,
  slideInFromRight,
} from "@/utils/motion";
import Image from "next/image";
import ThemeContext from "@/context/theme";
import { SparklesIcon } from "@heroicons/react/20/solid";
import Page3D from "./me3d";

const Hero = () => {
  const { themed } = useContext(ThemeContext);
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
      >
        <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
          <motion.div
            variants={slideInFromTop}
            className={`Welcome-box py-[4px] px-[7px] border ${themed === "light" ? "border-[#ff6501]" : "border-[#7042f88b]"
              } opacity-[0.9]`}
          >
            <SparklesIcon
              className={`${themed === "light" ? "text-[#fea200]" : "text-[#b49bff]"
                } mr-[10px] h-5 w-5`}
            />
            <h1
              className={`text-[13px] ${themed === "light" ? "Welcome-text-light" : "Welcome-text"
                }`}
            >
              About Me
            </h1>
          </motion.div>

          <motion.div
            variants={slideInFromLeft(0.5)}
            className={`flex flex-col gap-6 mt-6 text-6xl font-bold ${themed === "light" ? "text-gray-700" : "text-white"
              } max-w-[600px] w-auto h-auto`}
          >
            <span className="hidden sm:block text-6xl">
              Douglas
              <span
                className={`text-transparent bg-clip-text bg-gradient-to-r ${themed === "light"
                    ? "from-orange-500 to-yellow-300"
                    : "from-purple-500 to-cyan-500"
                  }`}
              >
                {" "}
                Neves
              </span>
            </span>

            <span className="block sm:hidden text-5xl">
              Douglas
              <span
                className={`text-transparent bg-clip-text bg-gradient-to-r ${themed === "light"
                    ? "from-orange-500 to-yellow-300"
                    : "from-purple-500 to-cyan-500"
                  }`}
              >
                {" "}
                Neves
              </span>
            </span>
          </motion.div>

          <motion.p
            variants={slideInFromLeft(0.8)}
            className={`text-lg ${themed == "light" ? "text-gray-700" : "text-gray-400"
              } my-5 max-w-[800px] text-start`}
          >
            With a Bachelor's degree in Computer Science and a career built on
            technical excellence and strategic vision, I currently serve as the
            Head of the Programming Division for the Teresópolis Municipal
            Government. In this role, I lead large-scale digital transformation
            initiatives and hold a seat on the Municipal Digital Governance
            Committee, where I contribute to high-level decision-making and
            technology policies for the public sector. Beyond my executive role,
            I am deeply committed to fostering the next generation of tech
            talent as a Professor at the Serratec Software Residency. I mentor
            and train developers in everything from core programming
            fundamentals to advanced web and mobile architecture, bridging the
            gap between academic theory and market demands. My professional
            focus is centered on architecting robust, scalable solutions and
            high-performance APIs. I am driven by the challenge of integrating
            efficient governance, modern software architecture, and impactful
            innovation to create solutions that meaningfully improve people's
            lives.
          </motion.p>
        </div>

        <div className="w-full h-full flex justify-center items-center">
          <Image
            className="hidden sm:block absolute"
            src={
              themed === "light"
                ? "/assets/icons/mainIconsdark.svg"
                : "/assets/icons/mainIconsdark.svg"
            }
            alt="work icons"
            height={650}
            width={650}
          />
          <Page3D />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
