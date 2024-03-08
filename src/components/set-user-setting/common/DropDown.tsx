import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const DropDown = ({
  label,
  formData,
  setFormData,
  Data,
  type,
  onClick,
  objectProp,
  openDropDown,
}: any) => {
  console.log(formData);
  return (
    <>
      <div className="flex flex-col gap-3 w-[270px]">
        <span className="text-base font-medium">{label}</span>
        <button
          className="relative flex justify-between text-left rounded-lg bg-[#d9d9d9] text-sm font-medium py-[15px] px-4 w-full"
          onClick={onClick}
        >
          <span>
            {formData[type] ? formData[type] : label}
          </span>
          {openDropDown ? (
            <IoIosArrowUp className="absolute right-[14px] top-[15px] text-lg cursor-pointer" />
          ) : (
            <IoIosArrowDown className="absolute right-[14px] top-[15px] text-lg cursor-pointer" />
          )}
        </button>
        <div
          className={`${
            openDropDown ? "block" : "hidden"
          } top-14 rounded-lg z-50 w-[270px] h-fit py-[6px] bg-[#f9f9f9]  overflow-y-auto scroll-userinfo-dropdown`}
        >
          {Data.map((item: any, i: number) => (
            <p
              key={i}
              className="py-2 px-3 font-medium text-[13px] hover:bg-[#d9d9d9] cursor-pointer"
              onClick={() => {
                onClick();
                if (typeof item === "object") {
                  setFormData({ ...formData, [type]: item[objectProp] });
                } else {
                  setFormData({ ...formData, [type]: item });
                }
              }}
            >
              {typeof item === "object" ? item[objectProp] : item}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default DropDown;
