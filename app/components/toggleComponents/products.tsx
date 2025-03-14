import { useState } from "react";
import Table from "../Tables/Table";
import EcommerceCard from "../Cards/ecommerceCard";
import { EcommerceProducts } from "../Tables/TableHeaders";
import { ecommerceProductsData } from "../Tables/TableData";
import { ecommerceProductsFullData } from "@/app/api/fullTableData";
import { ProductsToolBar } from "../actionToolBarData";
import { ProductDCP } from "../dcpData";
import EcommerceData from "@/app/api/ecommerceData";
import DataControlPanel from "../dataControlPanel";
import ProductEditModal from "../Modals/EditModals/productEditModal";
import Pagination from "../pagination";

export default function Products() {
  const fullData = ecommerceProductsFullData();
  const [isOpen, setIsOpen] = useState(false);
  const products = EcommerceData();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const totalPages = Math.ceil(products.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const [checkedAll, setCheckedAll] = useState(false);
  const [checkedStates, setCheckedStates] = useState<boolean[]>(Array(fullData.length).fill(false));

  
  const [isListView, setIsListView] = useState(false);


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

  const closeModal = () => {
    setIsOpen(false);
  };

  const openEditModal = () => {
    setIsOpen(true);
  };

  const handleToggleView = (isListView: boolean) => {
    setIsListView(isListView);
  };

  return (
    <div className="pl-4">
      <DataControlPanel
        buttons={ProductsToolBar({ openEditModal })}
        dropdownData={ProductDCP()}
        onToggleView={handleToggleView}
        showToggleButton={true} 
      />
      
      
      {isListView ? (
        <Table
          tableData={ecommerceProductsData(checkedAll, handleCheckboxChange)}
          header={EcommerceProducts(checkedAll, toggleAllCheckboxes)}
          fullData={fullData}
          checkedAll={checkedAll}
          toggleAllCheckboxes={toggleAllCheckboxes}
          handleCheckboxChange={handleCheckboxChange}
          modalType="ecommerceProduct"
        />
      ) : (
        <div className="flex flex-wrap gap-4">
          {currentProducts.map((product, index) => (
            <EcommerceCard
              key={index}
              status={product.status}
              discount={product.discount}
              productImage={product.productImage}
              title={product.title}
              price={product.price}
              originalPrice={product.originalPrice}
              colors={product.colors}
            />
          ))}
        </div>
      )}

     
      {isOpen && <ProductEditModal isOpen={isOpen} closeModal={closeModal} />}
    </div>
  );
}
