"use client";
import React, { useState } from 'react';
import { RxCaretUp, RxCaretDown } from 'react-icons/rx';

export default function ActivityLog({ logs }) {
  const [isLogOpen, setIsLogOpen] = useState(false);

  const toggleLog = () => {
    setIsLogOpen(!isLogOpen);
  };

  // Background color based on severity
  const getBgColor = (severity) => {
    switch (severity) {
      case 'low':
        return '#E6E6E2'; // Gray
      case 'medium':
        return '#007BFF'; // Blue
      case 'high':
        return '#FFC107'; // Yellow
      case 'critical':
        return '#319D38'; // Green
      default:
        return '#E6E6E2'; // Default to gray
    }
  };

  // Text color based on the background color
  const getTextColor = (severity) => {
    if (severity === 'medium' || severity === 'critical') {
      return 'text-white'; // White text for blue and green
    } else {
      return 'text-black'; // Black text for other colors
    }
  };

  return (
    <div className="gap-2 text-gray-600 flex flex-col  w-full px-4 py-2 pb-[17vh]">
      {/* Header with toggle button */}
      <div className="flex gap-10">
        <p>Activity Log:</p>
        <button onClick={toggleLog}>
          {isLogOpen ? (
            <RxCaretUp className="text-black text-2xl ease-in" />
          ) : (
            <RxCaretDown className="text-black text-2xl" />
          )}
        </button>
      </div>

      {/* Log entries */}
      <div
        className="gap-1 flex flex-col"
        style={{
          maxHeight: isLogOpen ? '300px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.5s ease',
        }}
      >
        {logs.map((log, index) => (
          <div
            key={index}
            className={`flex gap-2 rounded-md text-[0.9vw] w-fit px-4 ${getTextColor(log.severity)}`}
            style={{ backgroundColor: getBgColor(log.severity) }}
          >
            <p>{log.timestamp}:</p>
            <p>{log.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
