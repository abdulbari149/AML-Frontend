import { REPORT_BASE_URL } from "@/config";
import { getAuthIdToken } from "@/utils/token";
import axios from "axios";

export const getReportSetting = async (queryParams: object = {}) => {
  const token = await getAuthIdToken();
  
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
