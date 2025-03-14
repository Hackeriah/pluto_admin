"use client";
import { useState } from "react";
import StaffCard from "../Cards/staffCard";
import { staffData } from "../Tables/TableData";
import { StaffOverviewToolBar } from "../actionToolBarData";
import { StaffOverviewDCP } from "../dcpData";
import StaffEditModal from "../Modals/EditModals/staffEditModal";
import DataControlPanel from "../dataControlPanel";

const data = staffData();

export default function StaffOverview() {
  const [isOpen, setIsOpen] = useState(false);
  
    const closeModal = () => {
      setIsOpen(false);
    };
  
    const openEditModal = () => {
      setIsOpen(true);
    };
  return (
    <div className="w-full pl-4">
      <DataControlPanel buttons={StaffOverviewToolBar({openEditModal})} dropdownData={StaffOverviewDCP()} />

      <div className="flex flex-wrap gap-4">
        {data.map((staff, index) => (
          <StaffCard
            location={staff.location}
            status={staff.status}
            staffImage={staff.staffImage}
            name={staff.name}
            staffId={staff.staffId}
            role={staff.role}
            key={index}
          />
        ))}
      </div>
      {isOpen && <StaffEditModal isOpen={isOpen} closeModal={closeModal} />}
    </div>
  );
}
