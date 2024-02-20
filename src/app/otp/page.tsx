import React from "react";
import Image from "next/image";
import { Toaster } from "react-hot-toast";

// IMAGES
import logo from "@/assets/images/shared/logo/logo.png";
import styles from "@/styles/otp.module.css";
import Form from "@/components/OTP/Form";

const page = () => {
  return (
    <main className="  flex justify-center items-center w-screen h-screen bg=[#f9f9f9]">
      <section
        className={` flex flex-col gap-5 justify-center items-center bg-[#fff] rounded-[10px] pt-12 pb-10 px-10
       ${styles.otpBoxShadow} md:w-[400px] w-full`}
      >
        <Image src={logo} alt="logo" />
        <div className=" flex flex-col gap-2 w-full mt-6">
          <h2 className=" md:text-3xl text-2xl font-semibold">OTP Verification</h2>
          <p className="md:text-sm text-[10px] font-normal text-[#000000BF]">
            Enter OTP that you have received.
          </p>
        </div>
        <Form />
      </section>
      <Toaster position="top-right" reverseOrder={false} />
    </main>
  );
};

export default page;
