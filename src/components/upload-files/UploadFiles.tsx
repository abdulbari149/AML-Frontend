"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";

// ICONS
import { IoClose } from "react-icons/io5";
import { BsCheckLg } from "react-icons/bs";

// IMAGES
import uploadLogo from "@/assets/images/uploadcsv/uploadLogo.png";
import uploadedFile from "@/assets/svgs/uploadedFile.svg";

// COMPONENTS
import runReportSvg from "@/assets/svgs/runReport.svg";
import { convertToBase64 } from "@/utils/convertToBase64";
import { uploadFiles } from "@/api/uploadFile";
import { succesToastify } from "@/helpers/toast";

const UploadFiles = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [base64Files, setBase64Files] = useState<string[]>([]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const base64File: any = await convertToBase64(e.target.files[0]);
      setSelectedFiles([...selectedFiles, ...files]);
      setBase64Files([...base64Files, base64File]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    const base64File: any = await convertToBase64(e.dataTransfer.files[0]);
    setSelectedFiles([...selectedFiles, ...files]);
    setBase64Files([...base64Files, base64File]);
  };

  const handleSubmit = async () => {
    if (base64Files) {
      const submitData = await uploadFiles(base64Files);
      if (submitData) {
        succesToastify(submitData?.message as string);
        setSelectedFiles([]);
        setBase64Files([]);
      }
    }
  };

  return (
    <>
      <div className=" flex justify-between mb-3">
        <div className=" flex gap-3">
          <button
            className=" flex gap-3 justify-center items-center rounded-xl bg-[#FFFFFF] md:px-5 px-4 md:py-3 py-[10px]"
            onClick={handleSubmit}
          >
            <Image
              src={runReportSvg}
              alt="runreportSvg"
              className=" md:block hidden"
            />
            <span className="md:text-sm text-xs font-normal">Submit</span>
          </button>
        </div>
      </div>

      {/* TABLE */}
      <div className=" flex flex-col justify-center gap-6 h-[60%] w-[30%] items-center mx-auto">
        <div
          className=" flex flex-col gap-3 justify-center items-center bg-[#F9F9F980] rounded border-dashed border-2 border-[#00000080] w-full py-8 text-center"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <input
            type="file"
            id="fileInput"
            multiple
            className="hidden"
            onChange={handleFileChange}
          />

          {/* image */}
          <div>
            <Image src={uploadLogo} alt="uploadLogo" className="w-12" />
          </div>

          <div className=" text-lg font-medium text-[#00000080]">
            Drop files here or{" "}
            <span
              className="text-[#000000] underline cursor-pointer"
              onClick={() => document.getElementById("fileInput")?.click()}
            >
              browse
            </span>
          </div>
        </div>
        {/* uploaded files */}
        {selectedFiles.length > 0 && (
          <div className=" w-full flex flex-col gap-2">
            <h3 className="text-[#000000BF] text-lg font-medium">
              Uploaded Files
            </h3>
            {/* file names */}
            <div className=" text-[#000000BF] font-normal">
              <ul className=" flex flex-col gap-1 text-sm">
                {selectedFiles.map((file, index) => (
                  <li
                    key={index}
                    className=" flex justify-between items-center"
                  >
                    <span>{file.name}</span>
                    <BsCheckLg className=" text-base font-extrabold" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UploadFiles;
