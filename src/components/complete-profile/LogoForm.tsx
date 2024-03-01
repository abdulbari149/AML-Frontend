"use client";
import React, { useState } from "react";
import Image from "next/image";

// SVGS
import imagePlusSvg from "@/assets/svgs/imagePlus.svg";

// HELPERS
import { errorToastify, succesToastify } from "@/helpers/toast";

interface LogoFormData {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setNextForm: any;
}

const LogoForm = ({ handleChange, setNextForm }: LogoFormData) => {
  return (
    <form className=" w-full flex flex-col gap-3">
      <div
        className="flex flex-col justify-center items-center gap-1"
        onClick={() => {
          document.getElementById("logo")?.click();
        }}
      >
        <input
          className="hidden"
          type="file"
          name="file"
          id="logo"
          onChange={handleChange}
        />
        <Image src={imagePlusSvg} alt="imagePlusSvg" />
        <p className=" text-sm font-semibold text-[#000000BF]">Your Logo</p>
      </div>
      <button
        type="submit"
        className=" w-fit mx-auto md:text-base text-sm bg-[#C4B454] text-[#fff] font-medium rounded-md mt-4 py-2 px-10"
        onClick={() => setNextForm((prev: boolean) => !prev)}
      >
        Next
      </button>
    </form>
  );
};

export default LogoForm;
