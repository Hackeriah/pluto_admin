// components/Modal.js
import { IoCloseSharp } from "react-icons/io5";
import ActivityLog from "../modalComponents/activityLog";
import { ItSupporLogs } from "../modalComponents/logData";
import ButtonPanel from "../modalComponents/buttonPannel";
export default function ITSupportModal({ isOpen, onClose, ticket }) {
  if (!isOpen) return null; // If modal is not open, don't render anything


  const deleteBtn = () => {
    console.log("Delete button clicked");
  };

  const updateStatusBtn = () => {
    console.log("updateStatus button clicked");
    
  };

  const buttons = [
    {
      text: "Delete",
      bgColor: "#D72323", // red
      textColor: "white",
      onClick: deleteBtn,
    },
    {
      text: "Update Status",
      bgColor: "#319D38", // green
      textColor: "white",
      onClick: updateStatusBtn,
    },
  ];

  return (
    <div className="fixed text-gray-600  top-0 right-0 bg-white z-10 w-[30vw] h-[100vh] flex flex-col py-2 border shadow-lg shadow-gray-500/50">
      <div className="flex  justify-between items-center py-2 border-b-2 px-6">
        <p className="text-[1.4vw] text-black flex gap-2 font-bold">
          Ticket ID: <span className="text-cDarkGreen"> TKT12345</span>
        </p>

        <button onClick={onClose}>
          <IoCloseSharp className="text-4xl" />
        </button>
      </div>

      <div className="flex flex-col gap-2  overflow-y-scroll">
        {/* Display Ticket Information */}
        <div className="mb-4 flex flex-col border-b gap-2 py-2 px-6">
          <h3 className="font-medium text-[1.3vw] text-gray-800">Ticket Information</h3>
          <p>
            Ticket ID:
            <span className="text-black">
              {ticket.ticketInformation.ticketID}
            </span>
          </p>
          <p>
            Priority:{" "}
            <span className="text-black">
              {ticket.ticketInformation.Priority}
            </span>
          </p>
          <p>
            Status:{" "}
            <span className="text-black">
              {ticket.ticketInformation.Status}
            </span>
          </p>
          <p>
            Reported By:{" "}
            <span className="text-black">
              {ticket.ticketInformation.reportBy}
            </span>
          </p>
          <p>
            Date Reported:{" "}
            <span className="text-black">
              {ticket.ticketInformation.dateReported}
            </span>
          </p>
        </div>

        {/* Issue Details */}
        <div className="mb-4 flex flex-col border-b pb-4 gap-2 px-6">
          <h3 className="font-medium text-[1.4] text-gray-800">ISSUE DETAILS</h3>
          <p className="flex gap-4">Category: <span className="text-black">{ticket.issueDetails.Category}</span></p>
          <p>Description: </p> <p className="border text-black rounded-lg p-4">{ticket.issueDetails.description}</p>
        </div>

        {/* Activity Log */}
        <div className="mb-4 flex flex-col border-b pb-4 gap-2 px-6">
          <h3 className="font-semibold">Activity Log</h3>
          <ActivityLog logs={ItSupporLogs} />
          However, the staff profile will be temporarily stored in the "Deleted Staff" archive for recovery if needed.
        </div>
      </div>
      <ButtonPanel buttons={buttons} />
    </div>
  );
}
