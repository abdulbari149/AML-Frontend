import React from "react";

const FieldView = ({ label, value }: any) => {
  return (
    <div className=" w-full flex flex-col gap-3 justify-center">
      <h4 className=" text-lg font-semibold capitalize">{label}</h4>
      {typeof value === "object" ? (
        <div className="flex justify-around rounded-md px-3 bg-[#F1F1F1] text-[15px] font-normal focus:outline-none">
          <p className=" flex-1 py-3 border-r border-slate-400">
            <span className=" text-sm"> Greater Than : </span>
            <span className=" text-sm font-medium">{value?.greaterThan}</span>
          </p>
          <p className="flex-1 py-3 pl-3">
            <span className=" text-sm"> Less Than : </span>
            <span className=" text-sm font-medium">{value?.lessThan}</span>
          </p>
        </div>
      ) : (
        <p className=" rounded-md p-[12px] bg-[#F1F1F1] text-[15px] font-normal focus:outline-none">
          {value}
        </p>
      )}
    </div>
  );
};

export default FieldView;
