import React from "react";

const SetUserInput = ({
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
  required,
  formData,
  setFormData,
  fieldType,
}: any) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    fieldType
      ? setFormData((prevFormData: any) => ({
          ...prevFormData,
          [fieldType]: {
            ...prevFormData[fieldType],
            [name]: parseInt(value),
          },
        }))
      : setFormData((prevFormData: any) => ({
          ...prevFormData,
          [name]: parseInt(value),
        }));
  };

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
        value={value}
        onChange={onChange ? onChange : handleChange}
      />
    </div>
  );
};

export default SetUserInput;
