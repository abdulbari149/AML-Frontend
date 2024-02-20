import React from "react";
import InputFieldSetting from "./InputFieldSetting";

const PasswordForm = () => {
  return (
    <>
      <form className="w-full md:w-1/4 flex flex-col gap-2">
        <InputFieldSetting
          label="Old Password"
          type="password"
          placeholder="*********"
          name="oldpassword"
        />
        <InputFieldSetting
          label="New Password"
          type="password"
          placeholder="*********"
          name="newpassword"
        />
        <InputFieldSetting
          label="Re-Enter New Password"
          type="password"
          placeholder="*********"
          name="confirmpassword"
        />
        <button className=" w-fit text-xs font-medium text-center text-[#F9F9F9] px-[14px] py-[10px] rounded-md bg-[#000000]">
          Change Password
        </button>
      </form>
    </>
  );
};

export default PasswordForm;
