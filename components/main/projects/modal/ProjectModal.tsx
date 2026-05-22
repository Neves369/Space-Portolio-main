import React, { memo, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const ProductModal = ({
  isOpen,
  onClose,
  title,
  image,
  gallery = [],
  tags = [],
  themed,
  link,
  summary,
  description,
  projectType,
  publishedAt,
  githubLink,
  liveLink,
}: any) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const galleryUrls = useMemo(
    () =>
      (gallery || [])
        .map((item: any) => urlFor(item).width(1200).url())
        .filter(Boolean),
    [gallery],
  );

  useEffect(() => {
    setActiveIndex(0);
  }, [image, galleryUrls.length]);

  useEffect(() => {
    if (!isOpen || galleryUrls.length <= 1) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % galleryUrls.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, [isOpen, galleryUrls.length]);

  if (!isOpen) return null;

  const formattedDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString("pt-BR", {
        year: "numeric",
        month: "long",
      })
    : "";

  const openLink = (url: string | undefined) => {
    if (!url) return;
    window.open(url, "_blank");
  };

  return (
    <>
      <div
        style={{ zIndex: 0 }}
        className={`fixed inset-0  bg-opacity-10 backdrop-blur-xl`}
      />

      <div
        onClick={onClose}
        style={{ zIndex: 10 }}
        className="fixed inset-0 flex items-center justify-center px-4 sm:px-6 py-10"
      >
        <div
          onClick={(event) => event.stopPropagation()}
          className={`relative overflow-hidden rounded-[36px] shadow-[0_20px_90px_rgba(15,23,42,0.25)] w-full max-w-5xl bg-white/10 backdrop-blur-xl border ${
            themed === "light" ? "border-orange-200" : "border-violet-700"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-4 bg-transparent">
            <div className="flex flex-col min-h-[320px] lg:min-h-full">
              <div className="relative flex-1 overflow-hidden rounded-3xl">
                <Image
                  src={galleryUrls[activeIndex] || image || "/placeholder.png"}
                  alt={title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-fill transition duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] opacity-90">
                    {projectType || "Projeto"}
                  </p>
                  {formattedDate && (
                    <p className="mt-1 text-xs opacity-80">{formattedDate}</p>
                  )}
                </div>
              </div>
              {galleryUrls.length > 0 && (
                <div className="mt-4 flex items-center gap-2 overflow-x-auto px-2 pb-2">
                  {galleryUrls.map((src: string, index: number) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={`relative h-20 min-w-[80px] flex-shrink-0 overflow-hidden rounded-3xl border-2 transition focus:outline-none ${
                        activeIndex === index
                          ? "border-orange-400 shadow-[0_0_0_3px_rgba(251,146,60,0.24)]"
                          : "border-slate-300 bg-slate-100/70"
                      }`}
                    >
                      <Image
                        src={src}
                        alt={`${title} thumbnail ${index + 1}`}
                        fill
                        sizes="80px"
                        className="object-contain"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-col justify-between p-6 space-y-6 bg-transparent">
              <div className="rounded-[28px] bg-white/95 p-6 shadow-sm dark:bg-slate-950/95">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="space-y-3">
                    <h2
                      className={`text-3xl font-bold tracking-tight ${
                        themed === "light" ? "text-slate-900" : "text-white"
                      }`}
                    >
                      {title}
                    </h2>
                  </div>
                  <button
                    onClick={onClose}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      themed === "light"
                        ? "bg-orange-100 text-orange-700 hover:bg-orange-200"
                        : "bg-violet-800 text-white hover:bg-violet-700"
                    }`}
                  >
                    Fechar
                  </button>
                </div>

                <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
                  {description ? (
                    description
                      .split("\n\n")
                      .map((paragraph: string, index: number) => (
                        <p key={index} className="mb-4 last:mb-0">
                          {paragraph}
                        </p>
                      ))
                  ) : (
                    <p className="opacity-80">
                      Nenhuma descrição detalhada disponível.
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
                    <p className="text-xs uppercase text-slate-400">
                      Tecnologias
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {tags.map((tag: string, index: number) => (
                        <span
                          key={index}
                          className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${
                            themed === "light"
                              ? "border-orange-200 bg-orange-50 text-orange-700"
                              : "border-violet-600 bg-violet-900 text-white"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
                    <p className="text-xs uppercase text-slate-400">Ações</p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      {liveLink && (
                        <button
                          type="button"
                          onClick={() => openLink(liveLink)}
                          className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
                        >
                          Ver ao vivo
                        </button>
                      )}
                      {githubLink && (
                        <button
                          type="button"
                          onClick={() => openLink(githubLink)}
                          className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-100"
                        >
                          Repositório
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(ProductModal);
