import React from "react";

interface IntputFieldSettingType {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  onChange?: any;
  value?: any;
}

const InputFieldSetting = ({
  label,
  type,
  placeholder,
  name,
}: IntputFieldSettingType) => {
  return (
    <div className=" w-full flex flex-col gap-1 justify-center">
      <label htmlFor={name} className=" text-sm font-medium">
        {label} <span className=" text-red-600 text-[18px]">*</span>
      </label>
      <input
        className=" rounded-md p-[10px] bg-[#F1F1F1] text-[15px] font-normal placeholder:text-sm placeholder:font-light focus:outline-none"
        type={type}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

export default InputFieldSetting;
