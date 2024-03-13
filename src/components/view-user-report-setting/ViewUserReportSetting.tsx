"use client";
import React, { useEffect, useState } from "react";
import FieldView from "./FieldView";
import CardView from "./CardView";
import { usePathname, useSearchParams } from "next/navigation";
import { usersReportSetting } from "../../../data/userReportSetting";
import { getReportSetting } from "@/api/listReportSetting";

const ViewUserReportSetting = () => {
  const params = useSearchParams();
  const pathname = usePathname();
  const [userReportData, setUserReportData] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const data = await getReportSetting({ user: params.get("user") });
      console.log(data);
      setUserReportData(data[0] as any);
    })();
  }, []);

  return (
    <section
      className={`${
        userReportData?.platform.toLowerCase() === "scion"
          ? " w-full"
          : "w-[75%]"
      } `}
    >
      {/* <h3 className=" absolute top-[14px] z-[99999] text-4xl font-bold">
        {pathname === "/report-settings/view" ? "Bank Report Setting" : ""}
      </h3> */}
      <div
        className={`grid ${
          userReportData?.platform.toLowerCase() === "scion"
            ? "grid-cols-3"
            : "grid-cols-2"
        }  gap-8 mt-4`}
      >
        <FieldView label={"Platform"} value={userReportData?.platform} />
        <FieldView label={"Mule Age"} value={userReportData?.muleAge} />
        {userReportData?.minorLessThan && (
          <FieldView label={"Minor"} value={userReportData?.minorLessThan} />
        )}
        <CardView
          label={"Code Not To Use"}
          data={userReportData?.codeNotToUse}
        />
        <CardView
          label={"Sub Office Teller Code"}
          data={userReportData?.subOfficeTellerCode}
        />
        {userReportData?.highRiskCategories.length > 0 && (
          <CardView
            label={"High Risk Categories"}
            data={userReportData?.highRiskCategories}
          />
        )}
      </div>
    </section>
  );
};

export default ViewUserReportSetting;
