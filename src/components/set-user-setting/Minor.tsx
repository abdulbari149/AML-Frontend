import React from "react";

const Minor = () => {
  return (
    <div className=" flex flex-col gap-6">
      <h3 className=" text-2xl font-semibold capitalize">Minor</h3>
      <div className="flex flex-col gap-5">
        <div className=" w-[30%] flex flex-col gap-2 justify-center">
          <label htmlFor={"minor"} className=" text-base font-medium">
            {"Minor is under (Less Than)"}
            <span className=" text-red-600 text-[18px]">*</span>
          </label>
          <input
            className=" rounded-md p-[10px] bg-[#F1F1F1] text-[15px] font-normal placeholder:text-sm placeholder:font-light focus:outline-none"
            type="number"
            placeholder={"e.g. 25"}
            name={"minor"}
          />
        </div>
      </div>
    </div>
  );
};

export default Minor;
