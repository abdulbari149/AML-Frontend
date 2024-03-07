import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const platformDatabase = ["Progress", "Scion"];
const userEmails = [
  { id: 1, email: "daniyalshiekh166@gmail.com" },
  { id: 2, email: "daniyalshiekh@gmail.com" },
  { id: 3, email: "daniyal@gmail.com" },
  { id: 4, email: "daniyal123@gmail.com" },
  { id: 5, email: "daniy@gmail.com" },
  { id: 6, email: "daniyalsaleem@gmail.com" },
];

const UserInformation = () => {
  const [selectPlatform, setSelectPlatform] = useState<string>("");
  const [selectUserEmail, setSelectUserEmail] = useState<string>("");
  const [openDropDown, setOpenDropDown] = useState<boolean[]>([false, false]);
  const handleDropDownClick = (index: number) => {
    let newOpenDropDown: boolean[] = [];
    newOpenDropDown = openDropDown.map((item, i) => {
      return i === index ? !openDropDown[i] : false;
    });
    setOpenDropDown(newOpenDropDown);
  };

  return (
    <div className=" flex flex-col gap-5">
      <h3 className=" text-2xl font-semibold">User Information</h3>
      <div className=" flex flex-col gap-3 w-[270px] ">
        <span className=" text-base font-medium">Select Platform</span>
        <button
          className=" relative flex justify-between text-left rounded-lg bg-[#d9d9d9] text-sm font-medium py-[15px] px-4 w-full"
          onClick={() => handleDropDownClick(0)}
        >
          <span>
            {selectPlatform ? selectPlatform : "Select Platform Database"}
          </span>
          {openDropDown[0] ? (
            <IoIosArrowUp className=" absolute right-[14px] top-[15px] text-lg cursor-pointer" />
          ) : (
            <IoIosArrowDown className=" absolute right-[14px] top-[15px] text-lg cursor-pointer" />
          )}
        </button>
        <div
          className={`${
            openDropDown[0] ? "block" : "hidden"
          }  top-14 rounded-lg z-50  w-[270px] h-fit py-[6px] bg-[#f9f9f9] scroll-userinfo-dropdown `}
        >
          {platformDatabase.map((item, i) => (
            <p
              key={i}
              className=" py-2 px-3 capitalize font-medium text-[13px] hover:bg-[#d9d9d9] cursor-pointer "
              onClick={() => {
                setSelectPlatform(item);
                handleDropDownClick(0);
              }}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
      <div className=" flex flex-col gap-3 w-[270px] ">
        <span className=" text-base font-medium">Select User Email</span>
        <button
          className=" relative flex justify-between text-left rounded-lg bg-[#d9d9d9] text-sm font-medium py-[15px] px-4 w-full"
          onClick={() => handleDropDownClick(1)}
        >
          <span>{selectUserEmail ? selectUserEmail : "Select User Email"}</span>
          {openDropDown[1] ? (
            <IoIosArrowUp className=" absolute right-[14px] top-[15px] text-lg cursor-pointer" />
          ) : (
            <IoIosArrowDown className=" absolute right-[14px] top-[15px] text-lg cursor-pointer" />
          )}
        </button>
        <div
          className={`${
            openDropDown[1] ? "block" : "hidden"
          }  top-14 rounded-lg z-50  w-[270px] h-[160px] py-[6px] bg-[#f9f9f9] scroll-userinfo-dropdown `}
        >
          {userEmails.map((item, i) => (
            <p
              key={i}
              className=" py-2 px-3 font-medium text-[13px] hover:bg-[#d9d9d9] cursor-pointer "
              onClick={() => {
                setSelectUserEmail(item.email);
                handleDropDownClick(1);
              }}
            >
              {item.email}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserInformation;
