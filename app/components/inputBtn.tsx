"use client";
import { useState } from "react";

const InputBtn = ({
  id,
  label,
  placeholder,
  value, // Add value prop
  onChange, // Add onChange prop
  type = "text",
  className = "",
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className={` ${className}`}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        id={id}
        value={value} // Set the value of the input
        onChange={onChange} // Handle the change event
        style={{
          width: "100%",
          border: "1px solid",
          borderRadius: "6px",
          outline: "none",
          transition: "border-color 0.3s ease",
          borderColor: focused ? "black" : "lightgray",
        }}
        className={`mt-1 block text-[0.9vw] h-[2.6vw] pl-4`}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputBtn;
