import { REPORT_BASE_URL } from "@/config";
import { getAuthAccessToken, getAuthIdToken } from "@/utils/token";
import axios from "axios";

export const uploadFiles = async (body: string[]) => {
  const token = await getAuthIdToken();
  console.log(token);

  try {
    const response = await axios.post(
      `${REPORT_BASE_URL}/report`,
      {
        files: body,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};