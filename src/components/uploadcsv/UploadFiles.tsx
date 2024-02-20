"use client";
import React, { useRef, useState } from "react";
import Modal from "@/components/uploadcsv/Modal";

const UploadFiles = () => {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  return (
    <>
      <button
        className=" bg-blue-500 p-2 rounded-md"
        onClick={() => {
          setOpen(true);
        }}
      >
        open
      </button>
      <Modal setOpen={setOpen} open={open} cancelButtonRef={cancelButtonRef} />
    </>
  );
};

export default UploadFiles;
