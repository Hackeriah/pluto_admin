import { useState } from "react";
import Table from "../Tables/Table";
import { EcommerceRestock } from "../Tables/TableHeaders";
import { ecommerceRestockData } from "../Tables/TableData";
import { ecommerceRestockFullData } from "@/app/api/fullTableData";
import { RestockToolBar } from "../actionToolBarData";
import { RestockDCP } from "../dcpData";
import DataControlPanel from "../dataControlPanel";

export default function Restock() {
  const dropdownData = RestockDCP();
  const fullData = ecommerceRestockFullData (); 

  const [checkedAll, setCheckedAll] = useState(false);
  const [checkedStates, setCheckedStates] = useState<boolean[]>(Array(fullData.length).fill(false));

  
  const toggleAllCheckboxes = () => {
    const newCheckedAllState = !checkedAll;
    setCheckedAll(newCheckedAllState);
    setCheckedStates(Array(fullData.length).fill(newCheckedAllState));
  };

 
  const handleCheckboxChange = (index: number) => {
    const updatedCheckedStates = [...checkedStates];
    updatedCheckedStates[index] = !updatedCheckedStates[index];
    setCheckedStates(updatedCheckedStates);
  };

  return (
    <div className="pl-4">
      <DataControlPanel buttons={RestockToolBar()} dropdownData={dropdownData}  />
      <Table
        tableData={ecommerceRestockData(checkedAll, handleCheckboxChange)} 
        header={EcommerceRestock(checkedAll, toggleAllCheckboxes)} 
        fullData={fullData}
        modalType="ecommerceRestock"
        checkedAll={checkedAll}
        toggleAllCheckboxes={toggleAllCheckboxes}
        handleCheckboxChange={handleCheckboxChange}
      />
      
    </div>
  );
}
