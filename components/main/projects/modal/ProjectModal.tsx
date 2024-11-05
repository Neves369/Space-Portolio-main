import React from "react";
import Image from "next/image";

const ProductModal = ({ isOpen, onClose, title, children }: any) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        style={{ zIndex: 1000 }}
        className="fixed inset-0 bg-black bg-opacity-80"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div
        style={{ zIndex: 1000 }}
        className="fixed inset-0 flex items-center justify-center z-50 top-10"
      >
        <div className=" bg-white rounded-lg shadow-lg w-11/12 sm:w-2/4">
          {/* Modal Header */}
          <div className="flex flex-col justify-between items-center p-4 border-b">
            <Image
              src={"/senhorita.png"}
              alt={title}
              width={1000}
              height={1000}
              className="w-full object-contain"
            />
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>

          {/* Modal Body */}
          <div className="p-4">{children}</div>
          {/* Modal Footer */}
          <div className="flex justify-end p-4 border-t"></div>
        </div>
      </div>
    </>
  );
};

export default ProductModal;
