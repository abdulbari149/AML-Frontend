"use client";
import React from "react";
import Sidebar from "./Sidebar";
import MobileSidebar from "./MobileSidebar";
import { usePathname } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <>
      {pathname === "/login" ||
      pathname === "/otp" ||
      pathname === "/create-password" ||
      pathname === "/complete-profile" ? (
        <>{children}</>
      ) : (
        <>
          <Sidebar>{children}</Sidebar>
          <MobileSidebar>{children}</MobileSidebar>
        </>
      )}
    </>
  );
};

export default Layout;
