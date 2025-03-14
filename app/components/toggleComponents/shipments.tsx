import { useState } from "react";
import Table from "../Tables/Table";
import { EcommerceShipments } from "../Tables/TableHeaders";
import { ecommerceShipmentsData } from "../Tables/TableData";
import { ecommerceShipmentsFullData } from "@/app/api/fullTableData";
import DataControlPanel from "../dataControlPanel";
import { ShipmentsDCP } from "../dcpData";
import { ShipmentToolBar } from "../actionToolBarData";
import ShipmentEditModal from "../Modals/EditModals/shipmentEditModal";

export default function Shipments() {
  const fullData = ecommerceShipmentsFullData();
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openEditModal = () => {
    setIsOpen(true);
  };

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
      <DataControlPanel buttons={ShipmentToolBar({openEditModal})} dropdownData={ShipmentsDCP()} showToggleButton={false} />
      <Table
        tableData={ecommerceShipmentsData(checkedAll, handleCheckboxChange)}
        header={EcommerceShipments(checkedAll, toggleAllCheckboxes)}
        fullData={fullData}
        checkedAll={checkedAll}
        toggleAllCheckboxes={toggleAllCheckboxes}
        handleCheckboxChange={handleCheckboxChange}
        modalType="ecommerceShipment"
      />
      {isOpen && <ShipmentEditModal isOpen={isOpen} closeModal={closeModal} />}
    </div>
  );
}
