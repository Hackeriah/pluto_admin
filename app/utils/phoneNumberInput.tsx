import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const PhoneNumberInput = ({className = "",id,label}) => {
  const [phone, setPhone] = useState('');
  const [focused, setFocused] = useState(false);

  return (
    <div className={` ${className}`}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <PhoneInput
        country="us"
        value={phone}
        onChange={setPhone}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder='Phone No'
        inputStyle={{
          border: '1px solid',
          borderRadius: '6px',
          outline: 'none',
          transition: 'border-color 0.3s ease',
          borderColor: focused ? 'black' : 'lightgray', 
          width: '100%',
        }}
        containerStyle={{width:"100%",}}
        buttonStyle={{ background:"transparent",border:"1px solid",borderColor: focused ? 'black' : 'lightgray',}}
      />
    </div>
  );
};

export default PhoneNumberInput;
