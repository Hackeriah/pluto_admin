"use client";
import React, { useContext, useState, FormEvent } from "react";
import GlobalContext from "../context/globalContext";
import { Dayjs } from "dayjs";
import { IoCloseSharp } from "react-icons/io5";
import { MdOutlineSchedule } from "react-icons/md";
import { MdSegment } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa";
import { MdDragHandle } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { FaCheck } from "react-icons/fa";



const labelsClasses = ["indigo", "gray", "green", "blue", "red", "purple"];

interface CalendarEvent {
  title: string;
  description: string;
  label: string;
  day: number;
  id: number;
}

export default function EventModal() {
  const {
    setShowEventModal,
    daySelected,
    dispatchCalEvent,
    selectedEvent,
  } = useContext(GlobalContext);

  // Type assertion: if daySelected is a dayjs object.
  const selectedDay: Dayjs = daySelected;

  const [title, setTitle] = useState<string>(
    selectedEvent ? selectedEvent.title : ""
  );
  const [description, setDescription] = useState<string>(
    selectedEvent ? selectedEvent.description : ""
  );
  const [selectedLabel, setSelectedLabel] = useState<string>(
    selectedEvent
      ? labelsClasses.find((lbl) => lbl === selectedEvent.label) || labelsClasses[0]
      : labelsClasses[0]
  );

  function handleSubmit(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    const calendarEvent: CalendarEvent = {
      title,
      description,
      label: selectedLabel,
      day: selectedDay.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    if (selectedEvent) {
      dispatchCalEvent({ type: "update", payload: calendarEvent });
    } else {
      dispatchCalEvent({ type: "push", payload: calendarEvent });
    }
    setShowEventModal(false);
  }

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="material-icons-outlined text-gray-400">
            <MdDragHandle className="text-3xl"/>
          </span>
          <div className="flex gap-2">
            {selectedEvent && (
              <span
                onClick={() => {
                  dispatchCalEvent({
                    type: "delete",
                    payload: selectedEvent,
                  });
                  setShowEventModal(false);
                }}
                className="material-icons-outlined text-gray-400 cursor-pointer"
              >
                <MdDeleteOutline className="text-3xl"/>
              </span>
            )}
            <button type="button" onClick={() => setShowEventModal(false)}>
              <span className="material-icons-outlined text-gray-400">
              <IoCloseSharp className="text-3xl"/>
              </span>
            </button>
          </div>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-[1fr_5fr] items-end gap-y-7 gap-x-4">
            <div></div>
            <input
              type="text"
              name="title"
              placeholder="Add title"
              value={title}
              required
              className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setTitle(e.target.value)}
            />
            <span className="material-icons-outlined text-gray-400">
            <MdOutlineSchedule className="text-3xl"/>
            </span>
            <p>{selectedDay.format("dddd, MMMM DD")}</p>
            <span className="material-icons-outlined text-gray-400">
            <MdSegment className="text-3xl"/>
            </span>
            <input
              type="text"
              name="description"
              placeholder="Add a description"
              value={description}
              required
              className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setDescription(e.target.value)}
            />
            <span className="material-icons-outlined text-gray-400">
            <FaRegBookmark className="text-3xl"/>
            </span>
            <div className="flex gap-x-2">
              {labelsClasses.map((lblClass, i) => (
                <span
                  key={i}
                  onClick={() => setSelectedLabel(lblClass)}
                  className={`bg-${lblClass}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                >
                  {selectedLabel === lblClass && (
                    <span className="material-icons-outlined text-white text-sm">
                      <FaCheck className="text-sm"/>
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
        <footer className="flex justify-end border-t p-3 mt-5">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
}
