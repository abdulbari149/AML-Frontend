"use client";
import React from "react";
import Sidebar from "./Sidebar";
import MobileSidebar from "./MobileSidebar";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import amplifyconfig from "@/amplifyconfiguration.json";

Amplify.configure(amplifyconfig);
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Authenticator hideSignUp={true}>
        {() => (
          <>
            <Sidebar>{children}</Sidebar>
            <MobileSidebar>{children}</MobileSidebar>
          </>
        )}
      </Authenticator>
    </>
  );
};

export default Layout;
