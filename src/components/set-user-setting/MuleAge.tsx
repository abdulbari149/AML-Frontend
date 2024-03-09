import React from "react";
import SetUserInput from "./common/SetUserInput";

const MuleAge = ({ formData, setFormData }: SetUserReportFormType) => {
  return (
    <div className=" flex flex-col gap-6">
      <h3 className=" text-2xl font-semibold capitalize">Mule Age</h3>
      <div className="flex flex-col gap-5">
        <SetUserInput
          label={"Greater Than"}
          type={"number"}
          name={"greaterThan"}
          placeholder={"e.g. 17"}
          required={true}
          formData={formData}
          setFormData={setFormData}
          fieldType={"muleAge"}
          />
        <SetUserInput
          label={"Less Than"}
          type={"number"}
          name={"lessThan"}
          placeholder={"e.g. 25"}
          required={true}
          formData={formData}
          setFormData={setFormData}
          fieldType={"muleAge"}
        />
      </div>
    </div>
  );
};

export default MuleAge;
