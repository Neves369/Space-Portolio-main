import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

interface Props {
  themed: string;
}

const Encryption = ({ themed }: Props) => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className={`text-[40px] font-medium text-center ${
            themed === "light" ? "text-gray-900" : "text-gray-200"
          }`}
        >
          Performance
          <span
            className={`text-transparent bg-clip-text bg-gradient-to-r ${
              themed === "light"
                ? "from-orange-500 to-yellow-300"
                : "from-purple-500 to-cyan-500"
            }`}
          >
            {" "}
            &{" "}
          </span>
          Security
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src={themed === "light" ? "/LockTop2.png" : "/LockTop.png"}
            alt="Lock top"
            width={50}
            height={50}
            className="w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
          <Image
            src={themed === "light" ? "/LockMain2.png" : "/LockMain.png"}
            alt="Lock Main"
            width={70}
            height={70}
            className=" z-10"
          />
        </div>

        <div
          className={`Welcome-box px-[15px] py-[4px] z-[20] brder my-[20px] ${
            themed === "light" ? "border-[#ff6501]" : "border-[#7042f88b]"
          } opacity-[0.9]`}
        >
          <h1
            className={`${
              themed === "light" ? "Welcome-text-light" : "Welcome-text"
            } text-[12px]`}
          >
            Encryption
          </h1>
        </div>
      </div>
      <div className="absolute z-[20] bottom-[10px] px-[5px]">
        <div
          className={`cursive text-[20px] font-medium text-center ${
            themed === "light" ? "text-gray-800" : "text-gray-300"
          }`}
        >
          Secure your data with end-to-end encryption
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute bg-transparent">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
          src={themed === "light" ? "/encryption2.webm/" : "/encryption.webm/"}
        />
      </div>
    </div>
  );
};

export default Encryption;
