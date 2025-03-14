'use client';
import { useState } from "react";
import { usePathname } from "next/navigation"; 
import PageLayout from "@/app/components/Layouts/PageLayout";
import LandmarkEditModal from "@/app/components/Modals/EditModals/landmarkEditModals";

export default function Landmark() {
  const [isOpen, setIsOpen] = useState(false);
  const router = usePathname(); 

  const closeModal = () => {
    setIsOpen(false);
  };

  const openLandmarkEditModal = () => {
    setIsOpen(true);
  };

  let navData = {
    "Overview": {
      dropdownOptions: [
        {
          label: "State",
          defaultValue: "Delta",
          options: ["Delta", "Lagos", "Edo"],
        },
        {
          label: "Area",
          defaultValue: "Ugbowo",
          options: ["Ugbowo", "Olukwu", "textile mill"],
        },
        {
            label: "Zone",
            defaultValue: "Ekosodin",
            options: ["Edo street", "Boundry road", "Londoners"],
          },
      ],
      newEntityLabel: "New Landmark",
      openModal: openLandmarkEditModal,
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
//   if (router.endsWith("/state_admin/areas")) {
//     // Remove "State" dropdown option from "All Area"
//     navData["All Area"].dropdownOptions = navData["All Area"].dropdownOptions.filter(
//       (option) => option.label !== "State"
//     );

//     // Remove "State" dropdown option from "Analytics"
//     navData["Analytics"].dropdownOptions = navData["Analytics"].dropdownOptions.filter(
//       (option) => option.label !== "State"
//     );
//   }

  return (
    <>
      <PageLayout
        title="Areas"
        dropdownData={navData}
        imgSrc="/vectors/addNew.svg"
      />
      {isOpen && <LandmarkEditModal isOpen={isOpen} closeModal={closeModal} />}
    </>
  );
}
