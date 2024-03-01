import React from "react";
import Image from "next/image";
import { Toaster } from "react-hot-toast";

// IMAGES
import logo from "@/assets/images/shared/logo/logo.png";
import styles from "@/styles/login.module.css";
import Form from "@/components/login/Form";

const page = () => {
  return (
    <main className="  flex justify-center items-center w-screen h-screen bg-[#f9f9f9]">
      <section
        className={` flex flex-col gap-5 justify-center items-center bg-[#fff] rounded-[10px] pt-12 pb-10 px-10
         ${styles.loginBoxShadow} md:w-[420px] w-full`}
      >
        <Image src={logo} alt="logo" quality={100} />
        <div className=" flex flex-col gap-2 w-full">
          <h2 className=" md:text-3xl text-2xl font-semibold">Sign in</h2>
          <p className="md:text-sm text-[10px] font-normal text-[#000000BF]">
            Enter your email address and password to continue.
          </p>
        </div>
        <Form />
      </section>
      <Toaster position="top-right" reverseOrder={false} />
    </main>
  );
};

export default page;
