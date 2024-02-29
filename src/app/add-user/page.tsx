"use client";
import UserModal from "@/components/add-user/UserModal";
import React, { useRef, useState } from "react";

const AddUser = () => {
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
      <UserModal
        setOpen={setOpen}
        open={open}
        cancelButtonRef={cancelButtonRef}
      />
    </>
  );
};

export default AddUser;
