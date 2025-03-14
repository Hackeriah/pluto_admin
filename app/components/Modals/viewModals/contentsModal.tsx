import { IoCloseSharp } from "react-icons/io5";
import { RxCaretLeft } from "react-icons/rx";
import { BsCalendarEvent } from "react-icons/bs";
import { PiWarningCircleBold } from "react-icons/pi";
import { GrView } from "react-icons/gr";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { CiImageOn } from "react-icons/ci";
import { GoVideo } from "react-icons/go";

const del = "/vectors/delete.svg";
const profile = "/vectors/content-profile.svg";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  rowData: {
    id: number;
    image: string;
    topic: string;
    subtitle: string;
    orderDate: string;
    content: string;
    likes: string;
    status: string;
    actions: string;
  } | null;
  onDelete: () => void;
  onEdit: (updatedRow: any) => void;
}

const ContentModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  rowData,
  onEdit,
}) => {
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [editData, setEditData] = useState(rowData);
  const [isButtonsVisible, setIsButtonsVisible] = useState(false);

  const buttonContainerRef = useRef(null);

  // Always call hooks at the top level
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        buttonContainerRef.current &&
        !buttonContainerRef.current.contains(event.target)
      ) {
        setIsButtonsVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // Empty dependency array to ensure this effect runs once

  if (!isOpen || !rowData) return null;

  const handleDelete = () => {
    setDeleteModalOpen(true);
  };

  const handlePublish = () => {
    console.log("published content");
  };

  const handleConfirmDelete = () => {
    console.log("deleted content");
    setDeleteModalOpen(false);
    onClose();
  };

  const handleEdit = () => {
    if (isEditModalOpen == true){
      setEditModalOpen(false);
    } else {
      setEditModalOpen(true);
    }
  };

  const handleEditSubmit = () => {
    onEdit(editData);
    setEditModalOpen(false);
    onClose();
  };

  const handleFieldChange = (field: string, value: any) => {
    setEditData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const toggleButtons = () => {
    setIsButtonsVisible(!isButtonsVisible);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Image uploaded:", file.name);
    }
  };

  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Video uploaded:", file.name);
    }
  };

  const handleGoBack = () => {
    setGoBack(true);
  }

  return (
    <div className="bg-white fixed p-8 pr-[15%] inset-0 mt-[10vh] ml-[12vw] z-10 h-full overflow-hidden">
      <div className="flex justify-between items-center">
        <button className="flex items-center gap-4" onClick={onClose}>
          <RxCaretLeft className="text-[2vw] text-cDarkGreen" /> Back
        </button>
        <div className="flex gap-[3vw] items-center">
          <button
            className="rounded-full w-[2.5vw] border-cDarkGreen h-[2.5vw] border p-[0.6vw]"
            onClick={handleDelete}
          >
            <Image src={del} width={40} height={40} alt="Delete" />
          </button>
          <button
            className="bg-cDarkGreen text-white py-2 px-4 rounded-xl"
            onClick={handleEdit}
          >
            Edit
          </button>
        </div>
      </div>

      <div>
        <p className="text-[2.8vw] my-[1.2vh] font-semibold">{rowData.topic}</p>
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <span className="w-[4vw] h-[4vw] items-center flex">
              <Image
                src={profile}
                width={20}
                height={20}
                layout="responsive"
                alt="Profile"
              />
            </span>
            <div>
              <p className="text-[1.4vw]">{rowData.subtitle}</p>
              <p className="flex items-center gap-4">
                <BsCalendarEvent />
                <span>{rowData.orderDate}</span>
              </p>
            </div>
          </div>
          <p className="flex gap-2 items-center">
            <GrView className="text-[1.4vw] text-gray-500" />
            <span className="text-gray-500">{rowData.likes}</span>
          </p>
        </div>
      </div>

      {/* Main scrollable content */}
      <div className="flex flex-col h-[60vh] overflow-y-scroll pr-4 mt-4">
        <p className="mt-4">{rowData.content}</p>

        {/* Updated image height */}
        <div className="w-full h-fit mt-4 rounded-lg">
          <Image
            src={rowData.image}
            alt="Content Image"
            width={926}
            height={512}
            layout="responsive"
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70">
          <div className="bg-white gap-2 p-6 flex flex-col justify-center text-center items-center border w-fit border-red-500 rounded rounded-bl-3xl">
            <PiWarningCircleBold className="text-red-500 text-xl" />
            <p>Delete Content</p>
            <p className="text-[0.8vw] text-gray-500 ">
              You are about to delete this content
            </p>
            <p className="text-red-700">Are you sure you want to proceed?</p>
            <div className="flex justify-end gap-4 mt-4">
              <button
                className="bg-cDarkGreen px-4 text-white py-2 rounded-lg"
                onClick={() => setDeleteModalOpen(false)}
              >
                No
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
                onClick={handleConfirmDelete}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="bg-white h-full fixed top-0 mt-[10vh] p-6 pr-[12vw] rounded-lg w-[85vw]">
          <div className="flex justify-between items-center">
            <button className="flex items-center gap-4" onClick={handleEdit}>
              <RxCaretLeft className="text-[2vw] text-cDarkGreen" /> Back
            </button>

            <button
              className="bg-cDarkGreen text-white py-2 px-4 rounded-xl"
              onClick={handlePublish}
            >
              Publish
            </button>
          </div>

          <div className="mt-12">
            <input
              type="text"
              className="text-[2vw] w-full p-2 bg-transparent border-gray-300 focus:outline-none"
              placeholder="Title"
            />
            <br />
            <input
              type="text"
              className="text-[1.4vw] w-full p-2 bg-transparent border-gray-300 focus:outline-none"
              placeholder="Subtitle"
            />

            <div className="flex gap-4 relative" ref={buttonContainerRef}>
              <button
                className="rounded-full border border-gray-400 w-[3.2vw] h-[3vw] justify-center items-center flex text-cDarkGreen text-3xl p-2"
                onClick={toggleButtons}
              >
                +
              </button>

              {/* Image and Video Buttons */}
              <div
                className={`absolute left-[4vw]  transition-all duration-300 ease-in-out transform ${
                  isButtonsVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4 pointer-events-none"
                } flex gap-4`}
              >
                <label className="rounded-full cursor-pointer bg-white shadow-2xl border border-cDarkGreen w-[3vw] h-[2.8vw] justify-center items-center flex text-cDarkGreen text-3xl p-2">
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                  <CiImageOn />
                </label>
                <label className="rounded-full cursor-pointer bg-white shadow-2xl border border-cDarkGreen w-[3vw] h-[2.8vw] justify-center items-center flex text-cDarkGreen text-3xl p-2">
                  <input
                    type="file"
                    accept="video/*"
                    className="hidden"
                    onChange={handleVideoUpload}
                  />
                  <GoVideo />
                </label>
              </div>

              <textarea
                className="p-2 w-full  my-2 bg-transparent border-gray-300 focus:outline-none"
                value={editData?.topic || ""}
                onChange={(e) => handleFieldChange("topic", e.target.value)}
                placeholder="Your Content goes here..."
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentModal;
