// ICONS
import DashboardSvg from "@/assets/svgs/Dashboard.svg";
import uploadFileSvg from "@/assets/svgs/uploadFile.svg";
import monthlyReportSvg from "@/assets/svgs/monthlyReport.svg";
import generalReportSvg from "@/assets/svgs/generalReport.svg";
import accountEnquirySvg from "@/assets/svgs/accountEnquiry.svg";
import currentAccountsSvg from "@/assets/svgs/currentAccounts.svg";
import YTDAnalysisSvg from "@/assets/svgs/YTDAnalysis.svg";
import historySvg from "@/assets/svgs/History.svg";
import settingsSvg from "@/assets/svgs/Settings.svg";
import profileSvg from "@/assets/svgs/Profile.svg";

export const mainLinks: PagesRouteType[] = [
  {
    id: 1,
    title: "Dashboard",
    icon: DashboardSvg,
    path: "/",
    type: "route",
  },
  // {
  //   id: 2,
  //   title: "Upload Files",
  //   icon: uploadFileSvg,
  //   path: "/upload-files",
  //   type: "upload",
  // },
  {
    id: 3,
    title: "Monthly Reports",
    icon: monthlyReportSvg,
    path: "/monthly-reports",
    type: "route",
  },
  // {
  //   id: 4,
  //   title: "General Reports",
  //   icon: generalReportSvg,
  //   path: "/general-reports",
  //   type: "route",
  // },
  {
    id: 5,
    title: "Report Settings",
    icon: settingsSvg,
    path: "/report-settings",
    type: "route",
  },
  // {
  //   id: 6,
  //   title: "Account Enquiry",
  //   icon: accountEnquirySvg,
  //   path: "/account-equiry",
  //   type: "route",
  // },
  // {
  //   id: 7,
  //   title: "Current Accounts",
  //   icon: currentAccountsSvg,
  //   path: "/current-accounts",
  //   type: "route",
  // },
  {
    id: 8,
    title: "History",
    icon: historySvg,
    path: "/history",
    type: "route",
  },
  {
    id: 10,
    title: "Set User Setting",
    icon: historySvg,
    path: "/set-user-setting",
    type: "route",
  },
];

export const subLinks: PagesRouteType[] = [
  // {
  //   id: 1,
  //   title: "Profile",
  //   icon: profileSvg,
  //   path: "/profile",
  //   type: "route",
  // },
  {
    id: 2,
    title: "My Account",
    icon: settingsSvg,
    path: "/settings",
    type: "route",
  },
];
