"use client";
import SetUserSection from "@/components/set-user-setting/SetUserSection";
import { useSearchParams, useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const params = useSearchParams();
  const user = params.get("user");
  const router = useRouter();

  if (!user) {
    router.push("/bank/list");
    return <></>;
  }

  return <SetUserSection />;
};

export default page;
