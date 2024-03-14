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
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

function InputFieldSetting<TValue extends string | number>(props: IntputFieldSettingProps<TValue>) {
  const {
    label,
    type,
    placeholder,
    error,
    name,
    onChange,
    value,
    disabled,
    leftIcon,
    rightIcon
  } = props

  return (
    <div className=" w-full flex flex-col gap-1 justify-center">
      <label htmlFor={name} className=" text-sm font-medium">
        {label} <span className=" text-red-600 text-[18px]">*</span>
      </label>
      <div className="rounded-md w-full relative py-[10px] px-[10px] bg-[#F1F1F1]">
        {leftIcon && <div className="absolute left-2 top-[50%] translate-y-[-50%]">{leftIcon}</div>}

        <input
          className="text-[15px] w-full font-normal px-[5px] bg-[#F1F1F1] w-fit placeholder:text-sm placeholder:font-light focus:outline-none"
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={(e) => {
            onChange(e.target.value as TValue)
          }}
          disabled={disabled}
        />

        {rightIcon && <div className="absolute right-2 top-[50%] translate-y-[-50%] px-2">{rightIcon}</div>}
      </div>
      {error && <p className=" text-[12px] pt-1 text-red-500">{error}</p>}
    </div>
  );
};

export default InputFieldSetting;
