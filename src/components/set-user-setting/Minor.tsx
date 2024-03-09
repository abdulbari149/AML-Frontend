import React from "react";
import SetUserInput from "./common/SetUserInput";

const Minor = ({ formData, setFormData }: SetUserReportFormType) => {
  return (
    <div className=" flex flex-col gap-6">
      <h3 className=" text-2xl font-semibold capitalize">Minor</h3>
      <div className="flex flex-col gap-5">
        <SetUserInput
          label={"Minor is under (Less Than)"}
          type="number"
          name={"minorLessThan"}
          placeholder={"e.g. 25"}
          formData={formData}
          setFormData={setFormData}
          required={true}
        />
      </div>
    </div>
  );
};

export default Minor;
