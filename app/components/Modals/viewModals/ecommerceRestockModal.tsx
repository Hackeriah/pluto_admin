import { IoCloseSharp } from "react-icons/io5";
import CustomDropDown from "../../customDropDown";
import ButtonPanel from "@/app/components/Modals/modalComponents/buttonPannel";

const EcommerceRestockModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  rowData,
}) => {
  // Handle button actions
  const handleRejectBtn = () => {
    console.log("Reject button clicked");
  };

  const handleApproveBtn = () => {
    console.log("Approve button clicked");
  };

  const buttons = [
    {
      text: "Approve",
      bgColor: "#FBC756",
      textColor: "black",
      onClick: handleApproveBtn,
    },
    {
      text: "Reject",
      bgColor: "#2C6E49",
      textColor: "white",
      onClick: handleRejectBtn,
    },
  ];

  // Dropdown options
  const driverDropdown = [
    { label: "Edit", action: () => console.log("Edit") },
    { label: "Delete", action: () => console.log("Delete") },
    { label: "View", action: () => console.log("View") },
  ];
  const vehicleDropdown = driverDropdown;
  const dispatchDropdown = driverDropdown;
  const estimatedDropdown = driverDropdown;

  if (!isOpen || !rowData) {
    return null;
  }

  return (
    <div className="fixed top-0 right-0 bg-white z-10 w-[30vw] h-[100vh] flex flex-col py-2 border shadow-lg shadow-gray-500/50">
      <div className="flex text-gray-600 justify-between items-center py-2 border-b-2 px-10">
        <div className="flex gap-2">
          <p className="text-[1.4vw] font-bold">Restock Request: </p>
          <p className="text-[1.4vw] font-bold text-cDarkGreen">
            {rowData.restockRequestId}
          </p>
        </div>

        <button onClick={onClose}>
          <IoCloseSharp className="text-4xl" />
        </button>
      </div>

      <div className="overflow-y-scroll">
        {/* Request Details */}
        <div className="gap-2 text-gray-600 flex flex-col border-b-2 px-10 py-2">
          <p>Request Details</p>
          <div className="flex gap-[1vw]">
            <p>Request ID: </p>
            <p className="text-black">{rowData.restockRequestId}</p>
          </div>

          <div className="gap-[1vw] flex flex-col">
            <div className="flex gap-2">
              <p>Product Name:</p>
              <p className="text-black">{rowData.requestDetails.productName}</p>
            </div>
            <div className="flex gap-2">
              <p>Requested Quantity:</p>
              <p className="text-black">{rowData.requestDetails.requestedQuantity}</p>
            </div>
            <div className="flex gap-2">
              <p>LGA Office:</p>
              <p className="text-black">{rowData.requestDetails.lgaOffice}</p>
            </div>
            <div className="flex gap-2">
              <p>Requested By:</p>
              <p className="text-black">{rowData.requestDetails.requestedBy}</p>
            </div>
            <div className="flex gap-2">
              <p>Requested Date:</p>
              <p className="text-black">{rowData.requestDetails.requestedDate}</p>
            </div>
          </div>
        </div>

        {/* Stock Availability */}
        <div className="gap-2 text-gray-600 flex flex-col border-b-2 px-10 py-2">
          <p>STOCK AVAILABILITY</p>
          <div className="flex gap-2 items-center">
            <p>Current Stock: </p>
            <p className="text-black pt-1">{rowData.stockAvailability.currentStock}</p>
          </div>
        </div>

        {/* Approval Section */}
        <div className="gap-2 text-gray-600 flex flex-col border-b-2 px-10 pb-[10vh] py-2">
          <p>APPROVAL SECTION</p>

          <div className="flex flex-col w-1/2 gap-2">
            <p>Approve Quantity</p>
            <input
              className="border p-2 pl-4 rounded-lg"
              type="text"
              placeholder={rowData.approvalSection.approvedQuantity}
            />
          </div>

          <div className="flex flex-col gap-2">
            <p>Approval Notes</p>
            <input
              className="border p-2 pl-4 rounded-md"
              type="text"
              placeholder={rowData.approvalSection.approvalNotes}
            />
          </div>
        </div>

        {/* Driver, Vehicle & Shipping Assignment */}
        <div className="gap-2 text-gray-600 flex flex-col border-b-2 px-10 pb-[10vh] p-4">
          <p>DRIVER, VEHICLE & SHIPPING ASSIGNMENT</p>

          <div className="flex gap-[1.2vw]">
            <div className="flex flex-col w-1/2 gap-2">
              <p>Select Driver</p>
              <CustomDropDown options={driverDropdown} buttonLabel={rowData.driverVehicleShippingAssignment.driver} />
            </div>

            <div className="flex flex-col w-1/2 text-[1.2vw] gap-2">
              <p>Vehicle Assigned</p>
              <CustomDropDown options={vehicleDropdown} buttonLabel={rowData.driverVehicleShippingAssignment.vehicleAssigned} />
            </div>
          </div>

          <div className="flex gap-[1.2vw]">
            <div className="flex flex-col w-1/2 gap-2">
              <p>Dispatch Date</p>
              <CustomDropDown options={dispatchDropdown} buttonLabel={rowData.driverVehicleShippingAssignment.dispatchDate} />
            </div>

            <div className="flex flex-col w-1/2 gap-2">
              <p>Estimated Arrival</p>
              <CustomDropDown options={estimatedDropdown} buttonLabel={rowData.driverVehicleShippingAssignment.estimatedArrival} />
            </div>
          </div>
        </div>
      </div>

      {/* Button Panel */}
      <ButtonPanel buttons={buttons} />
    </div>
  );
};

export default EcommerceRestockModal;
