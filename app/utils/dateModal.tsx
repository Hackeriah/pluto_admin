import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerForm = ({ className = "",label,placeHolder }) => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={` flex flex-col justify-between w-[49%] ${className} `}>
      <label
        htmlFor="dob"
        className="block text-[1vw] text-gray-600 font-medium"
      >
        {label}
      </label>
      <Controller
        name="dob"
        control={control}
        render={({ field }) => (
          <DatePicker selected={field.value} onChange={(date) => field.onChange(date)} dateFormat="MMMM d, yyyy" placeholderText={placeHolder} className={`py-[0.5vw]  w-full items-center flex px-3 border text-gray-500 text-[0.9vw] border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black bg-white `} />
        )}
      />
      {/* <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button> */}
    </form>
  );
};

export default DatePickerForm;
