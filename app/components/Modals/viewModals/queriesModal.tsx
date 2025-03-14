"use client";
import { IoCloseSharp } from "react-icons/io5";
import ActivityLog from "../modalComponents/activityLog";
import { logs } from "@/app/components/Modals/modalComponents/logData";
import ButtonPanel from "../modalComponents/buttonPannel";
const logdata = logs;

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  rowData: {
    id: number;
    productInfo: {
      name: string;
      orderId: string;
      phoneNo: string;
      email: string;
    };
    orderDetails: {
      product: string;
      quantity: number;
      unitPrice: number;
      additionalCosts: number;
      totalPrice: number;
    };
    paymentDetails: {
      paymentStatus: string;
      paymentMethod: string;
      transactionId: string;
      totalPrice: number;
    };
    pickupDetails: {
      pickupCenter: string;
      pickupDate: string;
    };
    images: string[];
    actions: {
      label: string;
      color: string;
      actionType: string;
    }[];
  };
}
const QueriesModal: React.FC<ModalProps> = ({ isOpen, onClose, rowData }) => {
  if (!isOpen || !rowData) {
    return null;
  }

  const handleReject = () => {
    console.log("Reject button clicked");
  };

  const handleApprove = () => {
    console.log("Approve details button clicked");
  };

  const buttons = [
    {
      text: "Reject",
      //   bgColor: "#D72323", // red
      bgColor: "#FBC756", // yellow
      textColor: "black",
      onClick: handleReject,
    },
    {
      text: "Approve",
      bgColor: "#319D38", // green
      textColor: "white",
      onClick: handleApprove,
    },
  ];

  return (
    <div className="fixed top-0 right-0 justify-between bg-white z-10 w-[30vw] h-[100vh] flex flex-col py-2 border shadow-lg shadow-gray-500/50">
      <div className="flex flex-col ">
        <div className="flex text-gray-600 justify-between items-center py-2 border-b-2 px-10">
          <div className="flex gap-2">
            <p className="text-[1.4vw] font-bold">Restock Request: </p>
            <p className="text-[1.4vw] font-bold text-cDarkGreen">S12345</p>
          </div>

          <button onClick={onClose}>
            <IoCloseSharp className="text-4xl" />
          </button>
        </div>

        <div className="overflow-y-scroll">
          <div className="gap-2 text-gray-600 flex flex-col border-b-2 px-10 py-2">
            <p>CUSTOMER INFORMATION:</p>
            <div className="flex gap-[1vw]">
              <p>Query ID: </p>
              <p className="text-black">QRY001</p>
            </div>

            <div className="gap-[1vw] flex flex-col">
              <div className="flex gap-2">
                <p>Client Name:</p>
                <p className="text-black ">Oladele Johnson</p>
              </div>
              <div className="flex gap-2">
                <p>Client PhoneNo:</p>
                <p className="text-black ">+234 806 123 4567</p>
              </div>
              <div className="flex gap-2">
                <p>Client Email:</p>
                <p className="text-black ">oladele.johnson@gmail.com</p>
              </div>

              <div className="flex gap-2">
                <p>Client Type</p>
                <p className="text-black ">Individual</p>
              </div>

              <div className="flex gap-2">
                <p>Query Type</p>
                <p className="text-black ">Billing</p>
              </div>

              <div className="flex items-center gap-2">
                <p>Status:</p>
                <p className="text-red-700 bg-red-100 px-2 pt-[0.2vw] text-[0.9vw] rounded-full">
                  Open
                </p>
              </div>
              <div className="flex gap-2">
                <p>Date Submitted:</p>
                <p className="text-black ">22/11/2024</p>
              </div>
              <div className="flex gap-2">
                <p>Last Updated:</p>
                <p className="text-black ">21/11/2024</p>
              </div>
            </div>
          </div>

          <div className="gap-2 text-gray-600 flex flex-col border-b-2 px-10 py-2">
            <p>Query Description</p>
            <div className="p-4 items-center border rounded-xl">
              <p>
                I have been charged twice for my last payment. Please assist in
                rectifying this.
              </p>
            </div>
          </div>

          <ActivityLog logs={logdata} />
        </div>
      </div>
        <ButtonPanel buttons={buttons} />
    </div>
  );
};
export default QueriesModal;
