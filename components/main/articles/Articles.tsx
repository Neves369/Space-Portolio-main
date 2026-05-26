"use client";
import React, { useEffect, useState } from "react";
import ArticleCard from "@/components/sub/ArticleCard";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { useLoading } from "@/context/loading";

interface Props {
  themed: string;
  sortOrder: string;
}

const ArticlesList = ({ themed, sortOrder }: Props) => {
  const [articles, setArticles] = useState<any[]>([]);

  const { startLoading, stopLoading } = useLoading();

  useEffect(() => {
    const q = `*[_type == "mediumArticle"]{title, excerpt, coverImage, url, publishedAt, topics}`;
    startLoading();
    client
      .fetch(q)
      .then((res) => setArticles(res || []))
      .catch(() => setArticles([]))
      .finally(() => stopLoading());
  }, [startLoading, stopLoading]);

  const sortedArticles = [...articles].sort((a, b) => {
    const aDate = a?.publishedAt ? new Date(a.publishedAt).getTime() : 0;
    const bDate = b?.publishedAt ? new Date(b.publishedAt).getTime() : 0;
    return sortOrder === "asc" ? aDate - bDate : bDate - aDate;
  });

  return (
    <div className="overflow-hidden flex flex-col pb-10 z-[20]" id="articles">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
        {sortedArticles.map((a, i) => (
          <ArticleCard
            key={i}
            themed={themed}
            url={a.url}
            src={a.coverImage ? urlFor(a.coverImage).width(1200).url() : ""}
            title={a.title}
            excerpt={a.excerpt}
            publishedAt={a.publishedAt}
          />
        ))}
      </div>
    </div>
  );
};

export default ArticlesList;
