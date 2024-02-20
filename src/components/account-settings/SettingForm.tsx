"use client";
import React from "react";

// SVGS
import uploadPlusSvg from "@/assets/svgs/uploadPlus.svg";
import Image from "next/image";
import InputFieldSetting from "./InputFieldSetting";

const SettingForm = () => {
  return (
    <>
      <form className=" flex flex-col gap-3">
        {/* main form */}
        <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-32">
          <div className=" w-full md:w-2/4 flex flex-col gap-2">
            {/* 1st row */}
            <div className=" flex flex-col md:flex-row gap-3">
              <InputFieldSetting
                label="First Name"
                type="text"
                placeholder="Imran"
                name="firstname"
              />
              <InputFieldSetting
                label="Last Name"
                type="text"
                placeholder="Khan"
                name="lastname"
              />
            </div>

            {/* 2nd row */}
            <div className=" flex flex-col md:flex-row gap-3">
              <InputFieldSetting
                label="Email"
                type="email"
                placeholder="name@example.com"
                name="email"
              />
              <InputFieldSetting
                label="Phone"
                type="number"
                placeholder="032121-85478"
                name="phone"
              />
            </div>

            {/* 3rd row */}
            <div className=" flex flex-col md:flex-row gap-3">
              <InputFieldSetting
                label="City"
                type="text"
                placeholder="karachi"
                name="city"
              />
              <InputFieldSetting
                label="Role"
                type="text"
                placeholder="owner"
                name="role"
              />
            </div>

            {/* about */}
            <div className=" flex flex-col gap-1">
              <label htmlFor="abour" className=" text-sm font-medium">
                About
              </label>
              <textarea
                name="about"
                placeholder="message"
                className="rounded-md p-[10px] bg-[#F1F1F1] text-[15px] font-normal placeholder:text-sm placeholder:font-light focus:outline-none"
                cols={10}
                rows={4}
              ></textarea>
            </div>
          </div>

          {/* image section */}
          <div
            className="flex flex-col justify-center items-center border-2 border-dashed border-[#000000] rounded-lg w-36 h-44 cursor-pointer"
            onClick={() => document.getElementById("account-logo")?.click()}
          >
            <input type="file" className="hidden" id="account-logo" />
            <Image src={uploadPlusSvg} alt="" />
            <button className=" text-xs font-semibold text-center text-[#F9F9F9] px-2 py-1 rounded-sm bg-[#000000]">
              Add Logo
            </button>
          </div>
        </div>

        {/* btn */}
        <button className=" w-fit text-xs font-medium text-center text-[#F9F9F9] px-[14px] py-[10px] rounded-md bg-[#000000]">
          Save Changes
        </button>
      </form>
    </>
  );
};

export default SettingForm;
