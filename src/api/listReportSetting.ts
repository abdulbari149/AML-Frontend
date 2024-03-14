import { REPORT_BASE_URL } from "@/config";
import { getAuthAccessToken, getAuthIdToken } from "@/utils/token";
import axios from "axios";

export const getReportSetting = async (queryParams: any) => {
  const token = await getAuthIdToken();
  console.log(token);
  
  
  try {
    const response = await axios.get(`${REPORT_BASE_URL}/report-settings`, {
      params: queryParams,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};
