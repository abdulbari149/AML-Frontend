import React, { useEffect, useState } from "react";
import DropDown from "./common/DropDown";
import { listUsers } from "@/api/user";
import { getReportSetting } from "@/api/listReportSetting";

const platformDatabase = ["Progress", "Scion"];

const UserInformation = ({
  formData,
  setFormData,
  isEdit,
}: SetUserReportFormType & { isEdit?: boolean }) => {
  const [openDropDown, setOpenDropDown] = useState<boolean[]>([false, false]);

  const [userEmails, setUserEmails] = useState<{ id: string; email: string }[]>(
    []
  );

  const handleDropDownClick = (index: number) => {
    let newOpenDropDown: boolean[] = [];
    newOpenDropDown = openDropDown.map((item, i) => {
      return i === index ? !openDropDown[i] : false;
    });
    setOpenDropDown(newOpenDropDown);
  };

  const init = async () => {
    try {
      const [usersList, reportSettings] = await Promise.all([
        listUsers(),
        getReportSetting(),
      ]);

      const reportSettingsUsersMap = new Map();
      for (const report of reportSettings) {
        reportSettingsUsersMap.set(report.userId, report);
      }

      const users = usersList
        .filter((user: any) => {
          return !reportSettingsUsersMap.has(user.id);
        })
        .map((item: any) => {
          return {
            id: item.id,
            email: item.email,
          };
        });

      setUserEmails(users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className=" flex flex-col gap-5">
      <h3 className=" text-2xl font-semibold">User Information</h3>
      <div className=" flex items-center gap-8">
        <DropDown
          label={"Select Platform Database"}
          formData={formData}
          setFormData={setFormData}
          Data={platformDatabase}
          type={"platform"}
          onClick={() => handleDropDownClick(0)}
          openDropDown={openDropDown[0]}
          disable={isEdit}
        />
        <DropDown
          label={"Select User Email"}
          formData={formData}
          setFormData={setFormData}
          Data={userEmails}
          type={"userId"}
          objectProp={"email"}
          objectPropUserId={"id"}
          onClick={() => handleDropDownClick(1)}
          openDropDown={openDropDown[1]}
          disable={isEdit}
        />
      </div>
    </div>
  );
};

export default UserInformation;
