"use client";
import { useState,useEffect } from "react";
import ModalSection from "./modalSection";
import ModalWrapper from "./modalWrapper";
import ImageUpload from "@/app/utils/imageUpload";
import InputBtn from "../../inputBtn";
import CustomDropDown from "../../customDropDown";

export default function ZonalOverviewEditModal({ isOpen, closeModal,initialData  }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoneName, setZoneName] = useState("");
  const [zoneCode, setZoneCode] = useState("");
  
  useEffect(() => {
    if (initialData) {
      setZoneName(initialData.zone || "");
      setZoneCode(initialData.zoneCode || "");
    }
  }, [initialData]);
  

  if (!isOpen) return null;

  const handleZoneNameChange = (e) => setZoneName(e.target.value);
  const handleZoneCodeChange = (e) => setZoneCode(e.target.value);
  
  
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
    { label: "Area Name", options: status, buttonLabel: "Select Area fr....",},
  ]


  const inputs = [
    { id: "zoneName", label: "Zone Name", placeholder: "Enter zone name", value: zoneName, onChange: handleZoneNameChange },
    { id: "zoneCode", label: "Zone Code", placeholder: "Enter zone code", value: zoneCode, onChange: handleZoneCodeChange },
  ];
  

  const buttons = [
    {text: "Cancel", bgColor: "#FBC756", textColor: "Black", onClick: closeModal},
    { text: "Save", bgColor: "#319D38", textColor: "white", onClick: () => console.log("Save btn clicked"),},
  ];

  return (
    <ModalWrapper title="New Zone" closeModal={closeModal} buttons={buttons}>
      <ModalSection title="Basic Information">
        <ImageUpload
          defaultImg="/vectors/noImg.svg"
          selectedImage={selectedImage}
          onImageChange={setSelectedImage}
        />
      </ModalSection>

      <ModalSection title="">
        <div className="flex flex-wrap justify-between ">
          {dropdowns.map((dropdown, idx) => (
            <CustomDropDown
                key={idx}
                className="w-[49%] mb-4"
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
