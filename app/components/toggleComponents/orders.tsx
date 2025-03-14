import { useState } from "react";
import Table from "../Tables/Table";
import { ecommerceOrdersFullData } from "@/app/api/fullTableData";
import { ecommerceOrdersData } from "../Tables/TableData";
import { EcommerceOrders } from "../Tables/TableHeaders";
import DataControlPanel from "../dataControlPanel";
import { OrdersDCP } from "../dcpData";
import { OrderToolBar } from "../actionToolBarData";

const buttons = OrderToolBar();

export default function Orders() {
  const dropdownData = OrdersDCP();
  const fullData = ecommerceOrdersFullData()[0].orders;

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
      <DataControlPanel buttons={buttons} dropdownData={dropdownData} />
      <Table
        tableData={ecommerceOrdersData(checkedAll, handleCheckboxChange)} // Pass checkedAll and handleCheckboxChange
        header={EcommerceOrders(checkedAll, toggleAllCheckboxes)} // Pass checkedAll and toggleAllCheckboxes
        fullData={fullData}
        modalType="ecommerceOrder"
        checkedAll={checkedAll}
        toggleAllCheckboxes={toggleAllCheckboxes}
        handleCheckboxChange={handleCheckboxChange}
      />
    </div>
  );
}
