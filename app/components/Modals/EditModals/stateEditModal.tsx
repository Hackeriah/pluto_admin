"use client";
import CustomDropDown from "../../customDropDown";
import { useState, useEffect } from "react";
import ModalSection from "./modalSection";
import ModalWrapper from "./modalWrapper";
import ImageUpload from "@/app/utils/imageUpload";
import InputBtn from "../../inputBtn";

export default function StateEditModal({ isOpen, closeModal, initialData }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [stateName, setStateName] = useState("");
  const [stateCode, setStateCode] = useState("");

  useEffect(() => {
    if (initialData) {
      setStateName(initialData.state || "");
      setStateCode(initialData.stateCode || "");
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleStateNameChange = (e) => setStateName(e.target.value);
  const handleStateCodeChange = (e) => setStateCode(e.target.value);

  const inputs = [
    { id: "stateName", label: "State Name", placeholder: "Enter state name", value: stateName, onChange: handleStateNameChange },
     ];
 const dropdowns= [
    { label: "States", options: status, buttonLabel: "Select state fr....",},
  ]
  const buttons = [
    { text: "Cancel", bgColor: "#FBC756", textColor: "Black", onClick: closeModal },
    { text: "Save", bgColor: "#319D38", textColor: "white", onClick: () => console.log("Save btn clicked") },
  ];

  return (
    <ModalWrapper title="EDIT STATE" closeModal={closeModal} buttons={buttons}>
      <ModalSection title="Basic Information">
        <ImageUpload
          defaultImg="/vectors/noImg.svg"
          selectedImage={selectedImage}
          onImageChange={setSelectedImage}
        />
      </ModalSection>

      <ModalSection title="">
        <div className="flex w-full flex-wrap justify-between">
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
            <InputBtn key={idx} {...input} className="w-[49%]" />
          ))}
        </div>
      </ModalSection>
    </ModalWrapper>
  );
}
