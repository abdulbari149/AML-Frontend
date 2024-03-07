"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import UserInformation from "./UserInformation";
import MuleAge from "./MuleAge";

const steps = [
  "User Information",
  "Mule Age",
  "Codes Not To Use",
  "Sub Office Teller Code",
  "Criteria",
];

export default function SetUserSection() {
  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ width: "100%", height: "75%" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => {
          return (
            <Step
              key={index}
              sx={{
                "& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed, .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-active":
                  {
                    color: "#C4B454",
                  },
              }}
            >
              <StepLabel
                sx={{
                  "& .css-1hv8oq8-MuiStepLabel-label.Mui-completed": {
                    fontWeight: 600,
                  },
                }}
              >
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
        </>
      ) : (
        <div className=" flex flex-col justify-between h-full w-full bg-white border-none rounded-[10px] pt-5 px-6 mt-5 overflow-y-auto">
          {activeStep + 1 === 1 && <UserInformation />}
          {activeStep + 1 === 2 && <MuleAge />}
          <div className=" flex w-full pt-2 sticky bottom-0 z-[100000] pb-5 bg-white">
            <button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              className=" bg-[#00000061] text-white px-4 py-2 rounded-md"
            >
              Back
            </button>
            <Box sx={{ flex: "1 1 auto" }} />
            <button
              onClick={handleNext}
              className=" bg-[#C4B454] text-white px-4 py-2 rounded-md "
            >
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      )}
    </Box>
  );
}
