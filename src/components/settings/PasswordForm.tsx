'use client';
import React, { useState } from "react";
import InputFieldSetting from "./InputFieldSetting";
import { updatePassword, type UpdatePasswordInput } from "aws-amplify/auth";


// please check this article to do this 
// https://docs.amplify.aws/javascript/build-a-backend/auth/manage-passwords/#update-password
const PasswordForm = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleUpdatePassword = async () => {
    // Reset error state
    setError("");

    // Validation checks
    if (!oldPassword || !newPassword || !confirmPassword) {
      alert("All fields are required");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("New password and confirm password must match");
      return;
    }

    // Set loading state to true
    setLoading(true);

    try {
      // Call updatePassword API
      await updatePassword({ oldPassword, newPassword });

      // Password updated successfully
      alert("Password updated successfully");

      // Reset input fields
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");

    } catch (err) {
      // Error occurred during password update
      if (err instanceof Error) {
        alert("Error updating password:" + err.message);
      }
      setError("Error updating password. Please try again.");
    } finally {
      // Reset loading state
      setLoading(false);
    }
  };

  return (
    <>
      <form
        className="w-full md:w-1/4 flex flex-col gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdatePassword();
        }}
      >
        <InputFieldSetting
          label="Old Password"
          type="password"
          placeholder="*********"
          name="oldpassword"
          value={oldPassword}
          onChange={setOldPassword}
        />
        <InputFieldSetting
          label="New Password"
          type="password"
          placeholder="*********"
          name="newpassword"
          value={newPassword}
          onChange={setNewPassword}
        />
        <InputFieldSetting
          label="Re-Enter New Password"
          type="password"
          placeholder="*********"
          name="confirmpassword"
          value={confirmPassword}
          onChange={setConfirmPassword}
        />
        <button
          className="w-fit text-xs font-medium text-center text-[#F9F9F9] px-[14px] py-[10px] rounded-md bg-[#000000]"
          disabled={loading}
        >
          {loading ? "Changing Password..." : "Change Password"}
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </>
  );
};

export default PasswordForm;
