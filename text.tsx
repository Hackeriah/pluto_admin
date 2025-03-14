// -----------------------------------------------
//          State Edit Modal
// -----------------------------------------------

// import { IoCloseSharp } from "react-icons/io5";
// import Image from "next/image";
// import { useState } from "react";
// import ButtonPanel from "../modalComponents/buttonPannel";

// export default function StateEditModal({ isOpen, closeModal }) {
//   const defaultImg = "/vectors/noImg.svg";
//   const [selectedImage, setSelectedImage] = useState(null);

//   if (!isOpen) {
//     return null;
//   }

//   const handleCancelBtn = () => {
//     console.log("Cancel btn clicked");
//     closeModal();
//   };

//   const handleSaveBtn = () => {
//     console.log("Save btn clicked");
//   };

//   const buttons = [
//     {
//       text: "Cancel",
//       bgColor: "#FBC756",
//       textColor: "Black",
//       onClick: handleCancelBtn, // Trigger modal when cancel is clicked
//     },
//     {
//       text: "Save",
//       bgColor: "#319D38",
//       textColor: "white",
//       onClick: handleSaveBtn,
//     },
//   ];

//   // Handle image upload from PC
//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setSelectedImage(imageUrl);
//     }
//   };

//   return (
//     <div className="fixed top-0 right-0 bg-white z-10 w-[30vw] h-[100vh] flex flex-col py-2 border shadow-lg shadow-gray-500/50">
//       {/* Header section */}
//       <div className="flex text-gray-600 justify-between items-center py-2 border-b-2 px-10">
//         <h2 className="text-[1.4vw] font-bold">NEW STATE</h2>
//         <button onClick={closeModal}>
//           <IoCloseSharp className="text-4xl" />
//         </button>
//       </div>

//       <div className="h-full overflow-y-auto">
//         <div className="p-4 border-b-2 flex flex-col gap-4">
//           <p>Basic Information</p>

//             <Image
//               src={selectedImage || defaultImg} // Show selected image or default
//               width={300}
//               height={800}
//               alt="Selected Image"
//             />

//           <span className="flex flex-col gap-2">
//             <label className="bg-cDarkGreen p-2 text-white rounded-lg w-fit cursor-pointer">
//               Upload new photo
//               <input
//                 type="file"
//                 accept="image/*"
//                 className="hidden"
//                 onChange={handleImageUpload}
//               />
//             </label>
//             <p className="text-gray-600 text-[0.8vw]">
//               At least 800X800 px recommended. <br />
//               JPG or PNG is allowed.
//             </p>
//           </span>
//         </div>

//         <div className="px-4 gap-4 my-4 flex flex-col md:flex-row">
//           <div className="w-full md:w-1/2 mb-4 md:mb-0">
//             <label
//               htmlFor="stateName"
//               className="block text-sm font-medium text-gray-700"
//             >
//               State Name
//             </label>
//             <input
//               id="stateName"
//               className="mt-1 block w-full h-[3vw] rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-2"
//               type="text"
//               placeholder="Enter state name here"
//             />
//           </div>

//           <div className="w-full md:w-1/2">
//             <label
//               htmlFor="stateCode"
//               className="block text-sm font-medium text-gray-700"
//             >
//               State Code
//             </label>
//             <input
//               id="stateCode"
//               className="mt-1 block w-full h-[3vw] rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-2"
//               type="text"
//               placeholder="Enter Unique code or Auto generated"
//             />
//           </div>
//         </div>
//       </div>

//       <ButtonPanel buttons={buttons} />
//     </div>
//   );
// }

// -------------------------------------------
//         NEW AREA EDIT MODAL
// -------------------------------------------

// import { IoCloseSharp } from "react-icons/io5";
// import Image from "next/image";
// import { useState } from "react";
// import ButtonPanel from "../modalComponents/buttonPannel";
// import CustomDropDown from "../../customDropDown";

// export default function StateEditModal({ isOpen, closeModal }) {
//   const defaultImg = "/vectors/noImg.svg";
//   const [selectedImage, setSelectedImage] = useState(null);

//   if (!isOpen) {
//     return null;
//   }

//   const handleCancelBtn = () => {
//     console.log("Cancel btn clicked");
//     closeModal();
//   };

//   const handleSaveBtn = () => {
//     console.log("Save btn clicked");
//   };

//   const buttons = [
//     {
//       text: "Cancel",
//       bgColor: "#FBC756",
//       textColor: "Black",
//       onClick: handleCancelBtn, // Trigger modal when cancel is clicked
//     },
//     {
//       text: "Save",
//       bgColor: "#319D38",
//       textColor: "white",
//       onClick: handleSaveBtn,
//     },
//   ];

//   // Handle image upload from PC
//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setSelectedImage(imageUrl);
//     }
//   };

//   //   ============ Dropdown ===========

//   const chooseOptionOne = () => {
//     console.log("Choosen option Three");
//   };
//   const chooseOptionTwo = () => {
//     console.log("Choosen option Three");
//   };
//   const chooseOptionThree = () => {
//     console.log("Choosen option Three");
//   };

//   const status = [
//     { label: "option 1", action: chooseOptionOne() },
//     { label: "option 2", action: chooseOptionTwo() },
//     { label: "option 3", action: chooseOptionThree() },
//   ];

//   return (
//     <div className="fixed top-0 right-0 bg-white z-10 w-[30vw] h-[100vh] flex flex-col py-2 border shadow-lg shadow-gray-500/50">
//       {/* Header section */}
//       <div className="flex text-gray-600 justify-between items-center py-2 border-b-2 px-10">
//         <h2 className="text-[1.4vw] font-bold">NEW AREA</h2>
//         <button onClick={closeModal}>
//           <IoCloseSharp className="text-4xl" />
//         </button>
//       </div>

//       <div className="h-full overflow-y-auto">
//         <div className="p-4 border-b-2 flex flex-col gap-4">
//           <p>Basic Information</p>

//           <Image
//             src={selectedImage || defaultImg} // Show selected image or default
//             width={300}
//             height={800}
//             alt="Selected Image"
//           />

//           <span className="flex flex-col gap-2">
//             <label className="bg-cDarkGreen p-2 text-white rounded-lg w-fit cursor-pointer">
//               Upload new photo
//               <input
//                 type="file"
//                 accept="image/*"
//                 className="hidden"
//                 onChange={handleImageUpload}
//               />
//             </label>
//             <p className="text-gray-600 text-[0.8vw]">
//               At least 800X800 px recommended. <br />
//               JPG or PNG is allowed.
//             </p>
//           </span>
//         </div>

//         <div className="px-4 justify-between my-4  w-full flex flex-wrap">
//           <div className="w-[48%] mb-4">
//           <label
//               htmlFor="stateName"
//               className="block text-sm font-medium mb-1 text-gray-700"
//             >
//               State
//             </label>
//             <CustomDropDown
//               options={status}
//               buttonLabel="Select State"
//             />
//           </div>

//           <div className="w-[48%] mb-4">
//             <label
//               htmlFor="stateName"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Area Name
//             </label>
//             <input
//               id="stateName"
//               className="mt-1 block w-full h-[3vw] rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-2"
//               type="text"
//               placeholder="Enter state name here"
//             />
//           </div>

//           <div className="w-1/2">
//             <label
//               htmlFor="stateCode"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Area Code
//             </label>
//             <input
//               id="stateCode"
//               className="mt-1 block w-full h-[3vw] rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-2"
//               type="text"
//               placeholder="Enter Unique code or Auto generated"
//             />
//           </div>
//         </div>
//       </div>

//       <ButtonPanel buttons={buttons} />
//     </div>
//   );
// }

// --------------------------------------------
//             // ZONE EDIT MODAL
// --------------------------------------------

// import { IoCloseSharp } from "react-icons/io5";
// import Image from "next/image";
// import { useState } from "react";
// import ButtonPanel from "../modalComponents/buttonPannel";
// import CustomDropDown from "../../customDropDown";

// export default function StateEditModal({ isOpen, closeModal }) {
//   const defaultImg = "/vectors/noImg.svg";
//   const [selectedImage, setSelectedImage] = useState(null);

//   if (!isOpen) {
//     return null;
//   }

//   const handleCancelBtn = () => {
//     console.log("Cancel btn clicked");
//     closeModal();
//   };

//   const handleSaveBtn = () => {
//     console.log("Save btn clicked");
//   };

//   const buttons = [
//     {
//       text: "Cancel",
//       bgColor: "#FBC756",
//       textColor: "Black",
//       onClick: handleCancelBtn, // Trigger modal when cancel is clicked
//     },
//     {
//       text: "Save",
//       bgColor: "#319D38",
//       textColor: "white",
//       onClick: handleSaveBtn,
//     },
//   ];

//   // Handle image upload from PC
//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setSelectedImage(imageUrl);
//     }
//   };

//   //   ============ Dropdown ===========

//   const chooseOptionOne = () => {
//     console.log("Choosen option Three");
//   };
//   const chooseOptionTwo = () => {
//     console.log("Choosen option Three");
//   };
//   const chooseOptionThree = () => {
//     console.log("Choosen option Three");
//   };

//   const status = [
//     { label: "option 1", action: chooseOptionOne() },
//     { label: "option 2", action: chooseOptionTwo() },
//     { label: "option 3", action: chooseOptionThree() },
//   ];

//   return (
//     <div className="fixed top-0 right-0 bg-white z-10 w-[30vw] h-[100vh] flex flex-col py-2 border shadow-lg shadow-gray-500/50">
//       {/* Header section */}
//       <div className="flex text-gray-600 justify-between items-center py-2 border-b-2 px-10">
//         <h2 className="text-[1.4vw] font-bold">NEW  ZONE</h2>
//         <button onClick={closeModal}>
//           <IoCloseSharp className="text-4xl" />
//         </button>
//       </div>

//       <div className="h-full overflow-y-auto">
//         <div className="p-4 border-b-2 flex flex-col gap-4">
//           <p>Basic Information</p>

//           <Image
//             src={selectedImage || defaultImg} // Show selected image or default
//             width={300}
//             height={800}
//             alt="Selected Image"
//           />

//           <span className="flex flex-col gap-2">
//             <label className="bg-cDarkGreen p-2 text-white rounded-lg w-fit cursor-pointer">
//               Upload new photo
//               <input
//                 type="file"
//                 accept="image/*"
//                 className="hidden"
//                 onChange={handleImageUpload}
//               />
//             </label>
//             <p className="text-gray-600 text-[0.8vw]">
//               At least 800X800 px recommended. <br />
//               JPG or PNG is allowed.
//             </p>
//           </span>
//         </div>

//         <div className="px-4 justify-between my-4  w-full flex flex-wrap">
//           <div className="w-[48%] mb-4">
//             <label
//               htmlFor="stateName"
//               className="block text-sm font-medium mb-1 text-gray-700"
//             >
//               State
//             </label>
//             <CustomDropDown options={status} buttonLabel="Select State" />
//           </div>

//           <div className="w-[48%] mb-4">
//             <label
//               htmlFor="stateName"
//               className="block text-sm font-medium mb-1 text-gray-700"
//             >
//               Area
//             </label>
//             <CustomDropDown options={status} buttonLabel="Select State" />
//           </div>

//           <div className="w-[48%] mb-4">
//             <label
//               htmlFor="stateName"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Zone Name
//             </label>
//             <input
//               id="stateName"
//               className="mt-1 block w-full h-[3vw] rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-2"
//               type="text"
//               placeholder="Enter state name here"
//             />
//           </div>

//           <div className="w-1/2">
//             <label
//               htmlFor="stateCode"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Zone Code
//             </label>
//             <input
//               id="stateCode"
//               className="mt-1 block w-full h-[3vw] rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-2"
//               type="text"
//               placeholder="Enter Unique code or Auto generated"
//             />
//           </div>
//         </div>
//       </div>

//       <ButtonPanel buttons={buttons} />
//     </div>
//   );
// }

// --------------------------------------------
//             // LANDMARK EDIT MODAL
// --------------------------------------------

// import { IoCloseSharp } from "react-icons/io5";
// import Image from "next/image";
// import { useState } from "react";
// import ButtonPanel from "../modalComponents/buttonPannel";
// import CustomDropDown from "../../customDropDown";

// export default function StateEditModal({ isOpen, closeModal }) {
//   const defaultImg = "/vectors/noImg.svg";
//   const [selectedImage, setSelectedImage] = useState(null);

//   if (!isOpen) {
//     return null;
//   }

//   const handleCancelBtn = () => {
//     console.log("Cancel btn clicked");
//     closeModal();
//   };

//   const handleSaveBtn = () => {
//     console.log("Save btn clicked");
//   };

//   const buttons = [
//     {
//       text: "Cancel",
//       bgColor: "#FBC756",
//       textColor: "Black",
//       onClick: handleCancelBtn, // Trigger modal when cancel is clicked
//     },
//     {
//       text: "Save",
//       bgColor: "#319D38",
//       textColor: "white",
//       onClick: handleSaveBtn,
//     },
//   ];

//   // Handle image upload from PC
//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setSelectedImage(imageUrl);
//     }
//   };

//   //   ============ Dropdown ===========

//   const chooseOptionOne = () => {
//     console.log("Choosen option Three");
//   };
//   const chooseOptionTwo = () => {
//     console.log("Choosen option Three");
//   };
//   const chooseOptionThree = () => {
//     console.log("Choosen option Three");
//   };

//   const status = [
//     { label: "option 1", action: chooseOptionOne() },
//     { label: "option 2", action: chooseOptionTwo() },
//     { label: "option 3", action: chooseOptionThree() },
//   ];

//   return (
//     <div className="fixed top-0 right-0 bg-white z-10 w-[30vw] h-[100vh] flex flex-col py-2 border shadow-lg shadow-gray-500/50">
//       {/* Header section */}
//       <div className="flex text-gray-600 justify-between items-center py-2 border-b-2 px-10">
//         <h2 className="text-[1.4vw] font-bold">NEW  ZONE</h2>
//         <button onClick={closeModal}>
//           <IoCloseSharp className="text-4xl" />
//         </button>
//       </div>

//       <div className="h-full overflow-y-auto">
//         <div className="p-4 border-b-2 flex flex-col gap-4">
//           <p>Basic Information</p>

//           <Image
//             src={selectedImage || defaultImg} // Show selected image or default
//             width={300}
//             height={800}
//             alt="Selected Image"
//           />

//           <span className="flex flex-col gap-2">
//             <label className="bg-cDarkGreen p-2 text-white rounded-lg w-fit cursor-pointer">
//               Upload new photo
//               <input
//                 type="file"
//                 accept="image/*"
//                 className="hidden"
//                 onChange={handleImageUpload}
//               />
//             </label>
//             <p className="text-gray-600 text-[0.8vw]">
//               At least 800X800 px recommended. <br />
//               JPG or PNG is allowed.
//             </p>
//           </span>
//         </div>

//         <div className="px-4 justify-between my-4  w-full flex flex-wrap">
//           <div className="w-[48%] mb-4">
//             <label
//               htmlFor="stateName"
//               className="block text-sm font-medium mb-1 text-gray-700"
//             >
//               State
//             </label>
//             <CustomDropDown options={status} buttonLabel="Select State" />
//           </div>

//           <div className="w-[48%] mb-4">
//             <label
//               htmlFor="stateName"
//               className="block text-sm font-medium mb-1 text-gray-700"
//             >
//               Area
//             </label>
//             <CustomDropDown options={status} buttonLabel="Select State" />
//           </div>

//           <div className="w-[48%] mb-4">
//             <label
//               htmlFor="stateName"
//               className="block text-sm font-medium mb-1 text-gray-700"
//             >
//               Zone
//             </label>
//             <CustomDropDown options={status} buttonLabel="Select State" />
//           </div>

//           <div className="w-[48%] mb-4">
//             <label
//               htmlFor="stateName"
//               className="block text-sm font-medium mb-1 text-gray-700"
//             >
//               Landmark Name
//             </label>
//             <CustomDropDown options={status} buttonLabel="Select State" />
//           </div>

//           <div className="w-[48%] mb-4">
//             <label
//               htmlFor="stateName"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Landmark Code
//             </label>
//             <input
//               id="stateName"
//               className="mt-1 block w-full h-[3vw] rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-2"
//               type="text"
//               placeholder="Enter state name here"
//             />
//           </div>

//           <div className="w-1/2">
//             <label
//               htmlFor="stateCode"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Creation Cost
//             </label>
//             <input
//               id="stateCode"
//               className="mt-1 block w-full h-[3vw] rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-2"
//               type="text"
//               placeholder="Enter Unique code or Auto generated"
//             />
//           </div>
//         </div>
//       </div>

//       <ButtonPanel buttons={buttons} />
//     </div>
//   );
// }

// ------------------------------------------
//         NEW DROPOFF STATION
// ------------------------------------------
// import { IoCloseSharp } from "react-icons/io5";
// import ModalSection from "./modalSection";
// import Image from "next/image";
// import ModalWrapper from "./modalWrapper";
// import { useState } from "react";
// import CustomDropDown from "../../customDropDown";
// import InputBtn from "../../inputBtn";
// import ButtonPanel from "../modalComponents/buttonPannel";

// export default function StateEditModal({ isOpen, closeModal }) {
//   const [selectedImage, setSelectedImage] = useState(null);

//   if (!isOpen) {
//     return null;
//   }

//   const handleCancelBtn = () => {
//     console.log("Cancel btn clicked");
//     closeModal();
//   };

//   const handleSaveBtn = () => {
//     console.log("Save btn clicked");
//   };

//   const buttons = [
//     {
//       text: "Cancel",
//       bgColor: "#FBC756",
//       textColor: "Black",
//       onClick: handleCancelBtn,
//     },
//     {
//       text: "Save",
//       bgColor: "#319D38",
//       textColor: "white",
//       onClick: handleSaveBtn,
//     },
//   ];

//   // Handle image upload from PC
//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setSelectedImage(imageUrl);
//     }
//   };

//   // Define actions for each option
//   const chooseOptionOne = () => {
//     console.log("Chosen option One");
//   };
//   const chooseOptionTwo = () => {
//     console.log("Chosen option Two");
//   };
//   const chooseOptionThree = () => {
//     console.log("Chosen option Three");
//   };

//   // Define status options for each dropdown
//   const status = [
//     { label: "option 1", action: chooseOptionOne },
//     { label: "option 2", action: chooseOptionTwo },
//     { label: "option 3", action: chooseOptionThree },
//   ];

//   // Define sections data
//   const modalSections = [
//     {
//       title: "Basic Information",
//       inputs: [
//         { id: "stationName", label: "Station Name", placeholder: "Input field" },
//         { id: "addressLocation", label: "Address/Location", placeholder: "Input field" },
//       ],
//       dropdowns: [
//         {
//           label: "Capacity",
//           options: status,
//           buttonLabel: "Input Field",
//         },
//         {
//           label: "Status",
//           options: status,
//           buttonLabel: "Active/Inactive",
//         },
//       ],
//     },
//     {
//       title: "Linking",
//       inputs: [],
//       dropdowns: [
//         {
//           label: "State",
//           options: status,
//           buttonLabel: "Select State",
//         },
//         {
//           label: "Area",
//           options: status,
//           buttonLabel: "Select Area",
//         },
//       ],
//     },
//     {
//       title: "Other Details (Optional)",
//       inputs: [
//         { id: "contactName", label: "Contact Name", placeholder: "Input field" },
//       ],
//       dropdowns: [
//         { id: "email", label: "Email", buttonLabel: "Input field", options: status, },
//         { id: "phoneNumber", label: "Phone Number", buttonLabel: "Active/Inactive", options: status, },
//       ],
//     },
//   ];

//   return (
//     <ModalWrapper title="NEW DROPOFF STATION" closeModal={closeModal} buttons={buttons}>
//       {modalSections.map((section, index) => (
//         <ModalSection key={index} title={section.title}>
//           {/* Render inputs */}
//           {section.inputs.map((input, idx) => (
//             <InputBtn key={idx} id={input.id} label={input.label} placeholder={input.placeholder} />
//           ))}

//           {/* Render dropdowns */}
//           <div className="w-full justify-between flex  flex-wrap">
//             {section.dropdowns.map((dropdown, idx) => (
//               <div key={idx} className="flex w-[47%]">
//                 <CustomDropDown
//                   options={dropdown.options}
//                   buttonLabel={dropdown.buttonLabel}
//                   label={dropdown.label}
//                   labelFor={dropdown.labelFor}
//                 />
//               </div>
//             ))}
//           </div>
//         </ModalSection>
//       ))}
//     </ModalWrapper>
//   );
// }
