import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdDelete, MdEdit } from "react-icons/md";

interface FormData {
  highRiskCode: string;
  value: string;
}

const HighRisk = () => {
  const [selectValue, setSelectValue] = useState<string>("");
  const [openDropDown, setOpenDropDown] = useState<boolean>(false);

  const [formData, setFormData] = useState<FormData>({
    highRiskCode: "",
    value: "",
  });
  const [highRiskCodes, setHighRiskCodes] = useState<FormData[]>([]);

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddCode = (): void => {
    if (formData.highRiskCode.trim() === "") return;
    setHighRiskCodes([...highRiskCodes, formData]);
    setFormData({ highRiskCode: "", value: "" });
    setSelectValue("");
  };

  return (
    <div className=" flex flex-col gap-5">
      <h3 className=" text-2xl font-semibold capitalize">
        High Risk Categories
      </h3>
      <div className="flex gap-12">
        <div className=" flex flex-col gap-2 items-start">
          <div className=" w-[300px] flex flex-col gap-2 justify-center">
            <label htmlFor={"highRiskCode"} className=" text-base font-medium">
              {"Category"}
            </label>
            <input
              className=" rounded-md p-[10px] bg-[#F1F1F1] text-[15px] font-normal placeholder:text-sm placeholder:font-light focus:outline-none"
              type="number"
              placeholder={"e.g. 2148"}
              name={"highRiskCode"}
              value={formData.highRiskCode}
              onChange={handleFormChange}
            />
          </div>
          <div className="flex flex-col gap-2 w-[300px] ">
            <span className=" text-base font-medium">Value</span>
            <div className="relative flex flex-col gap-2 w-[300px]">
              <button
                className=" relative flex justify-between text-left rounded-lg bg-[#F1F1F1] text-sm font-medium py-[11px] px-4 w-full"
                onClick={() => setOpenDropDown((prev) => !prev)}
              >
                <span>{selectValue ? selectValue : "Select Code Value"}</span>
                {openDropDown ? (
                  <IoIosArrowUp className=" absolute right-[14px] top-[12px] text-lg cursor-pointer" />
                ) : (
                  <IoIosArrowDown className=" absolute right-[14px] top-[12px] text-lg cursor-pointer" />
                )}
              </button>
              <div
                className={`${
                  openDropDown ? "block" : "hidden"
                }  top-12 rounded-lg z-50 absolute w-[300px] h-fit py-[6px] bg-[#f9f9f9] scroll-userinfo-dropdown `}
              >
                {["Yes", "No"].map((item, i) => (
                  <p
                    key={i}
                    className=" py-2 px-3 font-medium text-[13px] hover:bg-[#d9d9d9] cursor-pointer "
                    onClick={() => {
                      setSelectValue(item);
                      setOpenDropDown((prev) => !prev);
                      setFormData({ ...formData, value: item });
                    }}
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <button
            className=" bg-[#C4B454] mt-4 text-white px-[18px] py-2 rounded-md "
            onClick={handleAddCode}
          >
            {"Add"}
          </button>
        </div>
        {highRiskCodes.length > 0 && (
          <div className=" rounded-md h-[260px] w-[40%] bg-[#F1F1F1]">
            <div className="flex items-center rounded-tl-md rounded-tr-md py-2 text-white font-medium bg-[#47474761] sticky top-0">
              <h4 className="flex-1 text-center">High Risk Codes</h4>
              <h4 className="flex-1 text-center">Value</h4>
              <h4 className="flex-1 text-center">Actions</h4>
            </div>

            <div className=" divide-y overflow-y-auto h-full">
              {highRiskCodes.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-around items-center text-sm font-medium py-[6px] bg-[#f9f9f9] "
                >
                  <p className="flex-1 text-center">{item.highRiskCode}</p>
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

export default HighRisk;
