import React from "react";

const ButtonPanel = ({ buttons }) => {
  return (
    <div className="w-full h-fit flex justify-end items-center shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1),0_-4px_6px_-2px_rgba(0,0,0,0.05)]">
      <div className="flex gap-4 pr-[2vw] py-[1vw] items-center">
        {buttons.map((button, index) => (
          <button
            key={index}
            className={`px-2 py-1 text-[0.9vw] rounded-lg ${button.disabled ? "opacity-50 cursor-not-allowed" : ""}`}
            style={{ backgroundColor: button.bgColor, color: button.textColor }}
            onClick={button.onClick}
            disabled={button.disabled || false}
          >
            {button.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonPanel;
