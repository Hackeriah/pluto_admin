import { RxCaretLeft } from "react-icons/rx";
import { useState, useRef } from "react";
import { CiImageOn } from "react-icons/ci";
import { GoVideo } from "react-icons/go";

interface EditContentProps {
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
  };
  closeModal: () => void;
  onPublish: () => void;
  onFieldChange: (field: string, value: any) => void;
}

const EditContent: React.FC<EditContentProps> = ({
  rowData,
//   onClose,
closeModal,
  onPublish,
  onFieldChange,
}) => {
  const [isButtonsVisible, setIsButtonsVisible] = useState(false);
  const buttonContainerRef = useRef(null);

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

  return (
    <div className="bg-white h-full fixed top-0 mt-[10vh] p-6 pr-[12vw] rounded-lg w-[85vw]">
      <div className="flex justify-between items-center">
        <button className="flex items-center gap-4" onClick={closeModal}>
          <RxCaretLeft className="text-[2vw] text-cDarkGreen" /> Back
        </button>

        <button
          className="bg-cDarkGreen text-white py-2 px-4 rounded-xl"
          onClick={closeModal}
        >
          Publish
        </button>
      </div>

      <div className="mt-12">
        <input
          type="text"
          className="text-[2vw] w-full p-2 bg-transparent border-gray-300 focus:outline-none"
          placeholder="Title"
          value={rowData?.topic || ""}
          onChange={(e) => onFieldChange("topic", e.target.value)}
        />
        <br />
        <input
          type="text"
          className="text-[1.4vw] w-full p-2 bg-transparent border-gray-300 focus:outline-none"
          placeholder="Subtitle"
          value={rowData?.subtitle || ""}
          onChange={(e) => onFieldChange("subtitle", e.target.value)}
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
            value={rowData?.content || ""}
            onChange={(e) => onFieldChange("content", e.target.value)}
            placeholder="Your Content goes here..."
          />
        </div>
      </div>
    </div>
  );
};

export default EditContent;
