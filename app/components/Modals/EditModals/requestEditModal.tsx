import React, { useState, useEffect } from "react";
import ModalSection from "./modalSection";
import ModalWrapper from "./modalWrapper";
import PhoneNumberInput from "@/app/utils/phoneNumberInput";
import InputBtn from "../../inputBtn";
import TextArea from "../../textArea";
import CustomDropDown from "../../customDropDown";
import CustomDropdown2 from "@/app/utils/customDropDown2";
import { stateAreaZoneData } from "@/app/api/dropDownData";
import PaymentForm from "../../payment";

// Reusable Dropdown Component
const DropdownGroup = ({ dropdowns, className }) => (
  <div className="w-full flex flex-wrap justify-between">
    {dropdowns.map((dropdown, idx) => (
      <div key={idx} className={`flex ${className} text-[0.8vw]`}>
        <CustomDropDown options={dropdown.options || []} buttonLabel={dropdown.buttonLabel} label={dropdown.label} />
      </div>
    ))}
  </div>
);

// Initial Data Setup
const initialDropdownData = {
  unitStatus: [
    { label: "option 1", action: () => console.log("option one") },
    { label: "option 2", action: () => console.log("option two") },
    { label: "option 3", action: () => console.log("option three") },
  ],
  inputs: [
    { id: "quantity", label: "Quantity", placeholder: "Number Spinner: e.g., 3" },
  ],
  unitDropdown: [{ label: "Unit", buttonLabel: "Bags, Bins, Tons, etc." }],
  wasteTypeDropdown: [{ label: "Waste Type", buttonLabel: "Hazardous, Recyclable, etc." }],
  schedulingDropdowns: [
    { label: "PickUp Date", buttonLabel: "Calendar Picker" },
    { label: "Prefered Time", buttonLabel: "Morning, Afternoon, Ev.." },
  ],
  dispatchDropdowns: [
    { label: "Assign Driver", buttonLabel: "Alex Lazarus" },
    { label: "Vehicle Type", buttonLabel: "Multi-Select: PPE, Co...." },
    { label: "Equipment Needed", buttonLabel: "Alex Lazarus" },
    { label: "Estimated Travel Time", buttonLabel: "Auto-calculate..." },
  ],
  paymentDropdowns: [
    { label: "Payment Method", buttonLabel: "Cash, Card, Mobile Payment, etc." },
    { label: "Estimated cost", buttonLabel: "Auto-calculated or manual entry" },
  ]
};

export default function RequestEditModal({ isOpen, closeModal }) {
  const [phone, setPhone] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedZone, setSelectedZone] = useState("");
  const [selectedLandmark, setSelectedLandmark] = useState("");
  const [availableAreas, setAvailableAreas] = useState([]);
  const [availableZones, setAvailableZones] = useState([]);
  const [availableLandmarks, setAvailableLandmarks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); 
  const totalPages = 3;

  // Dropdown Change Handler to Update State/Area/Zone/Landmark
  const handleDropdownChange = (value, level) => {
    if (level === "state") {
      setSelectedState(value);
      setSelectedArea("");
      setSelectedZone("");
      setSelectedLandmark("");
    } else if (level === "area") {
      setSelectedArea(value);
      setSelectedZone("");
      setSelectedLandmark("");
    } else if (level === "zone") {
      setSelectedZone(value);
      setSelectedLandmark("");
    } else if (level === "landmark") {
      setSelectedLandmark(value);
    }
  };

  

  // Update Dropdown Options Dynamically
  useEffect(() => {
    if (selectedState) {
      setAvailableAreas(Object.keys(stateAreaZoneData[selectedState]?.areas || {}));
    }
  }, [selectedState]);

  useEffect(() => {
    if (selectedArea) {
      setAvailableZones(Object.keys(stateAreaZoneData[selectedState]?.areas[selectedArea]?.zones || {}));
    }
  }, [selectedArea]);

  useEffect(() => {
    if (selectedZone) {
      setAvailableLandmarks(stateAreaZoneData[selectedState]?.areas[selectedArea]?.zones[selectedZone] || []);
    }
  }, [selectedZone]);

  const handleSaveBtn = () => {
    const formData = { phone, state: selectedState, area: selectedArea, zone: selectedZone, landmark: selectedLandmark };
    console.log("Form data to be saved:", formData);
  };

  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  if (!isOpen) return null;

  const getButtons = () => {
    const buttons = [{ text: "Back", bgColor: "#FBC756", textColor: "Black", onClick: prevPage }];
    if (currentPage === 1) {
      return [{ text: "Next", bgColor: "#319D38", textColor: "white", onClick: nextPage }];
    } else if (currentPage === 2) {
      buttons.push({ text: "Next", bgColor: "#319D38", textColor: "white", onClick: nextPage });
    } else if (currentPage === 3) {
      buttons.push({ text: "Submit", bgColor: "#319D38", textColor: "white", onClick: handleSaveBtn });
    }
    return buttons;
  };

  return (
    <ModalWrapper title="Create New Request" closeModal={closeModal} buttons={getButtons()} currentPage={currentPage} totalPages={totalPages}>
      {currentPage === 1 && (
        <>
          <ModalSection title="Customer Information:">
            <InputBtn id="name" label="Name" className="w-[65%]" placeholder="Type in customer's name" />
            <PhoneNumberInput id="phone" label="Phone No." className="w-[65%]" value={phone} setValue={setPhone} />
            <InputBtn id="email" label="Email" className="w-[65%]" placeholder="Email Address" />
            <InputBtn id="address" label="Address" className="w-[65%]" placeholder="Address (Google search result)" />
            <TextArea id="note" label="Special Note" className="w-full" placeholder="Type in any additional information" />
          </ModalSection>

          <ModalSection title="Pickup Location:">
            {["State", "Area", "Zone", "Landmark"].map((level, idx) => (
              <CustomDropdown2
                key={level}
                className="w-fit"
                selectedOption={
                  level === "State"
                    ? selectedState
                    : level === "Area"
                    ? selectedArea
                    : level === "Zone"
                    ? selectedZone
                    : selectedLandmark
                }
                setSelectedOption={(value) => handleDropdownChange(value, level.toLowerCase())}
                options={
                  level === "State"
                    ? Object.keys(stateAreaZoneData || {})
                    : level === "Area"
                    ? availableAreas || []
                    : level === "Zone"
                    ? availableZones || []
                    : availableLandmarks || []
                }
                placeholder={`Select ${level}`}
                disabled={level !== "State" && !selectedState && !(level === "Area" && selectedArea)}
              />
            ))}
          </ModalSection>
        </>
      )}

      {currentPage === 2 && (
        <>
          <ModalSection title="Waste Information">
            <DropdownGroup dropdowns={initialDropdownData.wasteTypeDropdown} className="w-[70%]" />
            <InputBtn className="w-[70%]" id={initialDropdownData.inputs[0].id} label={initialDropdownData.inputs[0].label} placeholder={initialDropdownData.inputs[0].placeholder} />
            <DropdownGroup dropdowns={initialDropdownData.unitDropdown} className="w-[50%]" />
            <TextArea id="specialNote" label="Special Note" placeholder="" />
          </ModalSection>

          <ModalSection title="Scheduling">
            <DropdownGroup dropdowns={initialDropdownData.schedulingDropdowns} className="w-[48%]" />
          </ModalSection>

          <ModalSection title="Dispatch Information">
            <DropdownGroup dropdowns={initialDropdownData.dispatchDropdowns} className="w-[48%]" />
          </ModalSection>
        </>
      )}

      {currentPage === 3 && (
        <>
          <ModalSection title="Payment">
            <DropdownGroup dropdowns={initialDropdownData.paymentDropdowns} className="w-[48%]" />
          </ModalSection>

          <PaymentForm />
        </>
      )}
    </ModalWrapper>
  );
}
