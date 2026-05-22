import Image from "next/image";
import React from "react";

interface Props {
  themed: string;
  url: string;
  src: string;
  title: string;
  excerpt: string;
  publishedAt?: string;
}

const ArticleCard = ({
  themed,
  url,
  src,
  title,
  excerpt,
  publishedAt,
}: Props) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={`relative overflow-hidden rounded-lg shadow-lg border p-0 flex flex-col ${
        themed === "light"
          ? "border-[#ff6501] hover:bg-orange-300"
          : "border-[#2A0E61] hover:bg-violet-700"
      } cursor-pointer`}
    >
      {src && (
        <div className="w-full h-80 relative">
          <Image
            src={src}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </div>
      )}

      <div className="p-4">
        <h3
          className={`text-xl font-semibold ${themed === "light" ? "text-gray-800" : "text-white"}`}
        >
          {title}
        </h3>
        {publishedAt && (
          <p
            className={`text-sm mt-1 ${themed === "light" ? "text-gray-600" : "text-gray-300"}`}
          >
            {publishedAt}
          </p>
        )}
        <p
          className={`mt-2 line-clamp-3 ${themed === "light" ? "text-gray-600" : "text-gray-300"}`}
        >
          {excerpt}
        </p>
      </div>
    </a>
  );
};

export default ArticleCard;
