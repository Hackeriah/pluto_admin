import { useState } from "react"; // Import useState for managing modal state
import { IoCloseSharp } from "react-icons/io5";
import CustomDropDown from "../../customDropDown";
import ActivityLog from "@/app/components/Modals/modalComponents/activityLog";
import { requestlogs } from "@/app/components/Modals/modalComponents/logData";
import ButtonPanel from "../modalComponents/buttonPannel";
import PopUp from "../popUp";

const logdata = requestlogs;

const RequestOverviewModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  rowData,
}) => {
  // State to handle the visibility of the PopUpModal
  const [isPopUpOpen, setPopUpOpen] = useState(false);

  // Check if modal is open and rowData is available before rendering
  if (!isOpen || !rowData) return null;

  const chooseOptionOne = () => {
    console.log("Choosen option one");
  };
  const chooseOptionTwo = () => {
    console.log("Choosen option Two");
  };
  const chooseOptionThree = () => {
    console.log("Choosen option Three");
  };

  const driverDropdown = [
    { label: "option 1", action: chooseOptionOne() },
    { label: "option 2", action: chooseOptionTwo() },
    { label: "option 3", action: chooseOptionThree() },
  ];
  const vehicleDropdown = [
    { label: "option 1", action: chooseOptionOne() },
    { label: "option 2", action: chooseOptionTwo() },
    { label: "option 3", action: chooseOptionThree() },
  ];

  const handleCancelBtn = () => {
    // Open the PopUpModal when the cancel button is clicked
    setPopUpOpen(true);
  };

  const handleSaveBtn = () => {
    console.log("Save button clicked");
  };

  const handlePopUpClose = () => {
    setPopUpOpen(false); // Close the PopUpModal
  };

  const handleConfirm = () => {
    console.log("Confirmed action");
    setPopUpOpen(false); // Close the PopUpModal on confirmation
  };

  const buttons = [
    {
      text: "Cancel",
      bgColor: "#D72323",
      textColor: "white",
      onClick: handleCancelBtn, // Trigger modal when cancel is clicked
    },
    {
      text: "Save",
      bgColor: "#319D38",
      textColor: "white",
      onClick: handleSaveBtn,
    },
  ];

  return (
    <div className="fixed top-0 right-0 bg-white z-10 w-[30vw] h-[100vh] flex flex-col py-2 border shadow-lg shadow-gray-500/50">
      {/* Header section */}
      <div className="flex text-gray-600 justify-between items-center py-2 border-b-2 px-10">
        <div className="flex gap-2 items-center">
          <h2 className="text-[1.4vw] font-bold">Request ID: </h2>
          <p className="text-black font-semibold">{rowData.requestId}</p>
        </div>

        <button onClick={onClose}>
          <IoCloseSharp className="text-4xl" />
        </button>
      </div>

      {/* Scrollable content section */}
      <div className="flex-1 overflow-y-auto">
        <div className="border-b-2 gap-4 text-gray-600 flex flex-col px-4 py-2">
          <h3>CUSTOMER INFORMATION:</h3>
          <div className="flex gap-[1vw]">
            <p>Name: </p>
            <p className="text-black">{rowData.customerInfo.name}</p>
          </div>
          <div className="flex gap-2">
            <p>Address:</p>
            <p className="text-black">{rowData.customerInfo.address}</p>
          </div>
          <div className="flex gap-2">
            <p>PhoneNo:</p>
            <p className="text-black">{rowData.customerInfo.phoneNo}</p>
          </div>
          <div className="flex gap-2">
            <p>Email:</p>
            <p className="text-black">{rowData.customerInfo.email}</p>
          </div>
        </div>

        <div className="gap-4 text-gray-600 flex flex-col px-4 py-2 border-b-2">
          <h3>Order Information</h3>
          <div className="flex gap-2">
            <p>Event Type:</p>
            <p className="text-black">{rowData.orderInfo.eventType}</p>
          </div>
          <div className="flex gap-2">
            <p>Waste Type:</p>
            <p className="text-black">{rowData.orderInfo.wasteType}</p>
          </div>
          <div className="flex gap-2">
            <p>Requested Pickup:</p>
            <p className="text-black">{rowData.orderInfo.requestedPickup}</p>
          </div>
          <div className="gap-4 flex flex-col">
            <p>Description:</p>
            <p className="text-black border rounded-lg p-4">
              {rowData.orderInfo.description}
            </p>
          </div>
          <div className="flex gap-2">
            <p>Status:</p>
            <p className="text-red-600 bg-red-50 rounded-xl px-2">
              {rowData.orderInfo.status}
            </p>
          </div>
          <div className="flex gap-2">
            <p>Priority:</p>
            <p className="text-black">{rowData.orderInfo.priority}</p>
          </div>
          <div className="flex gap-2">
            <p>Last Update:</p>
            <p className="text-black">
              {rowData.orderInfo.lastUpdate.message} (
              {rowData.orderInfo.lastUpdate.time})
            </p>
          </div>
        </div>

        <div className="gap-4 text-gray-600 flex flex-col px-4 py-2 border-b-2">
          <p>Actions</p>
          <div className="flex gap-[1.2vw]">
            <div className="flex flex-col w-1/2 gap-2">
              <p>Assign Driver</p>
              <CustomDropDown options={driverDropdown} buttonLabel="Sam" />
            </div>
            <div className="flex flex-col w-1/2 gap-2">
              <p>Reschedule</p>
              <CustomDropDown
                options={vehicleDropdown}
                buttonLabel="Date & Time Modal"
              />
            </div>
          </div>
        </div>

        <ActivityLog logs={logdata} />
      </div>

      {/* Footer / Button section */}
      <ButtonPanel buttons={buttons} />

      {/* PopUp Modal */}
      {isPopUpOpen && (
        <PopUp
          title="Cancel Request"
          message="You are about to cancel order, do you want to continue?"
          showCheckboxes={true}
          onCancel={handlePopUpClose}
          onConfirm={handleConfirm}
          onClose={handlePopUpClose}
          cancelText="Cancel"
          confirmText="Ok"
        />
      )}
    </div>
  );
};

export default RequestOverviewModal;
