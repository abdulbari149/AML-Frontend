import React from "react";

interface IntputFieldUserType {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  onChange?: any;
  value?: any;
}

const InputFieldUser = ({
  label,
  type,
  placeholder,
  name,
}: IntputFieldUserType) => {
  return (
    <div className="w-full flex flex-col gap-1 justify-center">
      <label htmlFor={name} className=" text-sm font-normal text-[#000000BF]">
        {label}
      </label>
      <input
        className=" rounded-sm border border-dashed border-[#00000080] px-3 py-1 placeholder:text-sm placeholder:font-light focus:outline-none"
        type={type}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

export default InputFieldUser;
