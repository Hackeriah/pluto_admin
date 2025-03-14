import ActionToolBar from "./actionToolBar";
import SelectDD from "./selectDD";


interface DropdownData {
  label: string;
  options: string[];
  option: string;
}

interface DropdownContainerProps {
  buttons: {
    label: string;
    icon?: React.ReactNode;
    action: () => void;
    className?: string;
    hide?: boolean; 
  }[];
  dropdownData: DropdownData[]; 
}

const DataControlPanel: React.FC<DropdownContainerProps> = ({
  buttons,
  dropdownData,
  onToggleView,
  showToggleButton = false
}) => {
  
  const allButtons = [
    
    ...buttons, 
  ];

  return (
    <div className="flex h-fit flex-col gap-4 pb-8">
      <div className="flex rounded-xl border w-fit p-4 gap-4">
        {dropdownData.map((dropdown, index) => (
          <SelectDD
            key={index}
            label={dropdown.label}
            options={dropdown.options}
            option={dropdown.option}
          />
        ))}
      </div>

      <ActionToolBar buttons={allButtons} onToggleView={onToggleView} showToggleButton={showToggleButton} />
    </div>
  );
};

export default DataControlPanel;
