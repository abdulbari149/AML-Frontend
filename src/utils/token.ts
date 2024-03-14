"use client";

import { fetchAuthSession } from "aws-amplify/auth";

export const getAuthAccessToken = async () => {
  const authSession = await fetchAuthSession();
  if (!authSession || !authSession?.tokens?.accessToken?.payload) {
    throw new Error("No valid session");
  }

  return authSession.tokens.accessToken?.toString();
};

export const getAuthIdToken = async () => {
  const authSession = await fetchAuthSession();
  if (!authSession || !authSession?.tokens?.accessToken?.payload) {
    throw new Error("No valid session");
  }

  return authSession.tokens.idToken?.toString();
};
