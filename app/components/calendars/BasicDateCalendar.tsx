'use client'
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 

export default function BasicDateCalendar() {
  const [date, setDate] = useState<Date>(new Date());

  const handleDateChange = (newDate: Date): void => {
    setDate(newDate);
  };

  const formatShortWeekday = (locale: string, date: Date): string => {
    return date.toLocaleDateString(locale, { weekday: 'short' }).charAt(0);
  };

  return (
    <div className="my-5 bg-[#EAF5EB80] z-10 text-center w-fit">
      <h3 className="text-lg font-semibold mb-4">Pick a Date:</h3>
      <Calendar
        value={date}
        className="mx-auto bg-[#EAF5EB80] border-none"
        formatShortWeekday={formatShortWeekday}
        navigationLabel={({ date, label }) => label} 
        nextLabel={null} 
        prevLabel={null} 
      />
      <p className="mt-4">
        Selected Date: <strong>{date.toDateString()}</strong>
      </p>
    </div>
  );
}
