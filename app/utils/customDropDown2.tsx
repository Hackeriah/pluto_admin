import React, { useState, useEffect, useRef } from "react";
import { FaCaretDown } from "react-icons/fa";

const CustomDropdown2 = ({ 
  className = "", 
  selectedOption, 
  setSelectedOption, 
  options = [], 
  placeholder = "Select an option",
  disabled = false
}) => {
  const [focused, setFocused] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={` rounded-lg ${className}`} ref={dropdownRef}>
      <div className="relative  rounded-lg">
        {/* Display selected option */}
        <div
          className={`py-1 px-2 border font-bold text-gray-800 items-center border-gray-300 flex gap-4 justify-between rounded-xl cursor-pointer text-sm w-full ${
            focused ? "border-black" : "border-lightgray"
          } ${disabled ? "bg-gray-200 cursor-not-allowed" : ""}`}
          onClick={() => !disabled && setFocused(!focused)}
        >
          {selectedOption || placeholder}
          <FaCaretDown className="text-black text-md" />
        </div>

        {/* Custom dropdown */}
        {focused && !disabled && (
          <ul className="absolute z-10 mt-1 w-full max-h-40 overflow-y-auto border border-gray-300 rounded-md bg-white shadow-lg">
            {options.map((option) => (
              <li
                key={option}
                className="cursor-pointer hover:bg-gray-100 p-2 text-sm"
                onClick={() => {
                  setSelectedOption(option);
                  setFocused(false);
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CustomDropdown2;
