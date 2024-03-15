"use client";
import * as React from "react";
import Image from "next/image";

// MATERIAL UI
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";

// SVGS
import profileSvg from "@/assets/svgs/Profile.svg";
import settingsSvg from "@/assets/svgs/Settings.svg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// IMAGES
import sampleUser from "@/assets/images/shared/user/sampleUser.png";
import logoImg from "@/assets/images/shared/logo/logoImg.png";
import logoName from "@/assets/images/shared/logo/logoName.png";
import Link from "next/link";

// DATA
import {
  bankReportSettingRoute,
  banksRoute,
  mainLinks,
  reportSettingsRoute,
  subLinks,
} from "../../../data/mainLinks";
import { usePathname } from "next/navigation";

// Component
import UserProfileSettingMenu from "./sub-component/UserProfileSettingMenu";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { useAuth } from "@/utils/useAuth";
const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  zIndex: 10000000,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  // justifyContent:open?"space-between": "flex-end",
  // padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  color: "black",
  boxShadow: "none",
  backgroundColor: "#f9f9f9",
  width: `calc(100% - 4.8%)`,
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [isAuth, setIsAuth] = React.useState<string | null>();

  React.useEffect(() => {
    (async () => {
      const authRole = await useAuth();
      if (Array.isArray(authRole)) {
        setIsAuth(authRole[0] as string);
      } else {
        setIsAuth(authRole as string);
      }
    })();
  }, []);

  // PAGES LINK
  const [currentPage, setCurrentPage] = React.useState<PagesRouteType | null>(
    null
  );

  React.useEffect(() => {
    const filterPathData = mainLinks.find((item) => item.path === pathname);
    const filterPathSubData = subLinks.find((item) => item.path === pathname);
    const filterPathBankRoute = banksRoute.find(
      (item) => item.path === pathname
    );
    const filterPathBankReportRoute = bankReportSettingRoute.find(
      (item) => item.path === pathname
    );
    const filterPathReportRoute = reportSettingsRoute.find(
      (item) => item.path === pathname
    );

    if (filterPathData) {
      setCurrentPage(filterPathData);
    } else if (filterPathSubData) {
      setCurrentPage(filterPathSubData);
    } else if (filterPathBankRoute) {
      setCurrentPage(filterPathBankRoute);
    } else if (filterPathReportRoute) {
      setCurrentPage(filterPathReportRoute);
    } else if (filterPathBankReportRoute) {
      setCurrentPage(filterPathBankReportRoute);
    } else {
      setCurrentPage(null);
    }
  }, [pathname]);

  const handleDrawer = () => {
    setOpen((prev) => !prev);
    if (!open) {
      setDropDown([true, true]);
    } else {
      setDropDown([false, false]);
    }
  };

  const [dropDown, setDropDown] = React.useState<boolean[]>([false, false]);

  const handleDropdownClick = (index: number | null) => {
    if (index !== null) {
      const newDropDown = [...dropDown]; // Create a copy of the current state
      // Toggle the state of the clicked index
      newDropDown[index] = !newDropDown[index];

      setDropDown(newDropDown); // Update the state
    }
  };

  React.useEffect(() => {
    console.log(dropDown);
  }, [dropDown]);

  return (
    <>
      {/* DESKTOP */}
      <Box className={"md:flex hidden"}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: currentPage ? "space-between" : "flex-end",
            }}
          >
            {currentPage && (
              <h3 className=" text-4xl font-bold"> {currentPage?.title}</h3>
            )}
            <div className=" flex gap-2 items-center">
              <UserProfileSettingMenu />

              <Image
                src={sampleUser}
                alt="sampleUser"
                className="w-10 h-10 ml-2"
              />
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{ display: "flex", justifyContent: "space-between" }}
          open={open}
        >
          <DrawerHeader
            sx={{ justifyContent: open ? "space-between" : "flex-end" }}
          >
            <div
              className={`${open ? " ml-3 flex gap-2 items-center" : "hidden"}`}
            >
              <Image
                alt="logoImg"
                src={logoImg}
                className=" w-7"
                quality={100}
              />
              <Image
                alt="logoName"
                src={logoName}
                className=" w-28 h-6"
                quality={100}
              />
            </div>
            <div
              className=" bg-[#EDE196] rounded-s-[20px] py-2 px-3 cursor-pointer"
              onClick={handleDrawer}
            >
              {open ? (
                <FaArrowLeft className=" text-white text-[15px]" />
              ) : (
                <FaArrowRight className=" text-white text-[15px]" />
              )}
            </div>
          </DrawerHeader>
          <div className=" h-full">
            <List sx={{ py: 0 }}>
              {mainLinks.map(
                (item, index) =>
                  item.type === "route" && (
                    <Link key={index} href={item.path}>
                      <ListItem
                        key={index}
                        disablePadding
                        sx={{ display: "block" }}
                        onClick={() => {
                          setCurrentPage(item);
                        }}
                      >
                        <ListItemButton
                          sx={{
                            minHeight: 40,
                            paddingTop: "0px",
                            paddingBottom: "0px",
                            justifyContent: open ? "initial" : "center",
                            px: 2.5,
                          }}
                        >
                          <div className=" flex gap-1">
                            <ListItemIcon
                              sx={{
                                minWidth: 0,
                                mr: open ? 3 : "auto",
                                justifyContent: "center",
                              }}
                            >
                              <Image alt="icon" src={item.icon} />
                            </ListItemIcon>
                            <p
                              className={` ${
                                item.path === currentPage?.path
                                  ? "text-base font-bold"
                                  : "text-[15px] font-normal"
                              } `}
                              style={{ display: open ? "block" : "none" }}
                            >
                              {item.title}
                            </p>
                          </div>
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  )
              )}
            </List>
            {isAuth === "Admin" && (
              <List sx={{ py: 0 }}>
                <ListItem
                  disablePadding
                  sx={{ display: "block" }}
                  onClick={() => handleDropdownClick(0)}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 40,
                      paddingTop: "0px",
                      paddingBottom: "0px",
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      width: "100%",
                    }}
                  >
                    <div className=" flex justify-between items-center w-full">
                      <div className=" flex gap-1">
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          <Image alt="icon" src={settingsSvg} />
                        </ListItemIcon>
                        <p
                          className={` ${
                            dropDown[0] || currentPage?.type === "bank-route"
                              ? "text-base font-bold"
                              : "text-[15px] font-normal"
                          } `}
                          style={{ display: open ? "block" : "none" }}
                        >
                          Bank
                        </p>
                      </div>
                      {dropDown[0] ? (
                        <IoIosArrowDown className="text-base" />
                      ) : (
                        <IoIosArrowForward className="text-base" />
                      )}
                    </div>
                  </ListItemButton>
                </ListItem>
                {dropDown[0] && (
                  <>
                    <ListItem disablePadding sx={{ display: "block" }}>
                      {banksRoute.map(
                        (item, index) =>
                          item.type === "bank-route" && (
                            <Link key={index} href={item.path}>
                              <ListItem
                                key={index}
                                disablePadding
                                sx={{ display: "block" }}
                                onClick={() => {
                                  setCurrentPage(item);
                                }}
                              >
                                <ListItemButton
                                  sx={{
                                    minHeight: 40,
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                    justifyContent: open ? "initial" : "center",
                                    px: 2.5,
                                    pl: 12,
                                  }}
                                >
                                  <p
                                    className={` ${
                                      item.path === currentPage?.path
                                        ? "text-base font-bold"
                                        : "text-[15px] font-normal"
                                    } `}
                                    style={{ display: open ? "block" : "none" }}
                                  >
                                    {item.heading}
                                  </p>
                                </ListItemButton>
                              </ListItem>
                            </Link>
                          )
                      )}
                    </ListItem>
                  </>
                )}
              </List>
            )}
            <List sx={{ py: 0 }}>
              <ListItem
                disablePadding
                sx={{ display: "block" }}
                onClick={() => handleDropdownClick(1)}
              >
                <ListItemButton
                  sx={{
                    minHeight: 40,
                    paddingTop: "0px",
                    paddingBottom: "0px",
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    width: "100%",
                  }}
                >
                  <div className=" flex justify-between items-center w-full">
                    <div className=" flex gap-1">
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                        }}
                      >
                        <Image alt="icon" src={settingsSvg} />
                      </ListItemIcon>
                      <p
                        className={` ${
                          dropDown[1] || currentPage?.type === "report-route"
                            ? "text-base font-bold"
                            : "text-[15px] font-normal"
                        } `}
                        style={{ display: open ? "block" : "none" }}
                      >
                        Report Settings
                      </p>
                    </div>
                    {dropDown[1] ? (
                      <IoIosArrowDown className="text-base" />
                    ) : (
                      <IoIosArrowForward className="text-base" />
                    )}
                  </div>
                </ListItemButton>
              </ListItem>
              {dropDown[1] && (
                <>
                  <ListItem disablePadding sx={{ display: "block" }}>
                    {(isAuth === "Admin"
                      ? reportSettingsRoute
                      : bankReportSettingRoute
                    ).map(
                      (item, index) =>
                        item.type === "report-route" && (
                          <Link key={index} href={item.path}>
                            <ListItem
                              key={index}
                              disablePadding
                              sx={{ display: "block" }}
                              onClick={() => {
                                setCurrentPage(item);
                              }}
                            >
                              <ListItemButton
                                sx={{
                                  minHeight: 40,
                                  paddingTop: "0px",
                                  paddingBottom: "0px",
                                  justifyContent: open ? "initial" : "center",
                                  px: 2.5,
                                  pl: 12,
                                }}
                              >
                                <p
                                  className={` ${
                                    item.path === currentPage?.path
                                      ? "text-base font-bold"
                                      : "text-[15px] font-normal"
                                  } `}
                                  style={{ display: open ? "block" : "none" }}
                                >
                                  {item.heading}
                                </p>
                              </ListItemButton>
                            </ListItem>
                          </Link>
                        )
                    )}
                  </ListItem>
                </>
              )}
            </List>
          </div>
          {/* SETTINGS */}
          <List sx={{ height: "fit-content" }}>
            {subLinks.map((item, index) => (
              <Link key={index} href={item.path}>
                <ListItem
                  disablePadding
                  sx={{ display: "block" }}
                  onClick={() => setCurrentPage(item)}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 45,
                      paddingTop: "0px",
                      paddingBottom: "0px",
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <div className=" flex gap-1">
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                        }}
                      >
                        <Image alt="icon" src={item.icon} />
                      </ListItemIcon>
                      <p
                        className={` ${
                          item.path === currentPage?.path
                            ? "text-base font-bold"
                            : "text-[15px] font-normal"
                        } `}
                        style={{ display: open ? "block" : "none" }}
                      >
                        {item.title}
                      </p>
                    </div>
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            backgroundColor: "#f9f9f9",
            height: "100vh",
            width: open ? "80%" : "90%",
          }}
        >
          <DrawerHeader />
          {children}
        </Box>
      </Box>
    </>
  );
}
