"use client";
import React, { Fragment, useState, useEffect } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";

// ICONS
import { IoClose } from "react-icons/io5";
import { BsCheckLg } from "react-icons/bs";

// IMAGES
import uploadLogo from "@/assets/images/uploadcsv/uploadLogo.png";
import uploadedFile from "@/assets/svgs/uploadedFile.svg";

const Modal = ({ open, setOpen, cancelButtonRef }: UploadCsvModalType) => {
  const [selectedFiles, setSelectedFiles] = useState<File>();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(e.target.files[0] as any);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setSelectedFiles(e.dataTransfer.files[0] as any);
  };

  useEffect(() => {
    console.log(selectedFiles);
  }, [selectedFiles]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative flex flex-col gap-3 px-10 pt-8 pb-12 transform overflow-hidden rounded-2xl bg-[#fff] text-left shadow-xl transition-all 2xl:w-[40vw] xl:w-[32vw] md:w-[50vw]">
                {/* first div */}
                <div
                  className={`flex items-center ${
                    selectedFiles ? " justify-end" : " justify-between"
                  }`}
                >
                  <h3
                    className={
                      selectedFiles
                        ? "hidden"
                        : "block text-[#000000] text-lg font-medium"
                    }
                  >
                    Upload Files
                  </h3>
                  <IoClose
                    className=" text-2xl text-[#000] right-3 top-4 cursor-pointer"
                    onClick={() => setOpen(false)}
                  />
                </div>
                {selectedFiles ? (
                  //  uploaded files
                  <div className=" flex flex-col justify-center items-center gap-2 my-2">
                    <Image src={uploadedFile} alt="uploadedFile" />
                    <p className=" text-lg font-medium">
                      File Uploaded Successfully
                    </p>
                  </div>
                ) : (
                  // Upload Modal
                  <div
                    className=" flex flex-col gap-3 justify-center items-center bg-[#F9F9F980] rounded border-dashed border border-[#00000080] px-20 py-5 text-center"
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
                      <Image src={uploadLogo} alt="uploadLogo" />
                    </div>

                    <div className=" text-xs font-medium text-[#00000080]">
                      Drop files here or{" "}
                      <span
                        className="text-[#000000] underline cursor-pointer"
                        onClick={() =>
                          document.getElementById("fileInput")?.click()
                        }
                      >
                        browse
                      </span>
                    </div>
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
