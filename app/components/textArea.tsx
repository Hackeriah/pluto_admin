"use client";
import { useState } from "react";

const TextArea = ({
  id,
  label,
  placeholder,
  type = "text",
  className = "",
}) => {
  const [phone, setPhone] = useState("");
  const [focused, setFocused] = useState(false);

  return (
    <div className={`h-[100%] ${className}`}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <textarea
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        id={id}
        style={{
          width: "100%",
          border: "1px solid",
          borderRadius: "6px",
          outline: "none",
          transition: "border-color 0.3s ease",
          borderColor: focused ? "black" : "lightgray",
        }}
        className="mt-1 block text-[0.9vw] h-[5vw] pl-4 pt-2 "
        // className="mt-1 block text-[0.9vw] w-full h-[3vw] rounded-md border-[1px]  border-gray-300 shadow-sm focus:border-black focus:ring-black px-2 "
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextArea;
