import { REPORT_BASE_URL } from "@/config";
import { getAuthAccessToken, getAuthIdToken } from "@/utils/token";
import axios from "axios";

export const createReportSettings = async (body: ReportSettings) => {
  const token = await getAuthIdToken();
  console.log(token);

  try {
    const response = await axios.post(
      `${REPORT_BASE_URL}/report-settings`,
      {
        ...body,
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

export const editReportSettings = async (body: ReportSettings,id: any) => {
  const token = await getAuthIdToken();
  console.log(token);

  try {
    const response = await axios.put(
      `${REPORT_BASE_URL}/report-settings/${id}`,
      {
        ...body,
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

