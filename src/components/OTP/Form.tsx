"use client";
import React, { useState } from "react";
import Link from "next/link";

// HELPERS
import { errorToastify, succesToastify } from "@/helpers/toast";

const Form = () => {
  const [otp, setOtp] = useState<number>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setOtp(parseInt(value));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (otp) {
      console.log(otp);
      succesToastify("OTP verified successfully.");
    } else {
      errorToastify("Invalid OTP");
    }
  };

  return (
    <>
      <form className=" w-full flex flex-col gap-3" onSubmit={handleSubmit}>
        <div className=" w-full flex flex-col gap-1">
          <label
            htmlFor="otp"
            className=" md:text-[15px] text-xs font-semibold text-[#000000BF]"
          >
            OTP
          </label>
          <div className=" flex gap-2">
            <input
              className="w-full bg-[#F9F9F9] py-[12px] px-[14px] rounded-md text-[##00000080] md:text-sm text-xs focus:outline-none"
              type="number"
              name="otp"
              id="otp"
              placeholder="6 digit code"
              value={otp}
              onChange={handleChange}
            />
          </div>
        </div>
        <Link href={"#"} className=" md:text-sm text-[10px] text-end">
          Resend again?
        </Link>
        <button
          type="submit"
          className=" w-fit mx-auto md:text-base text-sm bg-[#C4B454] text-[#fff] font-medium rounded-md mt-4 py-2 px-10"
        >
          Confirm
        </button>
      </form>
    </>
  );
};

export default Form;
