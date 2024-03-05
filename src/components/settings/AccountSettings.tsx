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

        
      </div>
    </>
  );
};

export default AccountSettings;
