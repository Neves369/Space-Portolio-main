import React, { memo, useEffect } from "react";
import Image from "next/image";

const ProductModal = ({
  isOpen,
  onClose,
  title,
  image,
  tags,
  children,
  themed,
  link,
}: any) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Limpeza do efeito
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        style={{ zIndex: 1000 }}
        className={`fixed inset-0  ${
          themed === "light" ? "bg-gray-300" : "bg-black"
        } bg-opacity-95`}
      />

      {/* Modal Content */}
      <div
        onClick={onClose}
        style={{ zIndex: 1000 }}
        className="fixed inset-0 flex items-center justify-center z-50 top-10"
      >
        <div
          onClick={() => window.open(link, "_blank")}
          className={`border bg-white rounded-lg shadow-lg w-11/12 sm:w-2/4 ${
            themed === "light" ? "border-[#ff6501]" : "border-[#2A0E61]"
          }`}
        >
          {/* Modal Header */}
          <div className="flex flex-col justify-between items-center p-4 border-b">
            <Image src={image} alt={title} width={600} height={600} />
          </div>

          {/* Modal Body */}
          <div className="flex p-4 overflow-y-auto max-h-36">{children}</div>

          {/* Modal Footer */}
          <div className="flex justify-start gap-5 p-4 border-t">
            {tags.map((tag: string, index: any) => (
              <p
                className={`Welcome-box py-[4px] px-[7px] opacity-[0.9] border ${
                  themed === "light"
                    ? "border-[#ff6501] bg-orange-300"
                    : "border-[#2A0E61] bg-violet-700 text-white"
                }`}
                key={index}
              >
                {tag}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(ProductModal);
