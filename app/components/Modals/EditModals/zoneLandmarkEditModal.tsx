"use client";
import CustomDropDown from "../../customDropDown";
import { useState, useEffect } from "react";
import ModalSection from "./modalSection";
import ModalWrapper from "./modalWrapper";
import ImageUpload from "@/app/utils/imageUpload";
import InputBtn from "../../inputBtn";

export default function ZonalLandmarkEditModal({ isLandmarkOpen, closeLandmarkModal, initialData }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [landmarkName, setLandmarkName] = useState("");
  const [landmarkCode, setLandmarkCode] = useState("");
  const [creationCost, setCreationCost] = useState("");
  
  useEffect(() => {
    if (initialData) {
      setLandmarkName(initialData.LandmarkName || "");
      setLandmarkCode(initialData.landmarkCode || "");
      setCreationCost(initialData.creationCost || "");
    }
  }, [initialData]);
  
  if (!isLandmarkOpen) return null;
  const handleLandmarkNameChange = (e) => setLandmarkName(e.target.value);
  const handleLandmarkCodeChange = (e) => setLandmarkCode(e.target.value);
  const handleCreationCostChange = (e) => setCreationCost(e.target.value);
  


  const chooseOptionOne = () => {console.log("Chosen option One")};
  const chooseOptionTwo = () => {console.log("Chosen option Two");};
  const chooseOptionThree = () => {console.log("Chosen option Three");};

  
  const stateStatus = [
    { label: "Abia", action: chooseOptionOne },
    { label: "Imo", action: chooseOptionTwo },
    { label: "Lagos", action: chooseOptionThree },
  ];
  const areaStatus = [
    { label: "area 1", action: chooseOptionOne },
    { label: "area 2", action: chooseOptionTwo },
    { label: "area 3", action: chooseOptionThree },
  ];
  const zoneStatus = [
    { label: "zone1", action: chooseOptionOne },
    { label: "zone 2", action: chooseOptionTwo },
    { label: "zone 3", action: chooseOptionThree },
  ];
  const dropdowns= [
    { label: "States", options: stateStatus, buttonLabel: "Select state fr....",},
    { label: "Area", options: areaStatus, buttonLabel: "Select Area fr....",},
    { label: "Zone", options: zoneStatus, buttonLabel: "Select Zone fr....",},
  ]

  const inputs = [
   { id: "areaCode", label: "Landmark Name", placeholder: "Enter zone name here",value: landmarkName, onChange: handleLandmarkNameChange },
    { id: "landmarkCode", label: "Landmark Code", placeholder: "Enter Unique code or Auto generated",value: landmarkCode, onChange: handleLandmarkCodeChange },
    { id: "creationCost", label: "Creation Cost", placeholder: "00.00",value: creationCost, onChange: handleCreationCostChange },
  ];

  const buttons = [
    {text: "Cancel", bgColor: "#FBC756", textColor: "Black", onClick: closeLandmarkModal},
    { text: "Save", bgColor: "#319D38", textColor: "white", onClick: () => console.log("Save btn clicked"),},
  ];

  return (
    <ModalWrapper title="NEW LANDMARK" closeModal={closeLandmarkModal} buttons={buttons}>
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
