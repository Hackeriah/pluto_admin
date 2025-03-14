


// import React from 'react';

// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   rowData: { [key: string]: string | number | React.ReactNode } | null;
// }

// const Modal: React.FC<ModalProps> = ({ isOpen, onClose, rowData }) => {
//   if (!isOpen || !rowData) return null;

//   return (
//     <div className="fixed top-0 left-0 w-full h-full bg-opacity-50 bg-black flex items-center justify-center">
//       <div className="bg-white p-6 rounded-md w-1/2">
//         <button onClick={onClose} className="text-black float-right">Close</button>
//         <h3 className="text-xl mb-4">View Details</h3>
//         <div className="space-y-4">
//           {Object.entries(rowData).map(([key, value]) => (
//             <div key={key}>
//               <strong>{key.toUpperCase()}:</strong> <span>{value}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;
import React from 'react'

export default function Modal() {
  return (
    <div>Modal</div>
  )
}
