import React from "react";

const SetUserInput = ({
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
  required,
}: any) => {
  return (
    <div className=" w-[270px] flex flex-col gap-2 justify-center">
      <label htmlFor={name} className=" text-base font-medium">
        {label}{" "}
        {required && <span className=" text-red-600 text-[18px]">*</span>}
      </label>
      <input
        className=" rounded-md p-[10px] bg-[#F1F1F1] text-[15px] font-normal placeholder:text-sm placeholder:font-light focus:outline-none"
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export default SetUserInput;
