import ModalSection from "./modalSection";
import ModalWrapper from "./modalWrapper";
import { useState } from "react";
import CustomDropDown from "../../customDropDown";
import InputBtn from "../../inputBtn";

export default function ClientBpEditModal({ isOpen, closeModal }) {

    if (!isOpen) {
      return null;
    }
  
    const handleCancelBtn = () => {
      console.log("Cancel btn clicked");
      closeModal();
    };
  
    const handleSaveBtn = () => {
      console.log("Save btn clicked");
    };
  
    const buttons = [
      { text: "Cancel", bgColor: "#FBC756", textColor: "Black", onClick: handleCancelBtn,},
      { text: "Save", bgColor: "#319D38", textColor: "white", onClick: handleSaveBtn,},
    ];
  
    
  
    // Define actions for each option
    const chooseOptionOne = () => {console.log("Chosen option One")};
    const chooseOptionTwo = () => {console.log("Chosen option Two");};
    const chooseOptionThree = () => {console.log("Chosen option Three");};
  
    // Define status options for each dropdown
    const status = [
      { label: "option 1", action: chooseOptionOne },
      { label: "option 2", action: chooseOptionTwo },
      { label: "option 3", action: chooseOptionThree },
    ];
  
    // Define sections data
    const modalSections = [
      {
        title: "Basic Information",
        inputs: [
          { id: "stationName", label: "Station Name", placeholder: "Input field" },
          { id: "addressLocation", label: "Address/Location", placeholder: "Input field" },
        ],
        dropdowns: [
          { label: "Capacity(Tons)", options: status, buttonLabel: "Input Field",},
          { label: "Status", options: status, buttonLabel: "Active/Inactive",},
        ],
      },
      {
        title: "Linking",
        inputs: [],
        dropdowns: [
          { label: "State", options: status, buttonLabel: "Select State",},
          { label: "Area", options: status, buttonLabel: "Select Area",},
        ],
      },
      {
        title: "Other Details (Optional)",
        inputs: [
          { id: "contactName", label: "Contact Name", placeholder: "Input field" },
        ],
        dropdowns: [
          { id: "email", label: "Email", buttonLabel: "Input field", options: status, },
          { id: "phoneNumber", label: "Phone Number", buttonLabel: "Active/Inactive", options: status, },
        ],
      },
    ];
  
    return (
      <ModalWrapper title="Billing & Payment" closeModal={closeModal} buttons={buttons}>
        {modalSections.map((section, index) => (
          <ModalSection key={index} title={section.title}>
            {/* Render inputs */}
            {section.inputs.map((input, idx) => (
              <InputBtn key={idx} id={input.id} label={input.label} placeholder={input.placeholder} />
            ))}
  
            {/* Render dropdowns */}
            <div className="w-full justify-between flex  flex-wrap">
              {section.dropdowns.map((dropdown, idx) => (
                <div key={idx} className="flex w-[47%]">
                  <CustomDropDown
                    options={dropdown.options}
                    buttonLabel={dropdown.buttonLabel}
                    label={dropdown.label}
                    labelFor={dropdown.labelFor}
                  />
                </div>
              ))}
            </div>
          </ModalSection>
        ))}
      </ModalWrapper>
    );
  }
  