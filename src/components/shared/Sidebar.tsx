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
import notificationSvg from "@/assets/svgs/notification.svg";
import searchSvg from "@/assets/svgs/search.svg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// IMAGES
import sampleUser from "@/assets/images/shared/user/sampleUser.png";
import logoImg from "@/assets/images/shared/logo/logoImg.png";
import logoName from "@/assets/images/shared/logo/logoName.png";
import Link from "next/link";

// DATA
import { mainLinks, subLinks } from "../../../data/mainLinks";
import { usePathname } from "next/navigation";

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
  backgroundColor: "transparent",
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

  // PAGES LINK
  const [currentPage, setCurrentPage] = React.useState<PagesRouteType>();
  
  React.useEffect(() => {
    const filterPathData = mainLinks.find((item) => item.path === pathname);
    const filterPathSubData = subLinks.find((item) => item.path === pathname);
    setCurrentPage(filterPathData);
    if (!filterPathData) {
      setCurrentPage(filterPathSubData);
    }
    console.log(filterPathData);
  }, []);
  
  const handleDrawer = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      {/* DESKTOP */}
      <Box className={"md:flex hidden"}>
        <CssBaseline />
        <AppBar position="fixed" open={open} className="bg-[#f9f9f9]">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <h3 className=" text-4xl font-bold"> {currentPage?.title}</h3>
            <div className=" flex gap-2 items-center">
              <div className=" relative">
                <Image
                  src={searchSvg}
                  alt="notificationSvg"
                  className=" absolute top-[10px] left-2 w-5"
                />
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder=" Search"
                  className=" w-52 bg-white py-[10px] pl-9 pr-2 mr-2 rounded-md text-[##00000080] md:text-sm text-xs focus:outline-none"
                />
              </div>
              <div className=" rounded-md p-[10px] bg-white">
                <Image src={profileSvg} alt="profileSvg" />
              </div>
              <div className=" rounded-md p-[10px] bg-white">
                <Image src={notificationSvg} alt="notificationSvg" />
              </div>
              <div className=" rounded-md p-[10px] bg-white">
                <Image src={settingsSvg} alt="settingsSvg" />
              </div>
              <Image
                src={sampleUser}
                alt="sampleUser"
                className=" rounded-[50%] w-10 h-10 ml-2"
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
          <List sx={{ height: "100%" }}>
            {mainLinks.map((item, index) => (
              <ListItem
                key={index}
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
                  <Link className=" flex gap-1" href={item.path}>
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
                  </Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <List sx={{ height: "110px" }}>
            {subLinks.map((item, index) => (
              <ListItem
                key={index}
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
                  <Link className=" flex gap-1" href={item.path}>
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
                  </Link>
                </ListItemButton>
              </ListItem>
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
          }}
        >
          <DrawerHeader />
          {children}
        </Box>
      </Box>
    </>
  );
}
