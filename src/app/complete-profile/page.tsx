import React from "react";
import { Toaster } from "react-hot-toast";

import styles from "@/styles/login.module.css";
import CompleteProfile from "@/components/complete-profile/CompleteProfile";

const page = () => {
  return (
    <main className="  flex justify-center items-center w-screen  h-screen bg-[#f9f9f9]">
      <section
        className={`bg-[#fff] rounded-[10px] pt-8 pb-8 px-10
         ${styles.loginBoxShadow} md:w-[420px] w-full`}
      >
        <CompleteProfile />
      </section>
      <Toaster position="top-right" reverseOrder={false} />
    </main>
  );
};

export default page;
