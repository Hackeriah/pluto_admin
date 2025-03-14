'use client';
import { useState } from 'react';
import PageLayout from "@/app/components/Layouts/PageLayout";
import StateEditModal from '@/app/components/Modals/EditModals/stateEditModal';

export default function States() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openStateEditModal = () => {
    setIsOpen(true);
  };

  const navData = {
    "All States": {
      dropdownOptions: [
        {
          label: "State",
          defaultValue: "Delta",
          options: ["Abia", "Lagos", "Edo"],
        },
        {
          label: "Area",
          defaultValue: "Ugbowo",
          options: ["Abia", "Lagos", "Edo"],
        },
      ],
      newEntityLabel: "New State",
      openModal: openStateEditModal, // Handler to open State modal
    },
    Analytics: {
      dropdownOptions: [
        {
          label: "State",
          defaultValue: "Delta",
          options: ["Abia", "Lagos", "Edo"],
        },
        {
          label: "Timeframe",
          defaultValue: "All Time",
          options: ["Abia", "Lagos", "Edo"],
        },
      ],
      newEntityLabel: "", 
      openModal: () => alert("Analytics Modal Opened!"), 
    },
  };

  return (
    <>
      <PageLayout
        title="States"
        dropdownData={navData}
        imgSrc="/vectors/addNew.svg"
      />
      {isOpen && <StateEditModal isOpen={isOpen} closeModal={closeModal} />}
    </>
  );
}
