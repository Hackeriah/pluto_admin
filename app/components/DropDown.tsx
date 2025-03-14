'use client';
import { useState, useEffect, useRef } from "react";
import { FaCaretDown } from "react-icons/fa6";

interface Area {
  label: string;
  defaultValue: string;
  options: string[];
}

interface DropDownProps {
  areasToDisplay: Area[];
}

const DropDown: React.FC<DropDownProps> = ({ areasToDisplay }) => {
  const [isOpen, setIsOpen] = useState<{ [key: number]: boolean }>({});
  
  
  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleDropdown = (index: number) => {
    setIsOpen((prevState) => ({
      ...prevState, 
      [index]: !prevState[index],
    }));
  };

  const handleClickOutside = (event: MouseEvent) => {
    dropdownRefs.current.forEach((ref, index) => {
      if (ref && !ref.contains(event.target as Node)) {
        setIsOpen((prevState) => ({
          ...prevState,
          [index]: false,
        }));
      }
    });
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex flex-wrap gap-[2.8vw] items-center">
      {areasToDisplay.map((area, index) => (
        <div
          key={index}
          className="flex gap-[1.5vw]"
          ref={(el) => {
            dropdownRefs.current[index] = el;
          }} 
        >
          <div>
            <div
              onClick={() => toggleDropdown(index)}
              className="py-[0.2vw] px-4 flex text-[1.1vw] gap-[0.8vw] items-center cursor-pointer border w-fit rounded-2xl"
            >
              <p>{area.label}:</p>
              <p className="font-[600]">{area.defaultValue}</p>
              <FaCaretDown className="text-lg" />
            </div>
            {isOpen[index] && (
              <ul className=" bg-white shadow-xl absolute mt-[1vh] w-[10vw] border border-gray-400 rounded">
                {area.options.map((option, idx) => (
                  <li
                    key={idx}
                    className="px-4 py-2 cursor-pointer hover:bg-cDarkGreen hover:text-white"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DropDown;
