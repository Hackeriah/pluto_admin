import dayjs from "dayjs";
import React, { useContext } from "react";
import { RxCaretRight, RxCaretLeft } from "react-icons/rx";
import GlobalContext from "../context/globalContext";
import { RiCalendarLine } from "react-icons/ri";

export default function CalendarHeader() {
  const logo = '/vectors/calendarLogo.png'
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }
  return (
    <header className="px-4 py-2 text-black flex gap-4 items-center">
      <img src={logo} alt="calendar" className="mr-2 w-12 h-12" />
      <h1 className="mr-10 text-xl text-gray-500 fond-bold">
        Calendar
      </h1>
      <button
        onClick={handleReset}
        className="border flex gap-4 rounded-lg py-1 p-2 mr-5"
      >
        <RiCalendarLine className="text-2xl text-black"/>
        Today
      </button>
      
      <h2 className="ml-4 text-[1.4vw] ">
        {dayjs(new Date(dayjs().year(), monthIndex)).format(
          "MMMM YYYY"
        )}
      </h2>

      <button onClick={handlePrevMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
         <RxCaretLeft className="text-3xl text-black"/>
        </span>
      </button>
      <button onClick={handleNextMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
        <RxCaretRight className="text-3xl text-black"/>
        </span>
      </button>
    </header>
  );
}
