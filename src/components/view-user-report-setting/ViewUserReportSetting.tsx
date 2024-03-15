"use client";
import React, { useEffect, useState } from "react";
import FieldView from "./FieldView";
import CardView from "./CardView";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { usersReportSetting } from "../../../data/userReportSetting";
import { getReportSetting } from "@/api/listReportSetting";
import { fetchAuthSession } from "aws-amplify/auth";

const ViewUserReportSetting = () => {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [report, setReport] = useState<Record<string, any> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const loggedInUser = await fetchAuthSession();

      if (!loggedInUser) {
        setLoading(false);
        router.push("/login");
      }

      const groups = (loggedInUser.tokens?.idToken?.payload["cognito:groups"] ??
        []) as string[];

      if (groups && groups?.includes("Admin") && !params.get("user")) {
        router.push("/bank/list");

        // setLoading(false);
        return;
      }

      const queryParams: Record<string, string> = {};
      const user = params.get("user");
      if (user) {
        queryParams["user"] = user;
      }

      const data: any = await getReportSetting(queryParams);

      if (!data || !Array.isArray(data) || data.length === 0) {
        setLoading(false);
        return;
      }

      const latestReport = data.sort(
        (a: any, b: any) =>
          new Date(b.CreatedAt).getTime() - new Date(a.CreatedAt).getTime()
      )[0];

      setReport(latestReport);
      setLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <h1 className="text-2xl font-bold">Loading...</h1>
      </div>
    );
  }

  if (report === null) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <h1 className="text-2xl font-bold">Report Doesn&apos;t Exist</h1>
      </div>
    );
  }

  return (
    <section
      className={`${
        report?.platform.toLowerCase() === "scion" ? " w-full" : "w-[75%]"
      } `}
    >
      <div
        className={`grid ${
          report?.platform.toLowerCase() === "scion"
            ? "grid-cols-3"
            : "grid-cols-2"
        }  gap-8 mt-4`}
      >
        <FieldView label={"Platform"} value={report?.platform} />
        <FieldView label={"Mule Age"} value={report?.muleAge} />
        {report?.minorLessThan && (
          <FieldView label={"Minor"} value={report?.minorLessThan} />
        )}
        <CardView label={"Code Not To Use"} data={report?.codeNotToUse} />
        <CardView
          label={"Sub Office Teller Code"}
          data={report?.subOfficeTellerCode}
        />
        {report?.highRiskCategories.length > 0 && (
          <CardView
            label={"High Risk Categories"}
            data={report?.highRiskCategories}
          />
        )}
      </div>
    </section>
  );
};

export default ViewUserReportSetting;
