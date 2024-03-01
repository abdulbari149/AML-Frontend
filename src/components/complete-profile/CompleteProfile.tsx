"use client";
import React, { useState } from "react";
import Image from "next/image";

// IMAGES
import logo from "@/assets/images/shared/logo/logo.png";
import backSvg from "@/assets/svgs/Back.svg";

// FORMS
import LogoForm from "@/components/complete-profile/LogoForm";
import InfoForm from "@/components/complete-profile/InfoForm";

// TOSTIFY
import { errorToastify, succesToastify } from "@/helpers/toast";

const CompleteProfile = () => {
  const [nextForm, setNextForm] = useState<boolean>(false);

  const [formData, setFormData] = useState<CompleteProfileType>({
    branch: "",
    address: "",
    country: "",
    file: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prevState) => ({
        ...prevState,
        file: files[0],
      }));
    }
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData) {
      console.log(formData);
      succesToastify("Successfuly Completed Profile");
      setFormData({
        branch: "",
        address: "",
        country: "",
        file: null,
      });
    } else {
      errorToastify("Invalid details!");
    }
  };
  return (
    <>
      {nextForm && (
        <div
          className=" flex justify-start gap-1 items-center cursor-pointer w-fit"
          onClick={() => {
            setNextForm((prev) => !prev);
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
        {!nextForm ? (
          <LogoForm handleChange={handleChange} setNextForm={setNextForm} />
        ) : (
          <InfoForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    </>
  );
};

export default CompleteProfile;
