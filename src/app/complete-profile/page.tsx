"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Toaster } from "react-hot-toast";

// IMAGES
import logo from "@/assets/images/shared/logo/logo.png";
import backSvg from "@/assets/svgs/Back.svg";
import styles from "@/styles/login.module.css";
import LogoForm from "@/components/complete-profile/LogoForm";
import InfoForm from "@/components/complete-profile/InfoForm";

const CompleteProfile = () => {
  const [step, setStep] = useState<number>(0);
  return (
    <main className="  flex justify-center items-center w-screen  h-screen bg-[#f9f9f9]">
      <section
        className={`bg-[#fff] rounded-[10px] pt-12 pb-10 px-10
         ${styles.loginBoxShadow}`}
      >
        {step === 1 && (
          <div
            className=" flex justify-start items-center cursor-pointer"
            onClick={() => {
              setStep(0);
            }}
          >
            <Image src={backSvg} alt="logo" quality={100} />
            <span className=" text-base font-normal">back</span>
          </div>
        )}
        <div className="flex flex-col gap-5 justify-center items-center">
          <Image src={logo} alt="logo" quality={100} />
          <div className=" flex flex-col gap-2 w-full">
            <h2 className=" md:text-3xl text-2xl font-semibold">
              Complete Your Profile
            </h2>
            <p className="md:text-sm text-[10px] w-[300px]  font-normal text-[#000000BF]">
              You are few steps away from experiencing the best platform,
            </p>
          </div>
          {step === 0 ? <LogoForm setStep={setStep} /> : <InfoForm />}
        </div>
      </section>
      <Toaster position="top-right" reverseOrder={false} />
    </main>
  );
};

export default CompleteProfile;
