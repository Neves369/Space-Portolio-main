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
      <div className="w-full h-96 relative">
        <Image
          src={src}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>

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
    <button
      type="button"
      onClick={action}
      className={`group relative overflow-hidden rounded-3xl border p-0 text-left shadow-xl transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl focus:outline-none ${
        themed === "light"
          ? "border-orange-200 bg-white"
          : "border-violet-700 bg-slate-950"
      }`}
    >
      <div className="relative h-96 w-full overflow-hidden">
        <Image
          src={src}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-fill transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
      </div>

      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between gap-3">
          <h1
            className={`text-2xl font-semibold ${
              themed === "light" ? "text-slate-900" : "text-white"
            }`}
          >
            {title}
          </h1>
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] ${
              themed === "light"
                ? "bg-orange-100 text-orange-800"
                : "bg-violet-800 text-violet-100"
            }`}
          >
            Detalhes
          </span>
        </div>

        <p
          className={`text-sm leading-6 ${
            themed === "light" ? "text-slate-600" : "text-slate-300"
          } line-clamp-3`}
        >
          {description}
        </p>

        <div
          className={`rounded-2xl px-3 py-2 text-xs font-medium uppercase tracking-[0.12em] transition ${
            themed === "light"
              ? "bg-orange-50 text-orange-700"
              : "bg-violet-950/80 text-violet-200"
          }`}
        >
          Abrir projeto
        </div>
      </div>
    </button>
  );
};

export default ProjectCard;
