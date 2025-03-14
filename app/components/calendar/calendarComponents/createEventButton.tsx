"use client";
import { useContext } from "react";
import { LuPlus } from "react-icons/lu";
import GlobalContext from "../context/globalContext";

export default function CreateEventButton() {
  const { setShowEventModal } = useContext(GlobalContext);
  return (
    <button
      onClick={() => setShowEventModal(true)}
      className="border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl"
    >
      <LuPlus className="text-2xl text-gray-500 " />
      <span className="pl-3 pr-7"> Create</span>
    </button>
  );
}
