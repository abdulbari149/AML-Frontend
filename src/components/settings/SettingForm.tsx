"use client";
import React, { useState } from "react";
import InputFieldSetting from "./InputFieldSetting";

const SettingForm = () => {
  const [bankName, setBankName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <>
      <form className="flex flex-col gap-3">
        {/* main form */}
        <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-32">
          <div className="w-full md:w-2/4 flex flex-col gap-3">
            {/* 1st row */}
            <div className="flex flex-col md:flex-row gap-3">
              <InputFieldSetting
                label="Bank Name"
                type="text"
                placeholder="ABC Bank"
                name="bankname"
                value={bankName}
                onChange={setBankName}
              />
            </div>

            {/* 2nd row */}
            <div className="flex flex-col md:flex-row gap-3">
              <InputFieldSetting
                label="Email"
                type="email"
                placeholder="name@example.com"
                name="email"
                value={email}
                onChange={setEmail}
              />
              <InputFieldSetting
                label="Phone"
                type="number"
                placeholder="032121-85478"
                name="phone"
                value={phone}
                onChange={setPhone}
              />
            </div>
          </div>

          {/* image section */}
          <div
            className="flex flex-col justify-center items-center border-2 border-dashed border-[#000000] rounded-lg w-36 h-44 cursor-pointer"
            onClick={() => document.getElementById("account-logo")?.click()}
          >
            <input
              type="file"
              className="items-start hidden w-full"
              id="account-logo"
            />
            <button className="text-xs font-semibold text-center text-[#F9F9F9] px-2 py-1 rounded-sm bg-[#000000]">
              Add Logo
            </button>
          </div>
        </div>

        {/* btn */}
        <button
          className="w-fit text-xs font-medium text-center text-[#F9F9F9] px-[14px] py-[10px] rounded-md bg-[#000000]"
          type="submit"
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Changes"}
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </>
  );
};

export default SettingForm;
