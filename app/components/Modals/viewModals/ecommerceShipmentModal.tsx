"use client";
import { IoCloseSharp } from "react-icons/io5";
const img = "/images/product1.png";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import ButtonPanel from "../modalComponents/buttonPannel";
import CustomDropDown from "../../customDropDown";

const EcommerceShipmentModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  rowData, // Assuming `rowData` contains the JSON data passed into the modal
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // For dropdown state
  const dropdownRef = useRef(null);

  // Function to toggle dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  if (!isOpen || !rowData) {
    return null;
  }


  const handleCancel = () => {
    onClose()
    console.log("Cancel button clicked");
  };

  const handleConfirm = () => {
    console.log("Confirm details button clicked");
    
  };

//   ============ Dropdown ===========

const chooseOptionOne = () => {
    console.log("Choosen option Three");
  };
  const chooseOptionTwo = () => {
    console.log("Choosen option Three");
  };
  const chooseOptionThree = () => {
    console.log("Choosen option Three");
  };

  const status = [
    { label: "option 1", action: chooseOptionOne() },
    { label: "option 2", action: chooseOptionTwo() },
    { label: "option 3", action: chooseOptionThree() },
  ];
    // ========= Buttons ==========
  const buttons = [
    {
      text: "Confirm",
      //   bgColor: "#D72323", // red
      bgColor: "#FBC756", // yellow
      textColor: "black",
      onClick: handleConfirm,
    },
    {
      text: "Cancel",
      bgColor: "#319D38", // green
      textColor: "white",
      onClick: handleCancel,
    },
  ];


  return (
    <div className="fixed top-0 right-0 bg-white z-10 w-[30vw] h-[100vh] flex flex-col py-2 border shadow-lg shadow-gray-500/50">
      <div className="flex text-gray-600 justify-between items-center py-2 border-b-2 px-10">
        <div className="flex gap-2">
          <p className="text-[1.4vw] font-bold">Shipment ID: </p>
          <p className="text-[1.4vw] font-bold text-cDarkGreen">
            {rowData.shipmentId}
          </p>
        </div>

        <button onClick={onClose}>
          <IoCloseSharp className="text-4xl" />
        </button>
      </div>

      <div className="overflow-y-scroll">
        <div className="flex text-gray-600 items-center gap-[1.4vw] justify-between py-4 px-10">
          <div className="flex-[2] border p-2 h-auto flex items-center justify-center">
            <Image
              src={img}
              width={30}
              height={30}
              layout="responsive"
              alt=""
            />
          </div>

          <div className="flex-[1] h-auto flex items-center justify-center">
            <Image
              src={img}
              width={30}
              height={30}
              layout="responsive"
              alt=""
            />
          </div>

          <div className="flex-[1] h-auto flex items-center justify-center">
            <Image
              src={img}
              width={30}
              height={30}
              layout="responsive"
              alt=""
            />
          </div>

          <div className="flex-[1] h-auto flex items-center justify-center">
            <Image
              src={img}
              width={30}
              height={30}
              layout="responsive"
              alt=""
            />
          </div>
        </div>

        {/* Shipment Overview Section */}
        <div className="gap-2 text-gray-600 flex flex-col border-b-2 px-10 py-2">
          <p>Shipment Overview</p>
          <div className="flex gap-[1vw]">
            <p>Shipment ID: </p>
            <p className="text-black">{rowData.shipmentOverview.shipmentId}</p>
          </div>

          <div className="gap-[1vw] flex flex-col">
            <div className="flex gap-2">
              <p>Shipment Type:</p>
              <p className="text-black ">
                {rowData.shipmentOverview.shipmentType}
              </p>
            </div>
            <div className="flex gap-2">
              <p>Destination:</p>
              <p className="text-black ">
                {rowData.shipmentOverview.destination}
              </p>
            </div>
            <div className="flex gap-2">
              <p>Dispatch Date:</p>
              <p className="text-black ">
                {rowData.shipmentOverview.dispatchDate}
              </p>
            </div>
            <div className="flex gap-2">
              <p>Estimated Arrival:</p>
              <p className="text-black ">
                {rowData.shipmentOverview.estimatedArrival}
              </p>
            </div>

            <div className="w-full">
              <CustomDropDown options={status} buttonLabel="Current Status" />
              </div>
            
          </div>
        </div>

        {/* Products in Shipment Section */}
        <div className="gap-2 text-gray-600 flex flex-col border-b-2 px-10 py-2">
          <p>Products In Shipment</p>
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr>
                <th className="pr-4 py-2 font-medium text-left">
                  Product Name
                </th>
                <th className="pr-4 py-2 font-medium text-left">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {rowData.productsInShipment.map((product, index) => (
                <tr key={index}>
                  <td className="pr-4 text-black py-2">
                    {product.productName}
                  </td>
                  <td className="pr-4 py-2 text-black pt-1">
                    {product.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Driver and Vehicle Details Section */}
        <div className="gap-2 text-gray-600 flex flex-col border-b-2 px-10 py-2">
          <p>Driver & Vehicle Details</p>
          <div className="flex gap-2 items-center">
            <p>Assigned Driver: </p>
            <p className="text-black pt-1">
              {rowData.driverAndVehicleDetails.assignedDriver}
            </p>
          </div>

          <div className="flex gap-2 items-center">
            <p>Contact Number: </p>
            <p className="text-black ">
              {rowData.driverAndVehicleDetails.contactNumber}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <p>Vehicle Assigned: </p>
            <p className="text-black pt-1">
              {rowData.driverAndVehicleDetails.vehicleAssigned}
            </p>
          </div>
        </div>

        {/* Shipment Timeline Section */}
        <div className="gap-2 text-gray-600 flex flex-col border-b-2 px-10 pb-[10vh] py-2">
          <p>Shipment Timeline</p>
          <div className="flex gap-2 items-center">
            <p>Created On: </p>
            <p className="text-black pt-1">
              {rowData.shipmentTimeline.createdOn}
            </p>
          </div>

          <div className="flex gap-2 items-center">
            <p>Dispatch On: </p>
            <p className="text-black pt-1">
              {rowData.shipmentTimeline.dispatchOn}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <p>Last Update: </p>
            <p className="text-black pt-1">
              {rowData.shipmentTimeline.lastUpdate}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <p>Notes: </p>
            <p className="text-black pt-1">{rowData.shipmentTimeline.notes}</p>
          </div>
        </div>
      </div>

      <ButtonPanel buttons={buttons} />
      
    </div>
  );
};

export default EcommerceShipmentModal;
