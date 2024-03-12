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
  {
    id: 2,
    title: "Monthly Reports",
    icon: monthlyReportSvg,
    path: "/monthly-reports",
    type: "route",
  },
  {
    id: 3,
    title: "Report Settings",
    icon: settingsSvg,
    path: "/report-settings",
    type: "route",
  },
  {
    id: 4,
    title: "History",
    icon: historySvg,
    path: "/history",
    type: "route",
  },
  {
    id: 5,
    title: "User Management",
    icon: historySvg,
    path: "/add-user",
    type: "route",
  },
  {
    id: 6,
    title: "Set User Setting",
    icon: historySvg,
    path: "/set-user-setting",
    type: "route",
  },
  {
    id: 7,
    title: "Users Report Setting",
    icon: historySvg,
    path: "/view-users-report-setting",
    type: "route",
  },
  {
    id: 8,
    title: "Transaction Types",
    icon: historySvg,
    path: "/transaction-types",
    type: "route",
  },
  {
    id: 9,
    icon: historySvg,
    path: "/view-user-report-setting/:id",
    type: "view-user-report-setting",
  },
  {
    id: 10,
    title: "Upload Files",
    icon: historySvg,
    path: "/upload-files",
    type: "route",
  },
];

export const banksRoute = [
  {
    id: 1,
    title: "Add",
    heading: "User Management",
    path: "/add-user",
    type: "route",
  },
  {
    id: 2,
    title: "List",
    heading: "Banks Report Settings",
    path: "/view-users-report-setting",
    type: "route",
  },
];

export const subLinks: PagesRouteType[] = [
  {
    id: 1,
    title: "My Account",
    icon: settingsSvg,
    path: "/settings",
    type: "route",
  },
];
