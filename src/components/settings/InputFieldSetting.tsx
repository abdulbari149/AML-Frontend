import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface IntputFieldSettingProps<TValue extends string | number >{
  label: string;
  type: string;
  name: string;

  placeholder: string;
  error?: string;
  onChange: (text: TValue) => void;
  value: TValue;
}

function InputFieldSetting<TValue extends string | number>(props: IntputFieldSettingProps<TValue>) {
  const {
    label,
    type,
    placeholder,
    error,
    name,
    onChange,
    value
  } = props

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
        value={value}
        onChange={(e) => {
          onChange(e.target.value as TValue)
        }}
      />
      {error && <p className=" text-[12px] pt-1 text-red-500">{error}</p>}
    </div>
  );
};

export default InputFieldSetting;
