import { motion } from "framer-motion";
import React, { useContext } from "react";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import ThemeContext from "@/context/theme";
import { SparklesIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

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
            className={`Welcome-box py-[4px] px-[7px] border ${
              themed === "light" ? "border-[#ff6501]" : "border-[#7042f88b]"
            } opacity-[0.9]`}
          >
            <SparklesIcon
              className={`${
                themed === "light" ? "text-[#fea200]" : "text-[#b49bff]"
              } mr-[10px] h-5 w-5`}
            />
            <h1
              className={`text-[13px] ${
                themed === "light" ? "Welcome-text-light" : "Welcome-text"
              }`}
            >
              About Me
            </h1>
          </motion.div>

          <motion.div
            variants={slideInFromLeft(0.5)}
            className={`flex flex-col gap-6 mt-6 text-6xl font-bold ${
              themed === "light" ? "text-gray-700" : "text-white"
            } max-w-[600px] w-auto h-auto`}
          >
            <span className="hidden sm:block text-6xl">
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

          <motion.p
            variants={slideInFromLeft(0.8)}
            className={`text-lg ${
              themed == "light" ? "text-gray-700" : "text-gray-400"
            } my-5 max-w-[600px] text-start`}
          >
            Graduated in Computer Science in 2022, I embarked on my career as a
            developer with a multidisciplinary and diverse focus. With solid
            experience in mobile and backend development, I have built a path
            that combines technical knowledge, quick adaptation to new
            technologies, and a constant desire for innovation.
          </motion.p>

          <motion.p
            variants={slideInFromLeft(0.8)}
            className={`text-lg ${
              themed == "light" ? "text-gray-700" : "text-gray-400"
            } my-2 max-w-[600px] text-start`}
          >
            My first professional experience was at ZTI Tecnologia, a company in
            Teresópolis, where I was hired to develop an app integrated with the
            company’s healthcare system, SGB. In this project, I developed a
            React Native app tailored to healthcare plan customers and later
            created versions for brokers and clinics, broadening the system’s
            reach and connectivity. Additionally, I contributed to a loyalty
            points program app for a popular local bar and pub.
          </motion.p>

          <motion.p
            variants={slideInFromLeft(0.8)}
            className={`text-lg ${
              themed == "light" ? "text-gray-700" : "text-gray-400"
            } my-2 max-w-[600px] text-start`}
          >
            At ZTI, I gained valuable skills by taking on backend
            responsibilities with Java and Spring and developing and maintaining
            systems in JSF (Java Server Faces). This experience allowed me to
            build a well-rounded profile with expertise in both frontend and
            backend development and a comprehensive perspective on software
            systems.
          </motion.p>
        </div>

        <div className="w-full h-full flex justify-center items-center">
          <Image
            className="hidden sm:block"
            src={themed === "light" ? "/euWhite.png" : "/eu.png"}
            alt="work icons"
            height={650}
            width={650}
          />
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-center px-20 mt-5 w-full z-[20]"
      >
        <motion.p
          variants={slideInFromLeft(0.8)}
          className={`text-lg ${
            themed == "light" ? "text-gray-700" : "text-gray-400"
          } my-5  text-start`}
        >
          After leaving ZTI, I began working as a freelance developer, providing
          tailored solutions for local clients. I developed an app for a
          supermarket, e-commerce sites for stores, and a complete system for my
          church’s library. At the same time, I began mentoring at Serratec,
          where I support students in database, web development, and React
          Native subjects, sharing knowledge and inspiring new talent in the
          field.
        </motion.p>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className={`text-lg ${
            themed == "light" ? "text-gray-700" : "text-gray-400"
          } my-5  text-start`}
        >
          In my professional and personal projects, I prefer to develop APIs in
          Node.js (often with Nest.js), using React (Next.js or Vite) for the
          frontend, and React Native for mobile apps, always aiming to optimize
          the user experience. I am also passionate about IoT and robotics,
          which led me to develop my final project on "System for Monitoring IoT
          Devices in a Residential Environment Using ROS."
        </motion.p>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className={`text-lg ${
            themed == "light" ? "text-gray-700" : "text-gray-400"
          } my-5  text-start`}
        >
          Besides technology, I am a Christian and musician, passionate about
          theology, philosophy, and various readings. I find that programming
          and exploring new areas, like cybersecurity and Python automation,
          allow me to unite my interest in innovation with my desire to create
          solutions that make a meaningful impact on people’s lives.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Hero;
