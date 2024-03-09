"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// ICONS
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";

// HELPERS
import { errorToastify, succesToastify } from "@/helpers/toast";

const Form = () => {
  const router = useRouter();
  const [isOpenPasswordField, setIsOpenPasswordField] = useState(false);
  const [loginData, setLoginData] = useState<LoginType>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loginData) {
      succesToastify("Successfuly Logged In");
      setLoginData({
        email: "",
        password: "",
      });
      router.push("/");
    } else {
      errorToastify("Invalid credentials!");
    }
  };

  return (
    <form className=" w-full flex flex-col gap-3" onSubmit={handleSubmit}>
      <div className=" flex flex-col gap-1">
        <label
          htmlFor="email"
          className=" md:text-[15px] text-xs font-semibold text-[#000000BF]"
        >
          Email
        </label>
        <input
          className="w-full bg-[#F9F9F9] py-[12px] px-[14px] rounded-md text-[##00000080] md:text-sm text-xs focus:outline-none"
          type="email"
          name="email"
          id="email"
          placeholder="example@gmail.com"
          value={loginData.email}
          onChange={handleChange}
        />
      </div>
      <div className=" w-full flex flex-col gap-1">
        <label
          htmlFor="password"
          className=" md:text-[15px] text-xs font-semibold text-[#000000BF]"
        >
          Password
        </label>
        <div className=" flex gap-2">
          <input
            className=" w-full bg-[#F9F9F9] py-[12px] px-[14px] rounded-md text-[##00000080] md:text-sm text-xs focus:outline-none"
            type={isOpenPasswordField ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Password"
            value={loginData.password}
            onChange={handleChange}
          />
          <div
            className=" flex justify-center items-center bg-[#C4B454] rounded-md px-3 cursor-pointer"
            onClick={() => setIsOpenPasswordField((prev) => !prev)}
          >
            {isOpenPasswordField ? (
              <VscEye className=" text-white text-xl font-bold" />
            ) : (
              <VscEyeClosed className=" text-white text-xl font-bold" />
            )}
          </div>
        </div>
      </div>
      <Link href={"#"} className=" md:text-sm text-[10px] text-end">
        forgot password?
      </Link>
      <button
        type="submit"
        className=" w-fit mx-auto md:text-base text-sm bg-[#C4B454] text-[#fff] font-medium rounded-md mt-4 py-2 px-10"
      >
        Sign In
      </button>
    </form>
  );
};

export default Form;
