import { FaPlus, FaTrash } from "react-icons/fa6";
import { GrFormCheckmark } from "react-icons/gr";
import { HiMiniXMark } from "react-icons/hi2";
import { IoGridSharp } from "react-icons/io5"; 
import { ImList } from "react-icons/im";  

import Image from "next/image";
const listIcon = <Image src="/vectors/event_list.svg" width={18} height={18} alt="List View" />

export function ProductsToolBar({openEditModal}) {
  return (
    [
        {
          label: "",
          icon: <ImList className="text-2xl"/>,
          action: () => console.log("List icon clicked"),
          hide: false, 
        },
        {
          label: "Export As",
          action: () => console.log("Export action"),
          className: "p-2 px-3 w-fit text-[1vw] rounded-lg border-2 border-gray-500 flex items-center h-fit text-gray-400",
        },
        {
          icon: <FaTrash />,
          action: () => console.log("Delete action"),
          className: "rounded-full text-cDarkGreen w-[2.4vw] items-center flex justify-center h-[2.4vw] border p-[0.6vw] border-cDarkGreen",
        },
        {
          label: "Product",
          icon: <FaPlus />,
          action: () => openEditModal(), 
          className: "w-fit text-[1vw] px-3 rounded-lg bg-cDarkGreen text-white h-fit items-center flex gap-2 border p-2",
        },
      ]
    
  )
}

export function OrderToolBar() {
  return (
    [
        {
          label: "",
          action: () => console.log("List icon clicked"),
          hide: false, 
        },
        {
          label: "Export As",
          action: () => console.log("Export action"),
          className: "p-2 px-3 w-fit text-[1vw] rounded-lg border-2 border-gray-500 flex items-center h-fit text-gray-400",
        },
        {
          label: "Reject",
          icon: <HiMiniXMark />,
          action: () => console.log("Add product action"),
          className: "w-fit text-[1vw] bg-[#FBC756] rounded-lg  text-black h-fit items-center flex gap-2 border p-2",
        },
        {
          label: "Approve",
          icon: <GrFormCheckmark />,
          action: () => console.log("Add product action"),
          className: "w-fit text-[1vw] px-3 rounded-lg bg-cDarkGreen text-white h-fit items-center flex gap-2 border p-2",
        },
      ]
    
  )
}


export function ShipmentToolBar({openEditModal}) {
  return (
    [
        {
          label: "",
          action: () => console.log("List icon clicked"),
          hide: false, 
        },
        {
          label: "Export As",
          action: () => console.log("Export action"),
          className: "p-2 px-3 w-fit text-[1vw] rounded-lg border-2 border-gray-500 flex items-center h-fit text-gray-400",
        },
        {
          label: "Shipment",
          icon: <FaPlus />,
          action: () => openEditModal(), 
          className: "w-fit text-[1vw] bg-cDarkGreen rounded-lg  text-white px-3 h-fit items-center flex gap-2 border p-2",
        },
       
      ]
    
  )
}

export function RestockToolBar() {
  return (
    [
      {
        label: "",
        action: () => console.log("List icon clicked"),
        hide: false, 
      },
      {
        label: "Export As",
        action: () => console.log("Export action"),
        className: "p-2 px-3 w-fit text-[1vw] rounded-lg border-2 border-gray-500 flex items-center h-fit text-gray-400",
      },
      {
        label: "Reject",
        icon: <HiMiniXMark />,
        action: () => console.log("Add product action"),
        className: "w-fit text-[1vw] bg-[#FBC756] rounded-lg  text-black h-fit items-center flex gap-2 border p-2",
      },
      {
        label: "Approve",
        icon: <GrFormCheckmark />,
        action: () => console.log("Add product action"),
        className: "w-fit text-[1vw] px-3 rounded-lg bg-cDarkGreen text-white h-fit items-center flex gap-2 border p-2",
      },
       
      ]
    
  )
}


export function ClientOverviewToolBar() {
  return (
    [
      {
        label: "",
        action: () => console.log("List icon clicked"),
        hide: false, 
      },
      {
        label: "Export As",
        action: () => console.log("Export action"),
        className: "p-2 px-3 w-fit text-[1vw] rounded-lg border-2 border-gray-500 flex items-center h-fit text-gray-400",
      },
      
       
      ]
    
  )
}

export function ClientBPToolBar({openEditModal}) {
  return (
    [
      {
        label: "",
        action: () => console.log("List icon clicked"),
        hide: false, 
      },
      {
        label: "Export As",
        action: () => console.log("Export action"),
        className: "p-2 px-3 w-fit text-[1vw] rounded-lg border-2 border-gray-500 flex items-center h-fit text-gray-400",
      },
      {
        label: "Payment",
        icon: <FaPlus />,
        action: () => openEditModal(), 
        className: "w-fit text-[1vw] px-3 rounded-lg bg-cDarkGreen text-white h-fit items-center flex gap-2 border p-2",
      },
       
      ]
    
  )
}

export function StaffOverviewToolBar({openEditModal}) {
  return (
    [
      {
        label: "",
        action: () => console.log("List icon clicked"),
        hide: false, 
      },
    
      {
        label: "New Staff",
        icon: <FaPlus />,
        action: () => openEditModal(), 
        className: "w-fit text-[1vw] px-3 rounded-lg bg-cDarkGreen text-white h-fit items-center flex gap-2 border p-2",
      },
       
      ]
    
  )
}

export function RequestToolBar({ openEditModal }) {
  return (
    [
      {
        label: "",
        action: () => console.log("List icon clicked"),
        hide: false, 
      },
      {
        label: "Export As",
        action: () => console.log("Export action"),
        className: "p-2 px-3 w-fit text-[1vw] rounded-lg border-2 border-gray-500 flex items-center h-fit text-gray-400",
      },
      {
        label: "Customer Order",
        icon: <FaPlus />,
        action: () => openEditModal(),
        className: "w-fit text-[1vw] px-3 rounded-lg bg-cDarkGreen text-white h-fit items-center flex gap-2 border p-2",
      },
       
      ]
    
  )
}

export function DropOffToolBar({ openEditModal }) {
  return [
    {
      label: "",
      action: () => console.log("List icon clicked"),
      hide: false,
    },
    {
      label: "Export As",
      action: () => console.log("Export action"),
      className: "p-2 px-3 w-fit text-[1vw] rounded-lg border-2 border-gray-500 flex items-center h-fit text-gray-400",
    },
    {
      label: "Dropoff Station",
      icon: <FaPlus />,
      action: () => openEditModal(), // This will now correctly call the function
      className: "w-fit text-[1vw] px-3 rounded-lg bg-cDarkGreen text-white h-fit items-center flex gap-2 border p-2",
    },
  ];
}


export function QueriesToolBar({openEditModal}) {
  return (
    [
      {
        label: "",
        action: () => console.log("List icon clicked"),
        hide: false, 
      },
      {
        label: "Export As",
        action: () => console.log("Export action"),
        className: "p-2 px-3 w-fit text-[1vw] rounded-lg border-2 border-gray-500 flex items-center h-fit text-gray-400",
      },
      {
        icon: <FaTrash />,
        action: () => console.log("Delete action"),
        className: "rounded-full text-cDarkGreen w-[2.4vw] items-center flex justify-center h-[2.4vw] border p-[0.6vw] border-cDarkGreen",
      },
      {
        label: "Resolve",
        action: () => openEditModal(), 
        className: "w-fit text-[1vw] px-3 rounded-lg bg-cDarkGreen text-white h-fit items-center flex gap-2 border p-2",
      },
       
      ]
    
  )
}


export function ContentToolBar({openEditModal}) {
  return (
    [
      {
        label: "",
        action: () => console.log("List icon clicked"),
        hide: false, 
      },
      {
        label: "Export As",
        action: () => console.log("Export action"),
        className: "p-2 px-3 w-fit text-[1vw] rounded-lg border-2 border-gray-500 flex items-center h-fit text-gray-400",
      },
      {
        icon: <FaTrash />,
        action: () => console.log("Delete action"),
        className: "rounded-full text-cDarkGreen w-[2.4vw] items-center flex justify-center h-[2.4vw] border p-[0.6vw] border-cDarkGreen",
      },
      {
        label: "New Article",
        action: () => openEditModal(),
        icon: <FaPlus />,
        className: "w-fit text-[1vw] px-3 rounded-lg bg-cDarkGreen text-white h-fit items-center flex gap-2 border p-2",
      },
       
      ]
    
  )
}

export function ITSupportToolBar() {
  return( [
    {
      label: "",
      icon: listIcon,
      action: () => console.log("List icon clicked"),
      hide: false, 
    },
    {
      icon: <FaTrash />,
      action: () => console.log("Delete action"),
      className: "rounded-full text-cDarkGreen w-[2.4vw] items-center flex justify-center h-[2.4vw] border p-[0.6vw] border-cDarkGreen",
    },
    {
      label: "Export As",
      action: () => console.log("Export action"),
      className: "p-2 px-3 w-fit text-[1vw] rounded-lg border-2 border-gray-500 flex items-center h-fit text-gray-400",
    },
    
  ]);
}

