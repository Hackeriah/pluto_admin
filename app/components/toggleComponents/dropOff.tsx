"use client";
import { useState } from "react";
import Table from "../Tables/Table";
import { ScheduleDropOff } from "../Tables/TableHeaders";
import { ScheduleDropOffTableData } from "../Tables/TableData";
import { ScheduleDropOffData } from "@/app/api/fullTableData";
import { ScheduleDropOffDCP } from "../dcpData";
import { DropOffToolBar } from "../actionToolBarData";
import DataControlPanel from "../dataControlPanel";
import DropOffStationModal from "../Modals/EditModals/dropOffStationModal";

export default function DropOff() {
  const fullData = ScheduleDropOffData();
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openEditModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="pl-4">
      <DataControlPanel buttons={DropOffToolBar({ openEditModal })} dropdownData={ScheduleDropOffDCP()} />
      <Table header={ScheduleDropOff()} tableData={ScheduleDropOffTableData()} fullData={fullData} modalType="scheduleDropOff" />
      {isOpen && <DropOffStationModal isOpen={isOpen} closeModal={closeModal} />}
    </div>
  );
}
