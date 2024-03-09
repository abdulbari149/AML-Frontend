import { REPORT_BASE_URL } from "@/config";
import axios from "axios";

export const createReportSettings = async (body: ReportSettings) => {
  try {
    const response = await axios.post(`${REPORT_BASE_URL}/report-settings`, {
      ...body,
    });

    return response.data.data
  } catch (error) {
    console.log(error);
  }
};
