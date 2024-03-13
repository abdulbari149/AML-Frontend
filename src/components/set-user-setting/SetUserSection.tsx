"use client";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import UserInformation from "./UserInformation";
import MuleAge from "./MuleAge";
import CodeNotUse from "./CodeNotUse";
import SubOfficeTellerCode from "./SubOfficeTellerCode";
import HighRisk from "./HighRisk";
import Minor from "./Minor";
import axios from "axios";
import { createReportSettings } from "@/api/report";
import { errorToastify, succesToastify } from "@/helpers/toast";
import SetCritera from "./SetCriteria";

let initialSteps: string[] = [
  "User Information",
  "Mule Age",
  "Codes Not To Use",
  "Sub Office Teller Code",
  "Set Critera",
];

export default function SetUserSection() {
  const [activeStep, setActiveStep] = useState(1);
  const [steps, setSteps] = useState<string[]>(initialSteps);

  const [formData, setFormData] = useState<ReportSettings>({
    platform: "",
    userId: "",
    muleAge: {
      greaterThan: null,
      lessThan: null,
    },
    codeNotToUse: [],
    subOfficeTellerCode: [],
    highRiskCategories: [],
    minorLessThan: null,
    Criteria: null,
  });

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleBack = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === 1 ? prevActiveStep : prevActiveStep - 1
    );
  };

  const handleNext = () => {
    switch (activeStep) {
      case 1: {
        console.log(activeStep);
        formData.platform && formData.userId
          ? setActiveStep((prevActiveStep) => prevActiveStep + 1)
          : errorToastify("Required All fields");
        return;
      }
      case 2: {
        formData.muleAge.greaterThan && formData.muleAge.lessThan
          ? setActiveStep((prevActiveStep) => prevActiveStep + 1)
          : errorToastify("Required All fields");
        return;
      }
      case 3: {
        formData.codeNotToUse.length > 0
          ? setActiveStep((prevActiveStep) => prevActiveStep + 1)
          : errorToastify("Required All fields");
        return;
      }
      case 4: {
        formData.subOfficeTellerCode.length > 0
          ? setActiveStep((prevActiveStep) => prevActiveStep + 1)
          : errorToastify("Required All fields");
        return;
      }
      case 5: {
        // formData.highRiskCategories && formData.highRiskCategories?.length > 0
        //   ? setActiveStep((prevActiveStep) => prevActiveStep + 1)
        //   : errorToastify("Required All fields");
        // return;
        formData.Criteria && formData.Criteria
          ? setActiveStep((prevActiveStep) => prevActiveStep + 1)
          : errorToastify("Required All fields");
        return;
      }
      case 6: {
        formData.highRiskCategories && formData.highRiskCategories?.length > 0
          ? setActiveStep((prevActiveStep) => prevActiveStep + 1)
          : errorToastify("Required All fields");
        return;
      }
      case 7: {
        formData.minorLessThan
          ? setActiveStep((prevActiveStep) => prevActiveStep + 1)
          : errorToastify("Required All fields");
        return;
      }
    }
  };

  const handlePostApi = async () => {
    const submitData = await createReportSettings(formData);
    if (submitData) {
      succesToastify(submitData?.message as string);
      setActiveStep(1);
      console.log("submit: ", submitData);
    }
  };

  const handleSubmit = async () => {
    console.log("hhh");
    console.log(activeStep);

    switch (activeStep) {
      case 5: {
        formData.Criteria && formData.Criteria
          ? handlePostApi()
          : errorToastify("Required All fields");
        return;
      }
      case 7: {
        formData.minorLessThan
          ? handlePostApi()
          : errorToastify("Required All fields");
        return;
      }
    }
  };

  useEffect(() => {
    if (formData.platform.toLowerCase() === "scion".toLowerCase()) {
      setSteps((prevSteps) => [...prevSteps, "High Risk Categories", "Minor"]);
    } else {
      setSteps(initialSteps);
    }
  }, [formData.platform]);

  return (
    <Box sx={{ width: "100%", height: "73%" }}>
      <Stepper activeStep={activeStep - 1} alternativeLabel>
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
      <div className=" flex flex-col justify-between h-full w-full bg-white border-none rounded-[10px] pt-5 px-6 mt-5 overflow-y-auto">
        {activeStep === 1 && (
          <UserInformation formData={formData} setFormData={setFormData} />
        )}
        {activeStep === 2 && (
          <MuleAge formData={formData} setFormData={setFormData} />
        )}
        {activeStep === 3 && (
          <CodeNotUse formData={formData} setFormData={setFormData} />
        )}
        {activeStep === 4 && (
          <SubOfficeTellerCode formData={formData} setFormData={setFormData} />
        )}
        {activeStep === 5 && (
          <SetCritera formData={formData} setFormData={setFormData} />
        )}
        {activeStep === 6 && (
          <HighRisk formData={formData} setFormData={setFormData} />
        )}
        {activeStep === 7 && (
          <Minor formData={formData} setFormData={setFormData} />
        )}
        <div className=" flex w-full pt-2 sticky bottom-0 z-[100000] pb-5 bg-white">
          <button
            color="inherit"
            disabled={activeStep === 1}
            onClick={handleBack}
            className=" bg-[#00000061] text-white px-4 py-2 rounded-md"
          >
            Back
          </button>
          <Box sx={{ flex: "1 1 auto" }} />
          <button
            onClick={activeStep === steps.length ? handleSubmit : handleNext}
            className=" bg-[#C4B454] text-white px-4 py-2 rounded-md "
          >
            {activeStep === steps.length ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </Box>
  );
}
