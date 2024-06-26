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
    title: "History",
    icon: historySvg,
    path: "/history",
    type: "route",
  },
  {
    id: 3,
    title: "Transaction Types",
    icon: historySvg,
    path: "/transaction-types",
    type: "route",
  },
  {
    id: 4,
    icon: historySvg,
    path: "/report-setting/view",
    type: "view-user-report-setting",
  },
];

export const bankReportSettingRoute = [
  {
    id: 6,
    heading: "View",
    title: "Bank Report Setting",
    path: "/report-settings/view",
    type: "report-route",
  },
  {
    id: 5,
    heading: "Monthly Reports",
    title: "Monthly Reports",
    path: "/report-settings/monthly-reports",
    type: "report-route",
  },
  {
    id: 2,
    heading: "Set Criteria",
    title: "Set Criteria",
    path: "/report-settings/set-criteria",
    type: "report-route",
  },
  {
    id: 4,
    heading: "Upload Files",
    title: "Upload Files",
    path: "/report-settings/upload-files",
    type: "report-route",
  },
];

export const reportSettingsRoute = [
  {
    id: 1,
    heading: "Create",
    title: "Create Report Setting",
    path: "/report-settings/create",
    type: "report-route",
  },
  {
    id: 2,
    heading: "Edit",
    title: "Edit Report Setting",
    path: "/report-settings/edit",
    type: "report-route",
  },
  {
    id: 3,
    heading: "View",
    title: "View Report Setting",
    path: "/report-settings/view",
    type: "report-route",
  },
];

export const banksRoute = [
  {
    id: 1,
    heading: "Add",
    title: "Add Bank",
    path: "/bank/add",
    type: "bank-route",
  },
  {
    id: 2,
    heading: "List",
    title: "Banks List",
    path: "/bank/list",
    type: "bank-route",
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
