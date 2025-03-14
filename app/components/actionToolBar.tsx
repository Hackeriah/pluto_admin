import { useState } from "react";
import SearchBar from "./searchbar";
import { ImList } from "react-icons/im";  
import { IoGridSharp } from "react-icons/io5"; 

interface ButtonConfig {
  label?: string;
  icon?: React.ReactNode;
  action: () => void;
  className?: string;
  hide?: boolean;
}
interface ActionToolBarProps {
  buttons: ButtonConfig[];
  onToggleView?: (isListView: boolean) => void; 
  showToggleButton?: boolean; 
}

export default function ActionToolBar({
  buttons,
  onToggleView,
  showToggleButton = true, 
}: ActionToolBarProps) {
  const [isListView, setIsListView] = useState(true);
  
  const toggleView = () => {
    const newIsListView = !isListView;
    setIsListView(newIsListView); 
    if (onToggleView) {
      onToggleView(newIsListView); 
    }
    buttons[0]?.action();
  };

  return (
    <div className="flex w-full items-center justify-between">
      <SearchBar />
      <div className="flex w-1/2 justify-between">
        {/* Conditionally render the toggle button based on showToggleButton prop/ will come back to this later */}
        {showToggleButton && buttons.length > 0 && !buttons[0].hide && (
          <button
            onClick={toggleView}
            className={buttons[0].className || "default-button-class"}
          >
            {isListView ? (
              <ImList className="text-2xl text-cDarkGreen" />
            ) : (
              <IoGridSharp className="text-2xl text-cDarkGreen" />
            )}
            {buttons[0].label && <span>{buttons[0].label}</span>}
          </button>
        )}
        <div className="flex gap-[1.2vw] items-center justify-end w-full h-fit">
          {buttons.slice(1).map((button, index) =>
            !button.hide ? (
              <button
                key={index}
                onClick={button.action}
                className={button.className || "default-button-class"}
              >
                {button.icon && <span>{button.icon}</span>}
                {button.label && <span>{button.label}</span>}
              </button>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}
