import React from "react";

const FieldView = ({ label, value }: any) => {
  return (
    <div className=" w-full flex flex-col gap-3 justify-center">
      <h4 className=" text-lg font-semibold capitalize">{label}</h4>
      <p className=" rounded-md p-[12px] bg-[#F1F1F1] text-[15px] font-normal focus:outline-none">
        {value}
      </p>
    </div>
  );
};

export default FieldView;
