'use client';
import { useState } from "react";
import { usePathname } from "next/navigation"; // Import the usePathname hook
import PageLayout from "@/app/components/Layouts/PageLayout";
import ZonalOverviewEditModal from "@/app/components/Modals/EditModals/zoneOverviewEditModal";
import ZonalLandmarkEditModal from "@/app/components/Modals/EditModals/zoneLandmarkEditModal";

export default function ZonalAdmin() {
  const [isOpen, setIsOpen] = useState(false); // Overview modal state
  const [isLandmarkOpen, setIsLandmarkOpen] = useState(false); // Landmark modal state
  const router = usePathname(); // Initialize the router to check the current route

  const closeModal = () => {
    setIsOpen(false);
  };

  const closeLandmarkModal = () => {
    setIsLandmarkOpen(false);
  };

  const openZoneOverviewEditModal = () => {
    setIsOpen(true);
  };

  const openLandmarkModal = () => {
    setIsLandmarkOpen(true);
  };

  let navData = {
    Overview: {
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
      newEntityLabel: "New Zone",
      openModal: openZoneOverviewEditModal, // Correct handler to open Overview modal
    },
    Landmarks: {
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
        {
          label: "Zone",
          defaultValue: "Ovia North East",
          options: ["Abia", "Lagos", "Edo"],
        },
      ],
      newEntityLabel: "New Landmark",
      openModal: openLandmarkModal, // Correct handler to open Landmark modal
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
          label: "Zone",
          defaultValue: "All",
          options: ["Abia", "Lagos", "Edo"],
        },
        {
          label: "Landmark",
          defaultValue: "All",
          options: ["Abia", "Lagos", "Edo"],
        },
        {
          label: "Timeframe",
          defaultValue: "All Time",
          options: ["Abia", "Lagos", "Edo"],
        },
      ],
      newEntityLabel: "", // No new entity label for Analytics
      openModal: () => alert("Analytics Modal Opened!"), // Placeholder for future Analytics modal
    },
  };

  // Conditionally remove "State" and "Area" dropdowns if the route ends with "/area_admin/zones"
  if (router.endsWith('/area_admin/zones')) {
    // Remove "State" and "Area" dropdowns from "Overview"
    navData["Overview"].dropdownOptions = navData["Overview"].dropdownOptions.filter(
      (option) => option.label !== "State" && option.label !== "Area"
    );

    // Remove "State" and "Area" dropdowns from "Landmarks"
    navData["Landmarks"].dropdownOptions = navData["Landmarks"].dropdownOptions.filter(
      (option) => option.label !== "State" && option.label !== "Area"
    );

    // Remove "State" and "Area" dropdowns from "Analytics"
    navData["Analytics"].dropdownOptions = navData["Analytics"].dropdownOptions.filter(
      (option) => option.label !== "State" && option.label !== "Area"
    );
  }

  if (router.endsWith('/state_admin/zones')) {
    // Remove "State" and "Area" dropdowns from "Overview"
    navData["Overview"].dropdownOptions = navData["Overview"].dropdownOptions.filter(
      (option) => option.label !== "State"
    );

    // Remove "State" and "Area" dropdowns from "Landmarks"
    navData["Landmarks"].dropdownOptions = navData["Landmarks"].dropdownOptions.filter(
      (option) => option.label !== "State"
    );

    // Remove "State" and "Area" dropdowns from "Analytics"
    navData["Analytics"].dropdownOptions = navData["Analytics"].dropdownOptions.filter(
      (option) => option.label !== "State"
    );
  }

  return (
    <>
      <PageLayout
        title="Zones"
        dropdownData={navData}
        imgSrc="/vectors/addNew.svg"
      />
      {isOpen && <ZonalOverviewEditModal isOpen={isOpen} closeModal={closeModal} />}
      {isLandmarkOpen && <ZonalLandmarkEditModal isLandmarkOpen={isLandmarkOpen} closeLandmarkModal={closeLandmarkModal} />}
    </>
  );
}
