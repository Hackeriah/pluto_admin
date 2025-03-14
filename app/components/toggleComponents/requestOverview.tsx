"use client";
import { useState } from "react";
import Table from "../Tables/Table";
import { RequestHeader } from "../Tables/TableHeaders";
import { RequestData } from "../Tables/TableData";
import { RequestFullData } from "@/app/api/fullTableData";
import DataControlPanel from "../dataControlPanel";
import { RequestsOverviewDCP } from "../dcpData";
import { RequestToolBar } from "../actionToolBarData";
import RequestEditModal from "../Modals/EditModals/requestEditModal";

export default function RequestOverview() {
  const fullData = RequestFullData()[0].requests;
   const [isOpen, setIsOpen] = useState(false);
  
    const closeModal = () => {
      setIsOpen(false);
    };
  
    const openEditModal = () => {
      setIsOpen(true);
    };
  return (
    <div className='pl-4'>
      <DataControlPanel buttons={RequestToolBar({openEditModal})} dropdownData={RequestsOverviewDCP()} />
      <Table header={RequestHeader()} tableData={RequestData()} fullData={fullData} modalType="requestOverview" />
      {isOpen && <RequestEditModal isOpen={isOpen} closeModal={closeModal} />}
    </div>
  );
}
