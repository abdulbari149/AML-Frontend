import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdDelete, MdEdit } from "react-icons/md";
import AddButton from "./common/AddButton";
import DropDown from "./common/DropDown";
import SetUserInput from "./common/SetUserInput";
import { handleEditField } from "./actions/edit";
import { handleDeleteField } from "./actions/delete";

interface FormData {
  code: string | null;
  value: string;
}

const CodeNotUse = ({ formData, setFormData }: SetUserReportFormType) => {
  const [openDropDown, setOpenDropDown] = useState<boolean>(false);

  const [codeNotUseData, setCodeNotUseData] = useState<FormData>({
    code: "",
    value: "",
  });
  const [codes, setCodes] = useState<FormData[]>(formData.codeNotToUse);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCodeNotUseData({ ...codeNotUseData, [name]: parseInt(value) });
  };

  const handleAddCode = (): void => {
    if (codeNotUseData.code === null) return;
    setCodes([...codes, codeNotUseData]);
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      ["codeNotToUse"]: [...codes, codeNotUseData],
    }));
    setCodeNotUseData({ code: "", value: "" });
  };

  return (
    <div className=" flex flex-col gap-5">
      <h3 className=" text-2xl font-semibold capitalize">Code Not To Use</h3>
      <div className="flex gap-12">
        <div className=" flex flex-col gap-2 items-start">
          <SetUserInput
            label={"Code"}
            type={"number"}
            name={"code"}
            placeholder={"e.g. 2148"}
            value={codeNotUseData.code}
            onChange={handleFormChange}
            fieldType={"codeNotToUse"}
          />
          <DropDown
            label={"Value"}
            type={"value"}
            objectProp={"value"}
            Data={["Yes", "No"]}
            formData={codeNotUseData}
            setFormData={setCodeNotUseData}
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
                    <MdEdit
                      className=" text-[17px] cursor-pointer"
                      onClick={() =>
                        handleEditField(
                          item,
                          setCodeNotUseData,
                          codes,
                          setCodes,
                          setFormData,
                          "codeNotToUse"
                        )
                      }
                    />
                    <MdDelete
                      className=" text-[17px] cursor-pointer text-[#d11a2a]"
                      onClick={() =>
                        handleDeleteField(
                          i,
                          codes,
                          setCodes,
                          setFormData,
                          "codeNotToUse"
                        )
                      }
                    />
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
