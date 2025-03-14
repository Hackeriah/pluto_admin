
"use client";
import React, { useState, useContext, useEffect } from "react";
import { GetMonth } from "./calendarComponents/util";
import CalendarHeader from "./calendarComponents/calendarHeader";
import Sidebar from "./calendarComponents/sidebar";
import Month from "./calendarComponents/month";
import GlobalContext from "./context/globalContext";
import EventModal from "./calendarComponents/eventModal";

const Calendar: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(GetMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(GetMonth(monthIndex));
  }, [monthIndex]);

  return (
    <>
      {showEventModal && <EventModal />}
      <div className="h-fit w-full flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </>
  );
};

export default Calendar;
