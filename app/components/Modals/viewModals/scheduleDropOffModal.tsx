"use client";
import ButtonPanel from "../modalComponents/buttonPannel";
import { IoCloseSharp } from "react-icons/io5";
import { useState} from "react";
import { requestlogs } from "@/app/components/Modals/modalComponents/logData";


const ScheduleDropOffModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  rowData,
}) => {
  const [isLogOpen, setIsLogOpen] = useState(true);
  const toggleLog = () => {
    setIsLogOpen(!isLogOpen);
  };

  // const [isOpen, setIsOpen] = useState(true);

  // const closeModal = () => {
  //   setIsOpen(false);
  // };

  if (!isOpen || !rowData) {
    return null;
  }

  const handleCancelBtn = () => {
    console.log("Close button clicked");
  };

  const handleSaveBtn = () => {
    console.log("Edit button clicked");
  };

  const buttons = [
    {
      text: "Close",
      bgColor: "#FBC756",
      textColor: "Black",
      onClick: handleCancelBtn,
    },
    {
      text: "Edit",
      bgColor: "#319D38",
      textColor: "white",
      onClick: handleSaveBtn,
    },
  ];

  return (
    <div className="fixed top-0 right-0 bg-white z-10 w-[30vw] h-[100vh] flex flex-col py-2 justify-between border">
      <div className="">
        <div className="flex text-gray-600 justify-between items-center py-2 border-b-2 px-10">
          <div className="flex gap-2">
            <p className="text-[1.4vw] font-bold">LEKKI PHASE 1 </p>
          </div>

          <button onClick={onClose}>
            <IoCloseSharp className="text-4xl" />
          </button>
        </div>

        <div className="overflow-y-scroll">
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-4 border-b-2 text-gray-600  px-4 py-2 ">
              <p>DROPOFF STATION INFORMATION:</p>
              <div className="flex gap-[1vw]">
                <p>Station Name: </p>
                <p className="text-black">{rowData.stationId}</p>
              </div>

              <div className="gap-4 flex flex-col">
                <div className="flex gap-2">
                  <p>Address:</p>
                  <p className="text-black ">{rowData.address}</p>
                </div>
                <div className="flex gap-2">
                  <p>Capacity(Tons):</p>
                  <p className="text-black ">{rowData.capacity}</p>
                </div>
                <div className="flex items-center gap-2">
                  <p>Status:</p>
                  {rowData.status === "active" ? (
                    <p className=" text-[#1A73E8] bg-[#EAF4FF] rounded-xl text-[0.9vw] py-1 px-2">
                      {rowData.status}
                    </p>
                  ) : (
                    <p className="text-[#D91A1A] bg-[#FFF3F2] rounded-xl text-[0.9vw] py-1 px-2">
                      {rowData.status}
                    </p>
                  )}
                </div>

                <div className="flex gap-2">
                  <p>State:</p>
                  <p className="text-black ">{rowData.state}</p>
                </div>
                <div className="flex gap-2">
                  <p>Area:</p>
                  <p className="text-black ">{rowData.area}</p>
                </div>
                <div className="flex text-nowrap gap-2">
                  <p>Contact Info:</p>
                  <p className="text-black ">
                    {rowData.name} <br />
                    <span>{rowData.email}</span>
                    <br />
                    {rowData.phoneNo}
                  </p>
                </div>

                <div className="flex gap-2">
                  <p>Last Update:</p>
                  <p className="text-black ">{rowData.lastUpdate}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ButtonPanel buttons={buttons} />
    </div>
  );
};

export default ScheduleDropOffModal;
