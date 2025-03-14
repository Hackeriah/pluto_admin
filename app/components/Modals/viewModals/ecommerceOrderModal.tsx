"use client";
import { IoCloseSharp } from "react-icons/io5";
import Image from "next/image";
import { useState } from "react";
import ButtonPanel from "../modalComponents/buttonPannel";

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

const EcommerceOrdersModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  rowData,
}) => {
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
    <div className="fixed top-0 right-0 bg-white z-10 w-[30vw] h-[100vh] flex flex-col py-2 border shadow-lg shadow-gray-500/50">
      <div className="flex text-gray-600 justify-between items-center py-2 border-b-2 px-10">
        <div className="flex gap-2">
          <p className="text-[1.4vw] font-bold">Order ID: </p>
          <p className="text-[1.4vw] font-bold text-cDarkGreen">
            {rowData.productInfo.orderId}
          </p>
        </div>
        <button onClick={onClose}>
          <IoCloseSharp className="text-4xl" />
        </button>
      </div>

      <div className="overflow-y-scroll">
        <div className="flex text-gray-600 items-center gap-[1.4vw] justify-between py-4 px-10">
          {rowData.images.map((image, index) => (
            <div
              key={index}
              className={`h-auto flex items-center justify-center ${
                index === 0 ? "flex-[2]" : "flex-[1]"
              }`}
            >
              <Image
                src={image}
                width={index === 0 ? 60 : 30} // Double width for the first image
                height={index === 0 ? 60 : 30} // Double height for the first image
                layout="responsive"
                alt="Product Image"
              />
            </div>
          ))}
        </div>

        <div className="gap-2 text-gray-600 flex flex-col border-b-2 px-10 py-2">
          <p>Product Information</p>
          <div className="flex gap-2">
            <p>Name: </p>
            <p className="text-black">{rowData.productInfo.name}</p>
          </div>
          <div className="gap-2 flex flex-col">
            <div className="flex gap-2">
              <p>Phone No:</p>
              <p className="text-black">{rowData.productInfo.phoneNo}</p>
            </div>
            <div className="flex gap-2">
              <p>Email:</p>
              <p className="text-black">{rowData.productInfo.email}</p>
            </div>
          </div>
        </div>

        <div className="gap-2 text-gray-600 flex flex-col border-b-2 px-10 py-2">
          <p>Order Details</p>
          <div className="flex gap-2">
            <p>Product: </p>
            <p className="text-black">{rowData.orderDetails.product}</p>
          </div>
          <div className="flex gap-2">
            <p>Quantity: </p>
            <p className="text-black">{rowData.orderDetails.quantity}</p>
          </div>
          <div className="flex gap-2">
            <p>Unit Price(₦): </p>
            <p className="text-black">{rowData.orderDetails.unitPrice}</p>
          </div>
          <div className="flex gap-2">
            <p>Additional Costs(₦): </p>
            <p className="text-black">{rowData.orderDetails.additionalCosts}</p>
          </div>
          <div className="flex gap-2 text-[1.4vw]">
            <p>Total Price(₦): </p>
            <p className="text-cDarkGreen">{rowData.orderDetails.totalPrice}</p>
          </div>
        </div>

        <div className="gap-2 text-gray-600 flex flex-col border-b-2 px-10 py-2">
          <p>Payment Details</p>
          <div className="flex gap-2">
            <p>Payment Status: </p>
            <p className="text-black">{rowData.paymentDetails.paymentStatus}</p>
          </div>
          <div className="flex gap-2">
            <p>Payment Method: </p>
            <p className="text-black">{rowData.paymentDetails.paymentMethod}</p>
          </div>
          <div className="flex gap-2">
            <p>Transaction ID: </p>
            <p className="text-black">{rowData.paymentDetails.transactionId}</p>
          </div>
          <div className="flex gap-2 text-[1.4vw]">
            <p>Total Price(₦): </p>
            <p className="text-cDarkGreen">
              {rowData.paymentDetails.totalPrice}
            </p>
          </div>
        </div>

        <div className="gap-2 text-gray-600 flex flex-col border-b-2 px-10 py-2 pb-[14vh]">
          <p>Pickup Details</p>
          <div className="flex gap-2">
            <p>Pickup Center: </p>
            <p className="text-black">{rowData.pickupDetails.pickupCenter}</p>
          </div>
          <div className="flex gap-2">
            <p>Pickup Date: </p>
            <p className="text-black">{rowData.pickupDetails.pickupDate}</p>
          </div>
        </div>
      </div>

      <ButtonPanel buttons={buttons} />
    </div>
  );
};

export default EcommerceOrdersModal;
