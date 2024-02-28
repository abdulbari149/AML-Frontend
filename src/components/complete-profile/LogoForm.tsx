"use client";
import React, { useState } from "react";
import Image from "next/image";

// SVGS
import imagePlusSvg from "@/assets/svgs/imagePlus.svg";

// HELPERS
import { errorToastify, succesToastify } from "@/helpers/toast";

const LogoForm = ({ setStep }: { setStep: any }) => {
  const [file, setFile] = useState();
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0] as any);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) {
      console.log(file);
      setStep(1);
    } else {
      errorToastify("Invalid file!");
    }
  };

  return (
    <form className=" w-full flex flex-col gap-3" onSubmit={handleSubmit}>
      <div className="flex flex-col justify-center items-center gap-1">
        <input
          className="hidden"
          type="file"
          name="file"
          onChange={handleFileChange}
        />
        <Image src={imagePlusSvg} alt="imagePlusSvg" />
        <p className=" text-sm font-semibold text-[#000000BF]">Your Logo</p>
      </div>
      <button
        type="submit"
        className=" w-fit mx-auto md:text-base text-sm bg-[#C4B454] text-[#fff] font-medium rounded-md mt-4 py-2 px-10"
      >
        Next
      </button>
    </form>
  );
};

export default LogoForm;
