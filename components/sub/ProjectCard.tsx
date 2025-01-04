import Image from "next/image";
import React from "react";

interface Props {
  themed: string;
  link: string;
  src: string;
  title: string;
  description: string;
}

interface Props2 {
  themed: string;
  action: any;
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ themed, link, src, title, description }: Props) => {
  return (
    <a
      href={link}
      target="_blank"
      className={`relative overflow-hidden rounded-lg shadow-lg border ${
        themed === "light"
          ? "border-[#ff6501] hover:bg-orange-300"
          : "border-[#2A0E61] hover:bg-violet-700"
      } cursor-pointer`}
    >
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4 max-w-md">
        <h1
          className={`text-2xl font-semibold ${
            themed === "light" ? "text-gray-800" : "text-white"
          }`}
        >
          {title}
        </h1>
        <p
          className={`mt-2 line-clamp-3 ${
            themed === "light" ? "text-gray-600" : "text-gray-300"
          } `}
        >
          {description}
        </p>
      </div>
    </a>
  );
};

export const ProjectCardModal = ({
  themed,
  action,
  src,
  title,
  description,
}: Props2) => {
  return (
    <div
      onClick={action}
      className={`relative overflow-hidden rounded-lg shadow-lg border ${
        themed === "light"
          ? "border-[#ff6501] hover:bg-orange-300"
          : "border-[#2A0E61] hover:bg-violet-700"
      } cursor-pointer`}
    >
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4 max-w-md">
        <h1
          className={`text-2xl font-semibold ${
            themed === "light" ? "text-gray-800" : "text-white"
          }`}
        >
          {title}
        </h1>
        <p
          className={`mt-2 line-clamp-3 ${
            themed === "light" ? "text-gray-600" : "text-gray-300"
          } `}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
