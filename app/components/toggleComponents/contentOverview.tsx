import { useState } from "react";
import Table from "../Tables/Table";
import { contentData } from "../Tables/TableData";
import { contentFullData } from "@/app/api/fullTableData";
import { contentHeader } from "../Tables/TableHeaders";
import DataControlPanel from "../dataControlPanel";
import { ContentToolBar } from "../actionToolBarData";
import { ContentOverviewDCP } from "../dcpData";
import EditModal from "../Modals/EditModals/contentEditModal";

export default function ContentOverview() {
  const dropdownData = ContentOverviewDCP();
  const fullData = contentFullData(); // Assuming contentData returns an array of data rows
  const [isOpen, setIsOpen] = useState(false);
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

  const closeModal = () => {
    setIsOpen(false);
  };

  const openEditModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="pl-4">
      <DataControlPanel buttons={ContentToolBar({openEditModal})} dropdownData={dropdownData} />
      <Table header={contentHeader(checkedAll, toggleAllCheckboxes)}  tableData={contentData(checkedAll, handleCheckboxChange)} fullData={fullData} modalType="contents" checkedAll={checkedAll} toggleAllCheckboxes={toggleAllCheckboxes} handleCheckboxChange={handleCheckboxChange} />
          {isOpen && <EditModal isOpen={isOpen} closeModal={closeModal} />}
    </div>
  );
}
