import React from "react";
import SetUserInput from "./common/SetUserInput";

const Minor = () => {
  return (
    <div className=" flex flex-col gap-6">
      <h3 className=" text-2xl font-semibold capitalize">Minor</h3>
      <div className="flex flex-col gap-5">
        <SetUserInput
          label={"Minor is under (Less Than)"}
          type="number"
          placeholder={"e.g. 25"}
          name={"minor"}
          required={true}
        />
      </div>
    </div>
  );
};

export default Minor;
