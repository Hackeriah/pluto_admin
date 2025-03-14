import React, { useEffect, useRef } from "react";
import ModalHeader from "./modalHeader";
import ButtonPanel from "../modalComponents/buttonPannel";

export default function ModalWrapper({ children, title, closeModal, buttons, currentPage, totalPages, className = "" }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeModal]);

  return (
    <div
      ref={modalRef}
      className={`fixed text-[#606060] top-0 right-0 bg-white z-10 w-[30vw] h-[100vh] flex flex-col py-2 border shadow-lg shadow-gray-500/50 ${className}`}
    >
      <ModalHeader title={title} closeModal={closeModal} currentPage={currentPage} totalPages={totalPages} />
      <div className="h-full flex flex-col gap-4 overflow-y-auto">
        {children}
      </div>
      <ButtonPanel buttons={buttons} />
    </div>
  );
}
