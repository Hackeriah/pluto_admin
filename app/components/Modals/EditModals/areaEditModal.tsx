"use client";
import { useState,useEffect } from "react";
import ModalSection from "./modalSection";
import ModalWrapper from "./modalWrapper";
import ImageUpload from "@/app/utils/imageUpload";
import InputBtn from "../../inputBtn";
import CustomDropDown from "../../customDropDown";

export default function AreaEditModal({ isOpen, closeModal,initialData }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [areaName, setAreaName] = useState("");
  const [areaCode, setAreaCode] = useState("");
  
  useEffect(() => {
    if (initialData) {
      setAreaName(initialData.area || "");
      setAreaCode(initialData.areaCode || "");
    }
  }, [initialData]);
  

  if (!isOpen) return null;

  const handleAreaNameChange = (e) => setAreaName(e.target.value);
  const handleAreaCodeChange = (e) => setAreaCode(e.target.value);

    const chooseOptionOne = () => {console.log("Chosen option One")};
    const chooseOptionTwo = () => {console.log("Chosen option Two");};
    const chooseOptionThree = () => {console.log("Chosen option Three");};

    
    const status = [
      { label: "option 1", action: chooseOptionOne },
      { label: "option 2", action: chooseOptionTwo },
      { label: "option 3", action: chooseOptionThree },
    ];


  const dropdowns= [
      { label: "States", options: status, buttonLabel: "Select state fr....",},
    ]
  const inputs = [
    { id: "areaName", label: "Area Name", placeholder: "Enter area name here",value: areaName, onChange: handleAreaNameChange },
    { id: "areaCode", label: "Area Code", placeholder: "Enter Unique code or Auto generated", value: areaCode, onChange: handleAreaCodeChange},
  ];

  const buttons = [
    {text: "Cancel", bgColor: "#FBC756", textColor: "Black", onClick: closeModal},
    { text: "Save", bgColor: "#319D38", textColor: "white", onClick: () => console.log("Save btn clicked"),},
  ];

  return (
    <ModalWrapper title="NEW AREA" closeModal={closeModal} buttons={buttons}>
      <ModalSection title="Basic Information">
        <ImageUpload
          defaultImg="/vectors/noImg.svg"
          selectedImage={selectedImage}
          onImageChange={setSelectedImage}
        />
      </ModalSection>

      <ModalSection title="">
        <div className="flex flex-wrap justify-between">
          {dropdowns.map((dropdown, idx) => (
            <CustomDropDown
              key={idx}
              className="w-[47%]"
              options={dropdown.options}
              buttonLabel={dropdown.buttonLabel}
              label={dropdown.label}
              labelFor={dropdown.labelFor}
            />
          ))}

        
          {inputs.map((input, idx) => (
            <InputBtn key={idx} {...input} className="w-[49%] " />
          ))}
      </div>
      </ModalSection>
    </ModalWrapper>
  );
}
