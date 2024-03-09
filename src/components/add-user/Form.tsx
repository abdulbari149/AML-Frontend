"use client";
import React, { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";

// ICONS
import { IoClose } from "react-icons/io5";
import { BsCheckLg } from "react-icons/bs";
import { Box } from "@mui/system";
import { fetchAuthSession } from "aws-amplify/auth";

import InputFieldSettings from "../settings/InputFieldSetting";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { addUser } from "@/api/user";
import { errorToastify, succesToastify } from "@/helpers/toast";

const addUserSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
});

type Inputs = z.infer<typeof addUserSchema>;

const Form = () => {
  const [data, setData] = useState<Inputs>({
    name: '',
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState<Inputs>({
    name: '',
    email: '',
    password: '',
  })

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async () => {
    setIsLoading(true)
    try {
      const result = addUserSchema.safeParse(data)
      if (!result.success) {
        const fields = result.error.errors.map(err => {
          return {
            field: err.path[0] as string,
            message: err.message,
          }
        })


        const validationErrors = fields.reduce((cur, field) => {
          return {
            ...cur,
            [field.field as keyof Inputs]: field.message
          }
        }, {} as Inputs)

        setErrors(validationErrors)
      }
    } catch (error) {
      setIsLoading(false)
      return
    }

    setErrors({
      email: '',
      name: '',
      password: ''
    })
    try {
      const { success, message } = await addUser({
        username: data.name,
        email: data.email,
        password: data.password,
      });

      if (!success) {
        throw new Error(message)
      }

      succesToastify(message as string);
      setData({
        name: '',
        email: '',
        password: ''
      })
      setIsLoading(false)
    } catch (error) {
      console.log({ error })
      let message = (error as any)?.message ?? ''
      if (error instanceof Error) {
        message = error.message
      }
      errorToastify(message)
      setIsLoading(false)
      return
    }
  };

  const handleChange = <TValue extends string>(key: keyof Inputs) => {
    return (value: TValue) => {
      setData((prevData) => {
        return {
          ...prevData,
          [key]: value
        }
      })
    }
  }


  return (
    <div className="items-start flex w-full">
      <div className="relative flex flex-col gap-3 p-2 transform overflow-hidden rounded-2xl text-left transition-all w-full">
        <h1 className="text-3xl font-semibold">Add User</h1>

        <div className="flex flex-col w-full md:w-2/4 justify-start items-start gap-3">
          <InputFieldSettings<string>
            label="Name"
            type="text"
            placeholder="John"
            name="name"
            value={data.name}
            onChange={handleChange('name')}
            error={errors.name}
          />
          <InputFieldSettings<string>
            label="Email"
            type="email"
            placeholder="name@example.com"
            name="email"
            value={data.email}
            onChange={handleChange('email')}
            error={errors.email}
          />
          <InputFieldSettings<string>
            label="Password"
            type="password"
            placeholder=""
            name="password"
            value={data.password}
            error={errors.password}
            onChange={handleChange('password')}
          />

          <button
            disabled={isLoading}
            onClick={onSubmit}
            className="w-fit text-xs font-medium min-w-[20vw] disabled:bg-[#2a2a2a] text-center text-[#F9F9F9] px-[14px] py-[10px] rounded-md bg-[#000000]"
          >
            Add New User
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
