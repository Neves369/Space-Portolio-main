"use client";

import React, { useContext } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import Image from "next/image";
import ThemeContext from "@/context/theme";
import { SparklesIcon } from "@heroicons/react/24/solid";

const HeroContent = () => {
  const { themed } = useContext(ThemeContext);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className={`Welcome-box py-[8px] px-[7px] border ${
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
            Fullstack Developer
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className={`flex flex-col gap-6 mt-6 text-6xl font-bold ${
            themed === "light" ? "text-gray-700" : "text-white"
          } max-w-[600px] w-auto h-auto`}
        >
          <span className="hidden sm:block text-6xl">
            Always providing
            <span
              className={`text-transparent bg-clip-text bg-gradient-to-r ${
                themed === "light"
                  ? "from-orange-500 to-yellow-300"
                  : "from-purple-500 to-cyan-500"
              }`}
            >
              {" "}
              the best{" "}
            </span>
            experience
          </span>

          <span className="block sm:hidden text-5xl">
            Always providing
            <span
              className={`text-transparent bg-clip-text bg-gradient-to-r ${
                themed === "light"
                  ? "from-orange-500 to-yellow-300"
                  : "from-purple-500 to-cyan-500"
              }`}
            >
              {" "}
              the best{" "}
            </span>
            experience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className={`text-lg ${
            themed == "light" ? "text-gray-700" : "text-gray-400"
          } my-5 max-w-[600px] text-start`}
        >
          I have a Bachelor&apos;s degree in Computer Science, and I specialize
          in mobile development with React Native, where I seek to create
          efficient and innovative applications. I bring a solid understanding
          of programming fundamentals and practical experience in web and mobile
          development. On the backend, I prefer to work with Node.js, creating
          robust APIs to support application functionality. I am always looking
          for exciting challenges and learning opportunities, ready to
          collaborate on innovative projects and contribute to talented teams.
        </motion.p>
        <motion.a
          // target="_blank"
          href="/aboutme"
          variants={slideInFromLeft(1)}
          className={`py-2 ${
            themed === "light" ? "button-primary-light" : "button-primary"
          } text-center text-white cursor-pointer rounded-lg max-w-[200px]`}
        >
          Learn More!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          className="hidden sm:block"
          src={themed === "light" ? "/mainIcons.png" : "/mainIconsdark.svg"}
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
