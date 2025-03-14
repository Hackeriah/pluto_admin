import { useState, useEffect, useRef } from "react";
import { RxCaretDown } from "react-icons/rx";


interface SelectDDProps {
  label: string;
  options: string[];
  option:string;
}

export default function SelectDD({ label, options, option }: SelectDDProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="flex flex-col gap-1" ref={dropdownRef}>
      <p>{label}</p>

      <div className="w-fit">
        <button
          type="button"
          className="inline-flex gap-2 justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none items-center"
          onClick={toggleDropdown}
        >
          {option}
          <RxCaretDown className="text-2xl" />
        </button>
      </div>

      {isOpen && (
        <div className="absolute bg-white mt-[11vh] w-[10vw] z-[9] border border-gray-300 divide-y divide-gray-100 rounded-md shadow-lg">
          <div className="py-1">
            {options.map((option, index) => (
              <button
                key={index}
                className="block px-4 py-2 text-sm text-gray-700 hover:text-white hover:bg-cDarkGreen w-full text-left"
                
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
