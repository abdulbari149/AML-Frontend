"use client";
import React, { useState } from "react";
import Image from "next/image";

// IMAGES
import logo from "@/assets/images/shared/logo/logo.png";
import backSvg from "@/assets/svgs/Back.svg";
// FORMS
import LogoForm from "@/components/complete-profile/LogoForm";
import InfoForm from "@/components/complete-profile/InfoForm";

const CompleteProfile = () => {
  const [nextForm, setNextform] = useState<boolean>(false);
  return (
    <>
      {nextForm && (
        <div
          className=" flex justify-start gap-1 items-center cursor-pointer w-fit"
          onClick={() => {
            setNextform((prev) => !prev);
          }}
        >
          <Image src={backSvg} alt="logo" quality={100} className="-ml-1" />
          <span className=" text-base font-normal">back</span>
        </div>
      )}
      <div className="flex flex-col gap-5 justify-center items-center">
        <Image src={logo} alt="logo" quality={100} />
        <div className=" flex flex-col md:items-start items-center gap-2 w-full">
          <h2 className=" md:text-3xl text-2xl font-semibold">
            Complete Your Profile
          </h2>
          <p className="md:text-sm text-[10px]  font-normal text-[#000000BF]">
            You are few steps away from experiencing the best platform,
          </p>
        </div>
        {!nextForm ? <LogoForm setNextform={setNextform} /> : <InfoForm />}
      </div>
    </>
  );
};

export default CompleteProfile;
