import React from "react";
import SetUserInput from "./common/SetUserInput";

const MuleAge = () => {
  return (
    <div className=" flex flex-col gap-6">
      <h3 className=" text-2xl font-semibold capitalize">Mule Age</h3>
      <div className="flex flex-col gap-5">
        <SetUserInput
          label={"Greater Than"}
          type={"number"}
          placeholder={"e.g. 17"}
          name={"greater-than"}
          required={true}
        />
        <SetUserInput
          label={"Less Than"}
          type={"number"}
          placeholder={"e.g. 25"}
          name={"less-than"}
          required={true}
        />
      </div>
    </div>
  );
};

export default MuleAge;
