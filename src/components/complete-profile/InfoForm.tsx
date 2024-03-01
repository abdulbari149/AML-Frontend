"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// HELPERS
import { errorToastify, succesToastify } from "@/helpers/toast";

interface InfoFormData {
  formData: CompleteProfileType;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const InfoForm = ({ formData, handleChange, handleSubmit }: InfoFormData) => {
  return (
    <form className=" w-full flex flex-col gap-3" onSubmit={handleSubmit}>
      <div className=" flex flex-col gap-1">
        <label
          htmlFor="branch"
          className=" md:text-[15px] text-xs font-semibold text-[#000000BF]"
        >
          Branch
        </label>
        <input
          className="w-full bg-[#F9F9F9] py-[12px] px-[14px] rounded-md text-[##00000080] md:text-sm text-xs focus:outline-none"
          type="branch"
          name="branch"
          id="branch"
          placeholder="22051"
          value={formData.branch}
          onChange={handleChange}
        />
      </div>
      <div className=" flex flex-col gap-1">
        <label
          htmlFor="address"
          className=" md:text-[15px] text-xs font-semibold text-[#000000BF]"
        >
          Address
        </label>
        <input
          className="w-full bg-[#F9F9F9] py-[12px] px-[14px] rounded-md text-[##00000080] md:text-sm text-xs focus:outline-none"
          type="address"
          name="address"
          id="address"
          placeholder="Street No. 12, Sector 15-C, Karachi"
          value={formData.address}
          onChange={handleChange}
        />
      </div>
      <div className=" flex flex-col gap-1">
        <label
          htmlFor="country"
          className=" md:text-[15px] text-xs font-semibold text-[#000000BF]"
        >
          Country
        </label>
        <input
          className="w-full bg-[#F9F9F9] py-[12px] px-[14px] rounded-md text-[##00000080] md:text-sm text-xs focus:outline-none"
          type="country"
          name="country"
          id="country"
          placeholder="Pakistan"
          value={formData.country}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className=" w-fit mx-auto md:text-base text-sm bg-[#C4B454] text-[#fff] font-medium rounded-md mt-4 py-2 px-10"
      >
        Continue
      </button>
    </form>
  );
};

export default InfoForm;
