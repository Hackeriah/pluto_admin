"use client";
import { useState } from "react";
import Table from "../Tables/Table";
import { queriesData } from "../Tables/TableData";
import { Queries } from "../Tables/TableHeaders";
import DataControlPanel from "../dataControlPanel";
import { queriesFullData } from "@/app/api/fullTableData";
import { QueriesDCP } from "../dcpData";
import { QueriesToolBar } from "../actionToolBarData";
import QueriesEditModal from "../Modals/EditModals/queriesEditModal";

export default function QueriesOverview() {

  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openEditModal = () => {
    setIsOpen(true);
  };


  const dropdownData = QueriesDCP();
  const fullData = queriesFullData()[0].queries; // Assuming queriesData returns an array of data rows

  const [checkedAll, setCheckedAll] = useState(false);
  const [checkedStates, setCheckedStates] = useState<boolean[]>(Array(fullData.length).fill(false));

  // Toggle all checkboxes
  const toggleAllCheckboxes = () => {
    const newCheckedAllState = !checkedAll;
    setCheckedAll(newCheckedAllState);
    setCheckedStates(Array(fullData.length).fill(newCheckedAllState));
  };

  // Handle individual checkbox change
  const handleCheckboxChange = (index: number) => {
    const updatedCheckedStates = [...checkedStates];
    updatedCheckedStates[index] = !updatedCheckedStates[index];
    setCheckedStates(updatedCheckedStates);
  };

  return (
    <div className="pl-4">
      <DataControlPanel buttons={QueriesToolBar({openEditModal})} dropdownData={dropdownData} />
      <Table
        header={Queries(checkedAll, toggleAllCheckboxes)} // Pass checkedAll and toggleAllCheckboxes
        tableData={queriesData(checkedAll, handleCheckboxChange)} // Pass checkedAll and handleCheckboxChange
        fullData={fullData}
        modalType="queries"
        checkedAll={checkedAll}
        toggleAllCheckboxes={toggleAllCheckboxes}
        handleCheckboxChange={handleCheckboxChange}
      />
    {isOpen && <QueriesEditModal isOpen={isOpen} closeModal={closeModal} />}

    </div>
  );
}
