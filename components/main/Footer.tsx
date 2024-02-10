import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

interface Props {
  themed: string;
}

const Footer = ({ themed }: Props) => {
  return (
    <div
      className={`w-full h-full bg-transparent ${
        themed === "light" ? "text-gray-700" : "text-gray-200"
      } shadow-lg p-[15px] z-[999]`}
    >
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            {/* <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaYoutube />
              <span className="text-[15px] ml-[6px]">Youtube</span>
            </p> */}
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxGithubLogo />
              <a
                target="_blank"
                href="https://github.com/Neves369"
                className="text-[15px] ml-[6px]"
              >
                Github
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxDiscordLogo />
              <a
                target="_blank"
                href="dougbn369"
                className="text-[15px] ml-[6px]"
              >
                Discord
              </a>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxInstagramLogo />
              <a
                target="_blank"
                href="https://www.instagram.com/dneves.369"
                className="text-[15px] ml-[6px]"
              >
                Instagram
              </a>
            </p>

            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxLinkedinLogo />
              <a
                target="_blank"
                href="https://www.linkedin.com/in/douglas-neves-3946b51a0/"
                className="text-[15px] ml-[6px]"
              >
                Linkedin
              </a>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>

            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Learning about me</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
                douglasbrian369@hotmail.com
              </span>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Douglas Neves 2024 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
