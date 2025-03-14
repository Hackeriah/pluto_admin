'use client';
import { useState } from "react";
import { usePathname } from "next/navigation"; // Import usePathname for route detection
import PageLayout from "@/app/components/Layouts/PageLayout";
import AreaEditModal from "@/app/components/Modals/EditModals/areaEditModal";

export default function Area() {
  const [isOpen, setIsOpen] = useState(false);
  const router = usePathname(); // Get the current route path

  const closeModal = () => {
    setIsOpen(false);
  };

  const openAreaEditModal = () => {
    setIsOpen(true);
  };

  let navData = {
    "All Area": {
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
      newEntityLabel: "New Area",
      openModal: openAreaEditModal,
    },
    Analytics: {
      dropdownOptions: [
        {
          label: "State",
          defaultValue: "Delta",
          options: ["Abia", "Lagos", "Edo"],
        },
        {
          label: "Area",
          defaultValue: "All",
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

  // Conditionally remove "State" dropdown if the route ends with "/state_admin/areas"
  if (router.endsWith("/state_admin/areas")) {
    // Remove "State" dropdown option from "All Area"
    navData["All Area"].dropdownOptions = navData["All Area"].dropdownOptions.filter(
      (option) => option.label !== "State"
    );

    // Remove "State" dropdown option from "Analytics"
    navData["Analytics"].dropdownOptions = navData["Analytics"].dropdownOptions.filter(
      (option) => option.label !== "State"
    );
  }

  return (
    <>
      <PageLayout
        title="Areas"
        dropdownData={navData}
        imgSrc="/vectors/addNew.svg"
      />
      {isOpen && <AreaEditModal isOpen={isOpen} closeModal={closeModal} />}
    </>
  );
}
