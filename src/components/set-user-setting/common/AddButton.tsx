import React from "react";

const AddButton = ({ onClick, title }: any) => {
  return (
    <button
      className=" bg-[#C4B454] mt-4 text-white px-[18px] py-2 rounded-md "
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default AddButton;
