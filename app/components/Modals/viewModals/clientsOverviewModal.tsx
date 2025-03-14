import { IoCloseSharp } from "react-icons/io5";
import ButtonPanel from "../modalComponents/buttonPannel";
const img = "/images/staff1.png";
import Image from "next/image";
import ActivityLog from "@/app/components/Modals/modalComponents/activityLog";
import { clientOverviewlogs } from "@/app/components/Modals/modalComponents/logData";
import { useState } from "react";
const log = clientOverviewlogs;

const ClientsOverviewModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  rowData,
}) => {
  // State to track encryption status
  const [isEncrypted, setIsEncrypted] = useState(true);

  const encryptText = (text: string) => "*".repeat(text.length);
  const toggleEncryption = () => setIsEncrypted(!isEncrypted);

  const deactivateBtn = () => {
    console.log("Deactivate button clicked");
  };

  const decryptDetailsBtn = () => {
    console.log("Decrypt details button clicked");
    toggleEncryption();
  };

  const buttons = [
    {
      text: "Deactivate",
      bgColor: "#D72323", // red
      textColor: "white",
      onClick: deactivateBtn,
    },
    {
      text: isEncrypted ? "Decrypt Details" : "Encrypt Details",
      bgColor: "#319D38", // green
      textColor: "white",
      onClick: decryptDetailsBtn,
    },
  ];

  if (!isOpen || !rowData) {
    return null;
  }

  return (
    <div className="fixed top-0 right-0 bg-white z-10 w-[30vw] h-[100vh] flex flex-col py-2 border shadow-lg shadow-gray-500/50">
      <div className="flex text-gray-600 justify-between items-center py-2 border-b-2 px-6">
        <div className="flex gap-2">
          <p className="text-[1.2vw] font-bold">Client Information:</p>
          <p className="text-[1.2vw] font-bold text-cDarkGreen">
            {isEncrypted
              ? encryptText(rowData.personalInfo.name)
              : rowData.personalInfo.name}
          </p>
        </div>
        <button onClick={onClose}>
          <IoCloseSharp className="text-4xl" />
        </button>
      </div>

      <div className="overflow-y-scroll">
        <div className="flex text-gray-600 border-b-2 items-center justify-between py-2 px-6">
          <div className="gap-2 flex flex-col">
            <p>Personal/Organization Info</p>

            <p className="flex gap-2 items-center">
              Client Type:
              <span className="text-black">
                {isEncrypted
                  ? encryptText(rowData.personalInfo.clientType)
                  : rowData.personalInfo.clientType}
              </span>
            </p>

            <div className="flex gap-2 items-center">
              <p>Name: </p>
              <p className="text-black">
                {isEncrypted
                  ? encryptText(rowData.personalInfo.name)
                  : rowData.personalInfo.name}
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <p>Email: </p>
              <p className="text-black">
                {isEncrypted
                  ? encryptText(rowData.personalInfo.email)
                  : rowData.personalInfo.email}
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <p>Phone No: </p>
              <p className="text-black">
                {isEncrypted
                  ? encryptText(rowData.personalInfo.phoneNumber)
                  : rowData.personalInfo.phoneNumber}
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <p>Address: </p>
              <p className="text-black">
                {isEncrypted
                  ? encryptText(rowData.personalInfo.address)
                  : rowData.personalInfo.address}
              </p>
            </div>
          </div>
          <div className="w-[10vw] h-[10vh] bg-red-100 flex items-center justify-center">
            <Image
              src={img}
              width={30}
              height={30}
              layout="responsive"
              alt="Client Image"
            />
          </div>
        </div>

        <div className="gap-2 text-gray-600 flex flex-col border-b-2 px-6 py-2">
          <p>Location Information</p>
          <div className="flex gap-2">
            <p>Number of Locations Added: </p>
            <p>{rowData.locationInformation.numberOfLocationsAdded}</p>
          </div>

          <div className="gap-2 flex flex-col">
            {rowData.locationInformation.locations.map((location, index) => (
              <div key={index} className="flex gap-4 items-center">
                <p>{index + 1}.</p>
                <p className="text-black">
                  {isEncrypted ? encryptText(location) : location}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="gap-2 text-gray-600 flex flex-col border-b-2 px-6 py-2">
          <p>Subscription and Billing</p>
          <div className="flex gap-2 items-center">
            <p>Service type: </p>
            <p className="text-black">
              {isEncrypted
                ? encryptText(rowData.subscriptionAndBillingInformation.serviceType)
                : rowData.subscriptionAndBillingInformation.serviceType}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <p>Active Locations: </p>
            <p className="text-black">
              {rowData.subscriptionAndBillingInformation.activeLocations}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <p>Billing Method: </p>
            <p className="text-black">
              {isEncrypted
                ? encryptText(rowData.subscriptionAndBillingInformation.billingMethod)
                : rowData.subscriptionAndBillingInformation.billingMethod}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <p>Payment Status: </p>
            <p
              className={
                rowData.subscriptionAndBillingInformation.paymentStatus ===
                "Paid"
                  ? "bg-green-100 rounded-2xl text-[1vw] px-[0.6vw]"
                  : "bg-red-100 rounded-2xl text-[1vw] px-[0.6vw]"
              }
            >
              {isEncrypted
                ? encryptText(rowData.subscriptionAndBillingInformation.paymentStatus)
                : rowData.subscriptionAndBillingInformation.paymentStatus}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <p>Last Payment: </p>
            <p className="text-black">
              {isEncrypted
                ? encryptText(rowData.subscriptionAndBillingInformation.lastPaymentDetails)
                : rowData.subscriptionAndBillingInformation.lastPaymentDetails}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <p>Next Due Date: </p>
            <p className="text-black  ">
              {isEncrypted
                ? encryptText(rowData.subscriptionAndBillingInformation.nextDueDate)
                : rowData.subscriptionAndBillingInformation.nextDueDate}
            </p>
          </div>
        </div>

        <ActivityLog logs={log} />

      </div>
        <ButtonPanel buttons={buttons} />
    </div>
  );
};
export default ClientsOverviewModal;
