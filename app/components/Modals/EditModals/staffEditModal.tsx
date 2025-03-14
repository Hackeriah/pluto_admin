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

export default function RequestEditModal({ isOpen, closeModal }) {
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
  const totalPages = 3; 

    // CHECKBOX OPTIONS
    const checkboxOptions = [
      { value: 'Option1', label: 'Male', color: 'text-blue-600' },
      { value: 'Option2', label: 'Female', color: 'text-pink-600' },
      { value: 'Option3', label: 'Prefer Not', color: 'text-gray-600' },
    ];
    

  // INPUTS
  const inputs0= [
    { id: "quantity", label: "Full Name", placeholder: "Oladele Johnson" },
    { id: "email", label: "Email", placeholder: "Oladele Johnson@email.com" },
  ]

  const inputs1= [
    { id: "phoneNo", label: "Phone Number", placeholder: "+234 802 345 6789" },
    ]
  const inputs2= [
  { id: "employeeID", label: "Employee ID", placeholder: "Auto-Generated: EMP-5678" },
  ]    
  const inputs3= [
  { id: "place", label: "State/Area/Zone/Landmark", placeholder: "Lagos" },
  ] 
  const inputs4= [
    { id: "username", label: "Username", placeholder: "Oladele Johnson" },
  ] 
  const inputs5= [
  { id: "password", label: "Password", placeholder: "***********" },
  ] 
  const inputs6= [
    { id: "password", label: "Confirm Password", placeholder: "***********" },
  ] 
  const inputs7= [
    { id: "ecn", label: "Emergency Contact Name", placeholder: "+234 803 123 4567" },
  ] 
  const inputs8= [
  { id: "bankName", label: "Account Number", placeholder: "0022455245" },
  ] 
  const inputs9= [
    { id: "bank", label: "Bank Name", placeholder: "FirstBank" },
  ] 
  const inputs10= [
    { id: "accName", label: "AccountName", placeholder: "John Doe" },
  ]



  // DROPDOWNS
  const status0 = [
    { label: "option 1", action: () => console.log("option one")  },
    { label: "option 2",action: () => console.log("option two") },
    { label: "option 3", action: () => console.log("option three") },
  ];
 const dropdown0 = [
    { label: "Role", options: status0, buttonLabel: "State/Area/Zone/Driver/etc",},
   ]

   const status1 = [
    { label: "option 1", action: () => console.log("option one")  },
    { label: "option 2",action: () => console.log("option two") },
    { label: "option 3", action: () => console.log("option three") },
  ];
 const dropdown1 = [
    { label: "System Access Level", options: status1, buttonLabel: "State/Area/Zone/Driver/etc",},
   ]

  const status2 = [
    { label: "option 1", action: () => console.log("option one")  },
    { label: "option 2",action: () => console.log("option two") },
    { label: "option 3", action: () => console.log("option three") },
  ];
 const dropdown2 = [
    { label: "Emergency Contact Name", options: status2, buttonLabel: "Oluwadamilola Johnson",},
  ]
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
    if (currentPage === 1) {
      return [
        { text: "Delete", bgColor: "#D72323", textColor: "white", onClick: null},
        { text: "Cancel", bgColor: "#FBC756", textColor: "black", onClick: closeModal },
        { text: "Next", bgColor: "#319D38", textColor: "white", onClick: nextPage },
      ];
      
    } else if (currentPage === 2) {
      return [
        { text: "Back", bgColor: "transparent", textColor: "Black", onClick: prevPage },
        { text: "Delete", bgColor: "#D72323", textColor: "white", onClick: null },
        { text: "Cancel", bgColor: "#FBC756", textColor: "black", onClick: closeModal },
        { text: "Next", bgColor: "#319D38", textColor: "white", onClick: nextPage },
      ];
      
    } else if (currentPage === 3) {
      return [
        { text: "Ok", bgColor: "#319D38", textColor: "white", onClick: closeModal },
      ];
    }
  };

  return (
    <ModalWrapper
      title="Staff"
      closeModal={closeModal}
      buttons={getButtons()}
      currentPage={currentPage}
      totalPages={totalPages}
    >
      {/* First page: Customer Information & Pickup Location */}
      {currentPage === 1 && (
        <>
          <ModalSection title="Basic Information:">
            <ImageUpload2
              defaultImg="/vectors/noImg.svg"
              selectedImage={selectedImage}
              onImageChange={setSelectedImage}
            />
            <div className="flex justify-between w-full">
              {inputs0.map((input, idx) => (
                <InputBtn className="w-[49%]" key={idx} id={input.id} label={input.label} placeholder={input.placeholder} />
              ))}
            </div>
            <div className="flex justify-between w-full ">
              <DatePickerForm label="Date of Birth" placeHolder="15/08/1987 / Date Modal" className="w-[49%]" />
              {inputs1.map((input, idx) => (
                <InputBtn className="w-[49%]" key={idx} id={input.id} label={input.label} placeholder={input.placeholder} />
              ))}
            </div>
            
            <CheckboxGroup label="Gender" checkboxOptions={checkboxOptions} />
            <TextArea id="address" label="Address" placeholder="45, Ajose Adeogun Street, Victoria Island, Lagos" className="w-full "/>

          </ModalSection>

          <ModalSection title="Employment Details:">
          <div className="flex justify-between w-full">
              {inputs2.map((input, idx) => (
                <InputBtn className="w-[49%]" key={idx} id={input.id} label={input.label} placeholder={input.placeholder} />
              ))}
              {dropdown0.map((dd,idx)=>(
                <CustomDropDown className="w-[49%]" key={idx} options={dd.options} buttonLabel={dd.buttonLabel} label={dd.label} labelFor={dd.labelFor} />
              ))}
          </div>

            <div className="flex justify-between w-full">
              {inputs3.map((input, idx) => (
                <InputBtn className="w-[49%]" key={idx} id={input.id} label={input.label} placeholder={input.placeholder} />
              ))}
            <DatePickerForm label="Date of Hire" placeHolder="20/11/2024 / Date Modal"/>
            </div>
          </ModalSection>
        </>
      )}

      {/* Second page: Waste Information & Scheduling */}
      {currentPage === 2 && <>
        <ModalSection title="Access Control:">
        <div className="flex justify-between w-full">
          {dropdown1.map((dd,idx)=>(
            <CustomDropDown className="w-[49%]" key={idx} options={dd.options} buttonLabel={dd.buttonLabel} label={dd.label} labelFor={dd.labelFor} />
          ))}
          {inputs4.map((input, idx) => (
            <InputBtn className="w-[49%]" key={idx} id={input.id} label={input.label} placeholder={input.placeholder} />
          ))}
        </div>
        <div className="flex justify-between w-full">
          {inputs5.map((input, idx) => (
            <InputBtn className="w-[49%]" key={idx} id={input.id} label={input.label} placeholder={input.placeholder} />
          ))}
          {inputs6.map((input, idx) => (
            <InputBtn className="w-[49%]" key={idx} id={input.id} label={input.label} placeholder={input.placeholder} />
          ))}
        </div>
        </ModalSection>

        <ModalSection title="Contact Information">
        <div className="flex justify-between w-full">
          {dropdown2.map((dd,idx)=>(
            <CustomDropDown className="w-[49%]" key={idx} options={dd.options} buttonLabel={dd.buttonLabel} label={dd.label} labelFor={dd.labelFor} />
          ))}
          {inputs7.map((input, idx) => (
            <InputBtn className="w-[49%]" key={idx} id={input.id} label={input.label} placeholder={input.placeholder} />
          ))}
        </div>
        <TextArea id="address" label="Address" placeholder="45, Ajose Adeogun Street, Victoria Island, Lagos" className="w-full "/>
        </ModalSection>

        <ModalSection title="Additional Details">
        <div className="flex justify-between flex-wrap  w-full">
          {inputs8.map((input, idx) => (
            <InputBtn className="w-[49%]" key={idx} id={input.id} label={input.label} placeholder={input.placeholder} />
          ))}
          {inputs9.map((input, idx) => (
            <InputBtn className="w-[49%]" key={idx} id={input.id} label={input.label} placeholder={input.placeholder} />
          ))}
          
        </div>
        {inputs10.map((input, idx) => (
            <InputBtn className="w-full" key={idx} id={input.id} label={input.label} placeholder={input.placeholder} />
          ))}
        <TextArea id="note" label="Note" placeholder="Has over 10 years of driving Reliable and punctual" className="w-full "/>
        </ModalSection>










      </>}


      {/* Third page: Drivers, Payment, & Submission */}
      {currentPage === 3 && <>
        
      </>}
    </ModalWrapper>
  );
}
