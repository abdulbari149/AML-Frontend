"use client";
import { fetchAuthSession } from "aws-amplify/auth";
import { get, post } from "aws-amplify/api";
import { getAuthToken } from "@/utils/token";

export async function listUsers() {
  const token = await getAuthToken();
  let apiName = "AdminQueries";
  let path = "/listUsersInGroup";
  let options = {
    queryParams: {
      groupname: "Banks",
    },
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  };
  const { response } = await get({ apiName, path, options });
  const body = (await response).body;
  const data = await body.json();

  return (data as any)['Users'].map((user: any) => {
    return {
      id: user.Username,
      username: user.Username,
      ...user.Attributes.reduce((curr: any, attr: any) => {
        return {
          ...curr,
          [attr.Name]: attr.Value
        }
      }, {}) 
    }
  })
}

type UserData = {
  username: string;
  email: string;
  password: string;
};

export async function addUser(data: UserData) {
  const token = await getAuthToken();

  console.log(token);

  try {
    const apiName = "AdminQueries";
    let createUserPath = "/createUser";

    const options = {
      body: {},
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    };

    const createUserResponse = await post({
      apiName,
      path: createUserPath,
      options: {
        ...options,
        body: {
          username: data.email,
          password: data.password,
          email: data.email,
        },
      },
    }).response;

    const createUserBody = await createUserResponse.body.json()
    console.log(createUserBody)
    const addUserToGroupPath = "/addUserToGroup";
    const addUserResponse = await post({
      apiName,
      path: addUserToGroupPath,
      options: {
        ...options,
        body: {
          username: data.email,
          groupname: "Banks",
        },
      },
    }).response;
    await addUserResponse.body.json()

    return {
      success: true,
      message: (createUserBody as any).message,
    };
  } catch (error) {
    console.error("error", error);
    return {
      success: false,
      message: (error as Error).message,
    }
  }
}
