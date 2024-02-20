import React from "react";
import SettingForm from "./SettingForm";
import PasswordForm from "./PasswordForm";

const AccountSettings = () => {
  return (
    <>
      <div className=" flex flex-col gap-6">
        {/* form 1 (settings) */}
        <div className=" flex flex-col gap-3">
          <h1 className=" text-3xl font-semibold">Account Settings</h1>
          <SettingForm />
        </div>

        {/* form 2 ( change pass settings) */}
        <div className=" flex flex-col gap-2">
          <h1 className=" text-3xl font-semibold">Change Password</h1>
          <PasswordForm />
        </div>

        <button className=" w-fit text-[15px] font-semibold text-center text-[#EE5B5B] px-5 py-3 rounded-md border-2 border-[#000000] mb-5">
          Delete Account
        </button>
      </div>
    </>
  );
};

export default AccountSettings;
