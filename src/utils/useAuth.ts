"use client";

import { fetchAuthSession } from "aws-amplify/auth";

export const useAuth = async () => {
  const authSession = await fetchAuthSession();
  if (!authSession || !authSession?.tokens?.accessToken?.payload) {
    throw new Error("No valid session");
  }

  console.log(authSession?.tokens?.accessToken?.payload.username);
  

  return authSession?.tokens?.accessToken?.payload[
    "cognito:groups"
  ]?.toString();
};
