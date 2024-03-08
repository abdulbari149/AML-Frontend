import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdDelete, MdEdit } from "react-icons/md";
import AddButton from "./common/AddButton";
import DropDown from "./common/DropDown";
import SetUserInput from "./common/SetUserInput";

interface FormData {
  code: string;
  value: string;
}

const CodeNotUse = () => {
  const [selectValue, setSelectValue] = useState<string>("");
  const [openDropDown, setOpenDropDown] = useState<boolean>(false);

  const [formData, setFormData] = useState<FormData>({
    code: "",
    value: "",
  });
  const [codes, setCodes] = useState<FormData[]>([]);

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddCode = (): void => {
    if (formData.code.trim() === "") return;
    setCodes([...codes, formData]);
    setFormData({ code: "", value: "" });
    setSelectValue("");
  };

  return (
    <div className=" flex flex-col gap-5">
      <h3 className=" text-2xl font-semibold capitalize">Code Not To Use</h3>
      <div className="flex gap-12">
        <div className=" flex flex-col gap-2 items-start">
          <SetUserInput
            label={"Code"}
            type={"number"}
            placeholder={"e.g. 2148"}
            name={"code"}
            value={formData.code}
            onChange={handleFormChange}
            required={false}
          />
          <DropDown
            label={"Value"}
            formData={formData}
            setFormData={setFormData}
            Data={["Yes", "No"]}
            type={"value"}
            onClick={() => setOpenDropDown((prev) => !prev)}
            openDropDown={openDropDown}
          />
          <AddButton title={"Add"} onClick={handleAddCode} />
        </div>
        {codes.length > 0 && (
          <div className=" rounded-md h-[260px] w-[40%] bg-[#F1F1F1]">
            <div className="flex items-center rounded-tl-md rounded-tr-md py-2 text-white font-medium bg-[#47474761] sticky top-0">
              <h4 className="flex-1 text-center">Code</h4>
              <h4 className="flex-1 text-center">Value</h4>
              <h4 className="flex-1 text-center">Actions</h4>
            </div>

            <div className=" divide-y overflow-y-auto h-full">
              {codes.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-around items-center text-sm font-medium py-[6px] bg-[#f9f9f9] "
                >
                  <p className="flex-1 text-center">{item.code}</p>
                  <p className="flex-1 text-center">{item.value}</p>
                  <div className=" flex-1 justify-center flex gap-6">
                    <MdEdit className=" text-[17px] cursor-pointer" />
                    <MdDelete className=" text-[17px] cursor-pointer text-[#d11a2a]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeNotUse;
