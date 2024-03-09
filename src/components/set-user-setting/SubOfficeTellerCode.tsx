import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdDelete, MdEdit } from "react-icons/md";
import DropDown from "./common/DropDown";
import AddButton from "./common/AddButton";
import SetUserInput from "./common/SetUserInput";

interface FormData {
  code: string;
  description: string;
  value: string;
}

const SubOfficeTellerCode = ({
  formData,
  setFormData,
}: SetUserReportFormType) => {
  const [openDropDown, setOpenDropDown] = useState<boolean>(false);

  const [officeTellerData, setOfficeTellerData] = useState<FormData>({
    code: "",
    description: "",
    value: "",
  });
  const [officeTellerCodes, setOfficeTellerCodes] = useState<FormData[]>([]);

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    const newValue = name === "description" ? value : parseInt(value);
    setOfficeTellerData({ ...officeTellerData, [name]: newValue });
  };

  const handleAddCode = (): void => {
    if (officeTellerData.code === null) return;
    setOfficeTellerCodes([...officeTellerCodes, officeTellerData]);
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      ["subOfficeTellerCode"]: [...officeTellerCodes, officeTellerData],
    }));
    setOfficeTellerData({ code: "", description: "", value: "" });
  };

  return (
    <div className=" flex flex-col gap-5">
      <h3 className=" text-2xl font-semibold capitalize">
        Sub Office Teller Code
      </h3>
      <div className="flex gap-12">
        <div className=" flex flex-col gap-2 items-start">
          <div className=" flex items-center gap-4">
            <SetUserInput
              label={"Code"}
              type={"number"}
              placeholder={"e.g. 2148"}
              name={"code"}
              value={officeTellerData.code}
              onChange={handleFormChange}
              fieldType={"subOfficeTellerCode"}
            />
            <SetUserInput
              label={"Description"}
              type={"text"}
              placeholder={"e.g. text"}
              name={"description"}
              value={officeTellerData.description}
              onChange={handleFormChange}
              fieldType={"subOfficeTellerCode"}
            />
          </div>

          <DropDown
            label={"Value"}
            type={"value"}
            Data={["Yes", "No"]}
            formData={officeTellerData}
            setFormData={setOfficeTellerData}
            onClick={() => setOpenDropDown((prev) => !prev)}
            openDropDown={openDropDown}
          />
          <AddButton title={"Add"} onClick={handleAddCode} />
        </div>
        {officeTellerCodes.length > 0 && (
          <div className=" rounded-md h-[260px] w-[40%] bg-[#F1F1F1]">
            <div className="flex items-center rounded-tl-md rounded-tr-md py-2 text-white font-medium bg-[#47474761] sticky top-0">
              <h4 className="flex-1 text-center">Code</h4>
              <h4 className="flex-1 text-center">Description</h4>
              <h4 className="flex-1 text-center">Value</h4>
              <h4 className="flex-1 text-center">Actions</h4>
            </div>

            <div className=" divide-y overflow-y-auto h-full">
              {officeTellerCodes.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-around items-center text-sm font-medium py-[6px] bg-[#f9f9f9] "
                >
                  <p className="flex-1 text-center">{item.code}</p>
                  <p className="flex-1 text-center">{item.description}</p>
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

export default SubOfficeTellerCode;
