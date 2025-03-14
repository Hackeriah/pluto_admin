"use client";
import { useState } from "react";
import Table from "../Tables/Table"
import { clientsB_PData } from "../Tables/TableData"
import { ClientsB_P } from "../Tables/TableHeaders"
import { BillPaymentDCP } from "../dcpData"
import { ClientBPToolBar } from "../actionToolBarData"
import DataControlPanel from "../dataControlPanel"
import { clientsB_PFullData } from "@/app/api/fullTableData"
import ClientBpEditModal from "../Modals/EditModals/clientBpEditModal"

export default function BillPaymentsComponent() {
    const  fullData = clientsB_PFullData()
    const [isOpen, setIsOpen] = useState(false);
    
      const closeModal = () => {
        setIsOpen(false);
      };
    
      const openEditModal = () => {
        setIsOpen(true);
      };
  return (
    <div className="pl-4">
      <DataControlPanel  buttons={ClientBPToolBar({openEditModal})} dropdownData={BillPaymentDCP()} />
      <Table tableData={clientsB_PData()} header={ClientsB_P()} fullData={fullData}/>
      {isOpen && <ClientBpEditModal isOpen={isOpen} closeModal={closeModal} />}
    </div>
  )
}
