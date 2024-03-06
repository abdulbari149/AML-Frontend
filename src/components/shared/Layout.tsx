"use client";
import React from "react";
import Sidebar from "./Sidebar";
import MobileSidebar from "./MobileSidebar";

import {
  Authenticator,
  Heading,
  Theme,
  ThemeProvider,
  useTheme,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import amplifyconfig from "@/amplifyconfiguration.json";
import Image from "next/image";

// IMAGES
import logo from "@/assets/images/shared/logo/logo.png";

const components = {
  SignIn: {
    Header() {
      const { tokens } = useTheme();

      return (
        // <Heading
        //   padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
        //   level={3}
        // >
        //   Sign in to your account
        // </Heading>
        <div className=" flex flex-col gap-5 px-8 pt-6">
          <div className=" flex justify-center items-center">
            <Image src={logo} alt="logo" quality={100} />
          </div>
          <div className=" flex flex-col gap-2 w-full">
            <h2 className=" md:text-3xl text-2xl font-semibold">Sign in</h2>
            <p className="md:text-sm text-[10px] font-normal text-[#000000BF]">
              Enter your email address and password to continue.
            </p>
          </div>
        </div>
      );
    },
  },
};

Amplify.configure(amplifyconfig);
const Layout = ({ children }: { children: React.ReactNode }) => {
  const { tokens } = useTheme();
  const theme: Theme = {
    name: "Auth Example Theme",
    tokens: {
      components: {
        authenticator: {
          router: {
            boxShadow: `0 0 16px ${tokens.colors.overlay["10"]}`,
            borderWidth: "0",
          },
        },
        button: {
          primary: {
            backgroundColor: "#C4B454",
          },
          _hover: {
            backgroundColor: "#C4B454 !important",
          },
        },
        fieldcontrol: {
          _focus: {
            borderColor: "transparent",
          },
        },
      },
    },
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Authenticator hideSignUp={true} components={components}>
          {() => (
            <>
              <Sidebar>{children}</Sidebar>
              <MobileSidebar>{children}</MobileSidebar>
            </>
          )}
        </Authenticator>
      </ThemeProvider>
    </>
  );
};

export default Layout;
