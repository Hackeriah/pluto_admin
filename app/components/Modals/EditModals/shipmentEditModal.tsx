import React, { useState, useEffect } from "react";
import Image from "next/image";
import ModalSection from "./modalSection";
import ModalWrapper from "./modalWrapper";
import PhoneNumberInput from "@/app/utils/phoneNumberInput";
import InputBtn from "../../inputBtn";
import TextArea from "../../textArea";
import CustomDropDown from "../../customDropDown";
import CustomDropdown2 from "@/app/utils/customDropDown2";
import { stateAreaZoneData } from "@/app/api/dropDownData";
import PaymentForm from "../../payment";
import ImageUpload2 from "@/app/utils/imageUpload2";
import DatePickerForm from "@/app/utils/dateModal";
import { input } from "framer-motion/client";
import CheckboxGroup from "@/app/utils/checkBoxGroup";
import { MdAddBox } from "react-icons/md";


export default function ShipmentEditModal({ isOpen, closeModal }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [phone, setPhone] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedZone, setSelectedZone] = useState("");
  const [selectedLandmark, setSelectedLandmark] = useState("");
  const [availableAreas, setAvailableAreas] = useState([]);
  const [availableZones, setAvailableZones] = useState([]);
  const [availableLandmarks, setAvailableLandmarks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const totalPages = 0; 

  // input:"012"
  // dropdown:"01"

  // INPUTS
  const inputs0= [
    { id: "shipmentId", label: "Shipment ID", placeholder: "AUTO-GENERATED" },
    ]

  const inputs1= [
    { id: "shipmentType", label: "Shipment Type", placeholder: "Regular/Special" },
    ]
    const inputs2= [
      { id: "", label: "", placeholder: "e.g. 50" },
      { id: "", label: "", placeholder: "e.g. 50" },
      { id: "", label: "", placeholder: "e.g. 50" },
      ]    
      


  // DROPDOWNS
  const status0 = [
    { label: "option 1", action: () => console.log("option one")  },
    { label: "option 2",action: () => console.log("option two") },
    { label: "option 3", action: () => console.log("option three") },
  ];
 const dropdown0 = [
  { label: "Destination", options: status0, buttonLabel: "List of Area Offices",},
   ]

   const status1 = [
    { label: "option1", action: () => console.log("option one")  },
    { label: "option2",action: () => console.log("option two") },
    { label: "option3", action: () => console.log("option three") },
  ];
 const dropdown1 = [
    { label: "Select Driver", options: status1, buttonLabel: "Femi Lazarus",},
    { label: "Vehicle Assigned", options: status1, buttonLabel: "Truck - TRK-00234",},
    { label: "Dispatch Date", options: status1, buttonLabel: "Date Modal",},
    { label: "Estimated Arrival", options: status1, buttonLabel: 'Date Modal',},
   ]


  // CHECKBOX OPTIONS
  const checkboxOptions = [
    { value: 'Option1', label: 'red', ringColor: 'ring-red-800' },
    { value: 'Option2', label: 'Green', ringColor: 'ring-green-800' },
    { value: 'Option3', label: 'Blue', ringColor: 'ring-blue-800' },
    { value: 'Option4', label: 'Black', ringColor: 'ring-black' },
    { value: 'Option5', label: 'White', ringColor: 'ring-gray-400' },
    { value: 'Option6', label: 'Select Color', ringColor: 'ring--400' },
];

const [products, setProducts] = useState([
  { product: "", quantity: "" }, // Initial product
]);

const handleAddProduct = () => {
  setProducts([...products, { product: "", quantity: "" }]);
};

const handleRemoveProduct = (index) => {
  setProducts(products.filter((_, i) => i !== index));
};

const handleProductChange = (index, field, value) => {
  const updatedProducts = products.map((product, i) =>
    i === index ? { ...product, [field]: value } : product
  );
  setProducts(updatedProducts);
};



if (!isOpen) return null;
  
  
  
  
  

  const handleCancelBtn = () => {
    closeModal();
  };

  const handleSaveBtn = () => {
    const formData = {
      phone,
      state: selectedState,
      area: selectedArea,
      zone: selectedZone,
      landmark: selectedLandmark,
    };
    console.log("Form data to be saved:", formData);
  };

  const nextPage =() => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  if (!isOpen) return null;

  const getButtons = () => {
    // if (currentPage === 1) {
      return [
        // { text: "Delete", bgColor: "#D72323", textColor: "white", onClick: null},
        { text: "Cancel", bgColor: "#FBC756", textColor: "black", onClick: closeModal },
        { text: "Save", bgColor: "#319D38", textColor: "white", onClick: nextPage },
      ];
    // }
      
    // } else if (currentPage === 2) {
    //   return [
    //     { text: "Back", bgColor: "transparent", textColor: "Black", onClick: prevPage },
    //     { text: "Delete", bgColor: "#D72323", textColor: "white", onClick: null },
    //     { text: "Cancel", bgColor: "#FBC756", textColor: "black", onClick: closeModal },
    //     { text: "Next", bgColor: "#319D38", textColor: "white", onClick: nextPage },
    //   ];
      
    // } else if (currentPage === 3) {
    //   return [
    //     { text: "Ok", bgColor: "#319D38", textColor: "white", onClick: closeModal },
    //   ];
    // }
  };

  return (
    <ModalWrapper
      title="Create Shipment"
      closeModal={closeModal}
      buttons={getButtons()}
      currentPage={currentPage}
      totalPages={totalPages}
    >
      {/* First page: Customer Information & Pickup Location */}

      <ModalSection title="Shipment Details:">
        <div className="flex justify-between w-full ">
          {inputs0.map((input, idx) => (
            <InputBtn
              className="w-[49%]"
              key={idx}
              id={input.id}
              label={input.label}
              placeholder={input.placeholder}
            />
          ))}

          {dropdown0.map((dd, idx) => (
            <CustomDropDown
              className="w-[49%]"
              key={idx}
              options={dd.options}
              buttonLabel={dd.buttonLabel}
              label={dd.label}
              labelFor={dd.labelFor}
            />
          ))}
        </div>
        {inputs1.map((input, idx) => (
          <InputBtn
            className="w-[49%]"
            key={idx}
            id={input.id}
            label={input.label}
            placeholder={input.placeholder}
          />
        ))}
      </ModalSection>

      <ModalSection title="Products to Include:">
        <div className="flex justify-between">
          <p className="text-black">Add Product</p>
          <button onClick={handleAddProduct}>
            <MdAddBox className="text-cDarkGreen text-2xl" />
          </button>
        </div>
        <div className="flex justify-between">
          <span className="w-1/2">Product Name</span>
          <span className="w-1/2">Quantity</span>
        </div>

        <ul className="">
          {products.map((product, index) => (
            <li key={index} className="w-full flex justify-between">
              <CustomDropDown
                className="w-[40%]"
                options={[{ label: "Waste Bin" }, { label: "Broom stick" }]}
                buttonLabel="Waste Bin"
                labelFor="product"
                onSelect={(value) => handleProductChange(index, "product", value)}
              />
              <InputBtn
                className="w-[40%]"
                id={`quantity-${index}`}
                placeholder="e.g. 50"
                value={product.quantity}
                onChange={(e) => handleProductChange(index, "quantity", e.target.value)}
              />
              <button onClick={() => handleRemoveProduct(index)}>
                <Image width={30} height={30} src="/vectors/minusBtn.svg" alt="Remove" />
              </button>
            </li>
          ))}
        </ul>
      </ModalSection>
      <ModalSection title="Driver, Vehicle & Shipping Assignment:">
        <div className="flex justify-between flex-wrap w-full">
        {dropdown1.map((dd, idx) => (
            <CustomDropDown
              className="w-[49%] mb-4"
              key={idx}
              options={dd.options}
              buttonLabel={dd.buttonLabel}
              label={dd.label}
              labelFor={dd.labelFor}
            />
          ))}
        </div>
          
      </ModalSection>
    </ModalWrapper>
  );
}
