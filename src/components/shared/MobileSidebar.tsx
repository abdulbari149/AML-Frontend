"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/images/shared/logo/logoImg.png";
import logoName from "@/assets/images/shared/logo/logoName.png";
import { mainLinks, subLinks } from "../../../data/mainLinks";

// SVGS
import documentSvg from "@/assets/svgs/documentSvg.svg";
import settingsSvg from "@/assets/svgs/Settings.svg";
import notificationSvg from "@/assets/svgs/notification.svg";
import searchSvg from "@/assets/svgs/search.svg";
import { CgMenuLeft } from "react-icons/cg";

// IMAGES
import sampleUser from "@/assets/images/shared/user/sampleUser.png";
import { usePathname } from "next/navigation";

const drawerWidth = 260;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
}

export default function MobileSidebar(
  { children }: { children: React.ReactNode },
  props: Props
) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const pathname = usePathname();
  const [currentPage, setCurrentPage] = React.useState<PagesRouteType>();

  React.useEffect(() => {
    const filterPathData = mainLinks.find((item) => item.path === pathname);
    const filterPathSubData = subLinks.find((item) => item.path === pathname);
    setCurrentPage(filterPathData);
    if (!filterPathData) {
      setCurrentPage(filterPathSubData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div className=" flex flex-col justify-between h-screen">
      <Toolbar />
      <List sx={{ height: "100%" }}>
        {mainLinks.map((item, index) => (
          <Link key={index} href={item.path}>
            <ListItem
              key={index}
              disablePadding
              sx={{ display: "block" }}
              onClick={() => {
                setCurrentPage(item), handleDrawerToggle();
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 45,
                  paddingTop: "0px",
                  paddingBottom: "0px",
                  justifyContent: "start",
                  px: 2.5,
                }}
              >
                <div className=" flex gap-1">
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: 3,
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
                  >
                    {item.title}
                  </p>
                </div>
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <List sx={{ height: "110px" }}>
        {subLinks.map((item, index) => (
          <Link key={index} href={item.path}>
            <ListItem
              key={index}
              disablePadding
              sx={{ display: "block" }}
              onClick={() => {
                setCurrentPage(item), handleDrawerToggle();
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 45,
                  paddingTop: "0px",
                  paddingBottom: "0px",
                  justifyContent: "start",
                  px: 2.5,
                }}
              >
                <div className=" flex gap-1">
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: 3,
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
                  >
                    {item.title}
                  </p>
                </div>
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box className={"md:hidden flex w-[90%] mx-auto"}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          boxShadow: "none",
          backgroundColor: "transparent",
          width: "100%",
          ml: { sm: `${drawerWidth}px` },
        }}
        className="bg-[#f9f9f9]"
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0px",
            width: "90%",
            margin: "0 auto",
          }}
        >
          <div className=" flex gap-1 items-center">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <CgMenuLeft className=" text-black text-[28px]" />
            </IconButton>
            <Image
              src={logoImg}
              alt="logoImg"
              className=" w-7 h-7"
              quality={100}
            />
            <Image
              src={logoName}
              alt="logoName"
              className=" w-32 h-6"
              quality={100}
            />
          </div>
          <div className=" flex gap-1 items-center">
            <Image
              src={sampleUser}
              alt="sampleUser"
              className=" rounded-[50%] w-6 h-6 mr-1"
            />
            <Image src={documentSvg} alt="profileSvg" />
            <Image src={notificationSvg} alt="notificationSvg" />
            <Image src={settingsSvg} alt="settingsSvg" />
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 0,
          backgroundColor: "#f9f9f9",
          height: "100vh",
          width: "90%",
        }}
      >
        <Toolbar />
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
            className=" w-full bg-[#F1F1F1] py-3 pl-9 pr-2 mr-2 rounded-md text-[#00000080] placeholder:text-[#000000] md:text-sm text-xs focus:outline-none"
          />
        </div>
        <h3 className=" text-4xl font-bold mt-2 mb-4"> {currentPage?.title}</h3>
        {children}
      </Box>
    </Box>
  );
}
