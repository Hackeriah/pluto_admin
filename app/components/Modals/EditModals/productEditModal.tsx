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

export default function ProductEditModal({ isOpen, closeModal }) {
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
    { id: "productName", label: "Product Name", placeholder: "Standard Waste Bin" },
    ]

  const inputs1= [
    { id: "basePrice", label: "Base Price (₦)", placeholder: "20,000" },
    { id: "addCost", label: "Additional Costs (₦)", placeholder: "500" },  
  ]
  const inputs2= [
  { id: "stockQ", label: "Stock Quantity", placeholder: "100" },
  { id: "reOrderL", label: "Reorder Level (Optional)", placeholder: "10" },
  ]    
  


  // DROPDOWNS
  const status0 = [
    { label: "option 1", action: () => console.log("option one")  },
    { label: "option 2",action: () => console.log("option two") },
    { label: "option 3", action: () => console.log("option three") },
  ];
 const dropdown0 = [
  { label: "Product Type", options: status0, buttonLabel: "Physical Item",},
  { label: "Category", options: status0, buttonLabel: "Household",},
   ]

   const status1 = [
    { label: "10%", action: () => console.log("option one")  },
    { label: "20%",action: () => console.log("option two") },
    { label: "25%", action: () => console.log("option three") },
  ];
 const dropdown1 = [
    { label: "Discount (%) (Optional)", options: status1, buttonLabel: "% Number",},
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
    <ModalWrapper title="New Product" closeModal={closeModal} buttons={getButtons()} currentPage={currentPage} totalPages={totalPages} >
      {/* First page: Customer Information & Pickup Location */}
     
      <ModalSection title="Product Information:">
            
        {inputs0.map((input, idx) => (
          <InputBtn className="w-full" key={idx} id={input.id} label={input.label} placeholder={input.placeholder} />
        ))}
            
        <div className="flex justify-between w-full ">
          {dropdown0.map((dd,idx)=>(
              <CustomDropDown className="w-[49%]" key={idx} options={dd.options} buttonLabel={dd.buttonLabel} label={dd.label} labelFor={dd.labelFor} />
            ))}
        </div>
        <TextArea id="description" label="Description" placeholder="A 120L waste bin designed for household waste collection. Ideal for residential use." className="w-full "/>

      </ModalSection>

      <ModalSection title="Pricing Details:">
        <div className="flex justify-between w-full">
          {inputs1.map((input, idx) => (
            <InputBtn className="w-[49%]" key={idx} id={input.id} label={input.label} placeholder={input.placeholder} />
          ))}
        </div>
        {dropdown1.map((dd,idx)=>(
          <CustomDropDown className="w-[49%]" key={idx} options={dd.options} buttonLabel={dd.buttonLabel} label={dd.label} labelFor={dd.labelFor} />
        ))}
      </ModalSection>
       
      <ModalSection title="Inventory Details (If Applicable):">
        <div className="flex justify-between w-full">
          {inputs2.map((input, idx) => (
            <InputBtn className="w-[49%]" key={idx} id={input.id} label={input.label} placeholder={input.placeholder} />
          ))}
        </div>
        <CheckboxGroup label="Select an Option" checkboxOptions={checkboxOptions} />
      </ModalSection>
       

      
    </ModalWrapper>
  );
}
