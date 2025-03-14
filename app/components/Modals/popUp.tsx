import { useEffect } from "react";
import { RiErrorWarningLine } from "react-icons/ri";


// title: Title of the modal.
// message: Main message describing the action.
// details: Array of detailed points describing the action's consequences.
// warning: Any warning message displayed in red.
// showCheckboxes: Boolean to show or hide the notification checkboxes.
// onCancel: Callback function for the cancel button.
// onConfirm: Callback function for the confirm button.
// confirmText: Text for the confirm button (defaults to "Yes").
// cancelText: Text for the cancel button (defaults to "No").
// confirmColor: Tailwind class for the confirm button's background color.



export default function PopUp({
  title,             // Modal title (e.g., "Delete Product(s)")
  message,           // Main message (e.g., "You are about to delete Product(s)")
  details,           // Optional details about the action (e.g., "This action will ...")
  warning,           // Optional warning message (e.g., "Are you sure you want to proceed?")
  showCheckboxes,    // Flag to show email and app notification checkboxes
  onCancel,          // Function to execute when the cancel button is clicked
  onConfirm,         // Function to execute when the confirm button is clicked
  confirmText = "Yes", // Confirm button text
  cancelText = "No",   // Cancel button text
  confirmColor = "bg-red-600",  // Confirm button color
  onClose,           // Function to handle closing the modal (on click outside or close action)
}) {

  // Handle click outside the modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.id === "modalBackdrop") {
        onClose();
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [onClose]);

  return (
    <div id="modalBackdrop" className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
      <div className="bg-white text-[1vw] flex gap-3 items-center text-gray-600 w-[27vw] flex-col text-center py-4 px-6 rounded rounded-bl-2xl border border-red-600 relative">
        <p className="text-red-600 text-2xl">
          <RiErrorWarningLine />
        </p>
        <p className="text-[1.6vw] text-black">{title}</p>
        <p className="text-[1.1vw]">{message}</p>

        {details && (
          <p className="text-center flex flex-col items-center text-[0.9vw]">
            {details.map((detail, index) => (
              <span key={index} className="flex">
                {detail}
              </span>
            ))}
          </p>
        )}

        {warning && <p className="text-red-500">{warning}</p>}

        {showCheckboxes && (
          <>
            <div className="flex gap-2 items-center">
              <input className="shadow-2xl size-4" type="checkbox" />
              <label htmlFor="" className="text-sm font-medium text-gray-900">
                Send Email Notification
              </label>
            </div>
            <div className="flex gap-2 mb-4 items-center">
              <input className="shadow-2xl border border-gray-100 bg-white size-4" type="checkbox" />
              <label htmlFor="" className="text-sm font-medium text-gray-900">
                Send In App Notification
              </label>
            </div>
          </>
        )}

        <div className="flex gap-4 text-white">
          <button className="bg-cDarkGreen rounded-xl p-2 px-3" onClick={onCancel}>
            {cancelText}
          </button>
          <button className={`${confirmColor} rounded-xl p-2 px-3`} onClick={onConfirm}>
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
