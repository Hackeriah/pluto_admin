"use client"
import { useState, useRef, useEffect } from 'react';
import { RxCaretUp, RxCaretDown } from "react-icons/rx";

const CustomDropDown = ({ options, buttonLabel, label, labelFor, className = "", onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option.label);
    if (onSelect) {
      onSelect(option); // Trigger the passed onSelect function from parent
    }
    setIsOpen(false); // Close the dropdown after selecting
  };

  return (
    <div className={`${className} text-[1vw] text-#BFBFBC`} ref={dropdownRef}>
      <label
        htmlFor={labelFor}
        className="block cursor-pointer text-sm font-medium mb-1 text-gray-700"
      >
        {label}
      </label>
      <div className="relative">
        <button
          id={labelFor}
          className="w-full placeholder:text-gray-400 items-center flex justify-between px-4 text-[0.8vw] py-[0.4vw] bg-white border rounded-md shadow-sm focus:outline-none focus:border-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption || buttonLabel}
          <RxCaretDown className="text-black text-2xl" />
        </button>
        {isOpen && (
          <div className="absolute z-10 text-[1vw] mt-2 w-full bg-white border rounded-md shadow-lg">
            {options.map((option, index) => (
              <div
                key={index}
                onClick={() => handleOptionClick(option)}
                className="cursor-pointer px-4 py-2 hover:bg-gray-100"
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomDropDown;
