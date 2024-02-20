import React from "react";
import Sidebar from "./Sidebar";
import MobileSidebar from "./MobileSidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Sidebar>{children}</Sidebar>
      <MobileSidebar>{children}</MobileSidebar>
    </>
  );
};

export default Layout;
