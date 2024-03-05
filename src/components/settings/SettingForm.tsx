'use client'
import React, { useState } from "react";
import { generateClient } from "aws-amplify/api";
import { createBankInformation } from "@/graphql/mutations";
import InputFieldSetting from "./InputFieldSetting";
import currentAuthenticatedUser from "@/utils/UserInfo";

const client = generateClient();

const SettingForm = () => {
  const [bankName, setBankName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const signInDetails = currentAuthenticatedUser;
  console.log('signInDetails',signInDetails)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Call the GraphQL mutation to create bank information
      const newBankInformation = await client.graphql({
        query: createBankInformation,
        variables: {
          input: {
            BankName: bankName,
            Email: email,
            PhoneNo: phone,
            Logo:"",
          },
        },
      });

      console.log("New bank information created:", newBankInformation);
      // Reset form fields
      setBankName("");
      setEmail("");
      setPhone("");
    } catch (err) {
      console.error("Error creating bank information:", err);
      setError("Error creating bank information. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        {/* main form */}
        <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-32">
          <div className="w-full md:w-2/4 flex flex-col gap-2">
            {/* 1st row */}
            <div className="flex flex-col md:flex-row gap-3">
              <InputFieldSetting
                label="Bank Name"
                type="text"
                placeholder="ABC Bank"
                name="bankname"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
              />
            </div>

            {/* 2nd row */}
            <div className="flex flex-col md:flex-row gap-3">
              <InputFieldSetting
                label="Email"
                type="email"
                placeholder="name@example.com"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputFieldSetting
                label="Phone"
                type="number"
                placeholder="032121-85478"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          {/* image section */}
          <div
            className="flex flex-col justify-center items-center border-2 border-dashed border-[#000000] rounded-lg w-36 h-44 cursor-pointer"
            onClick={() => document.getElementById("account-logo")?.click()}
          >
            <input type="file" className="hidden" id="account-logo" />
            <button className="text-xs font-semibold text-center text-[#F9F9F9] px-2 py-1 rounded-sm bg-[#000000]">
              Add Logo
            </button>
          </div>
        </div>

        {/* btn */}
        <button
          className="w-fit text-xs font-medium text-center text-[#F9F9F9] px-[14px] py-[10px] rounded-md bg-[#000000]"
          type="submit"
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Changes"}
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </>
  );
};

export default SettingForm;
