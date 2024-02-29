"use client";
import React, { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";

// ICONS
import { IoClose } from "react-icons/io5";
import { BsCheckLg } from "react-icons/bs";

import InputFieldUser from "./InputFieldUser";

const UserModal = ({ open, setOpen, cancelButtonRef }: AddUserModalType) => {
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
              <Dialog.Panel className="relative flex flex-col gap-3 p-10 transform overflow-hidden rounded-2xl bg-[#fff] text-left shadow-xl transition-all 2xl:w-[40vw] xl:w-[32vw] md:w-[50vw]">
                {/* first div */}
                <div className="flex justify-between items-center">
                  <h3 className=" text-[#000000] text-lg font-medium">
                    Add User
                  </h3>
                  <IoClose
                    className=" text-2xl text-[#000] right-3 top-4 cursor-pointer"
                    onClick={() => setOpen(false)}
                  />
                </div>

                {/* second div */}
                <div className="flex flex-col justify-start items-start gap-3 w-full">
                  <InputFieldUser
                    label="Name"
                    type="text"
                    placeholder="John"
                    name="name"
                  />
                  <InputFieldUser
                    label="Email"
                    type="email"
                    placeholder="name@example.com"
                    name="email"
                  />
                  <InputFieldUser
                    label="Password"
                    type="password"
                    placeholder=""
                    name="password"
                  />

                  <button className="w-full rounded-md py-[12px] px-[24px] text-center text-xs font-normal text-[#FFFFFF] bg-[#000000]">
                    Add
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default UserModal;
