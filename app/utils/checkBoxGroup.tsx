import { useState } from 'react';

const CheckboxGroup = ({ label = 'Options', checkboxOptions = [] }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="text-[0.9vw] w-full">
      {/* Label */}
      <p className="text-[1.2vw] font-medium mb-2">{label}</p>

      {/* Dynamically Generated Checkbox Inputs */}
      <div className="flex items-center justify-center space-x-[0.6vw]">
        {checkboxOptions.map((option, index) => (
          <label key={index} className="flex text-black items-center space-x-2">
            <input
              type="checkbox"
              value={option.value}
              name="option"
              checked={selectedOption === option.value}
              onChange={handleOptionSelect}
              className={`form-checkbox shadow-xl ring-1 ${option.ringColor} checked:bg-red-500 checked:border-red-500`}
              style={{ borderColor: 'red' }} // Optional: still sets a static red border
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CheckboxGroup;
