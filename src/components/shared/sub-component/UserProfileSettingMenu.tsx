import React from "react";
import { signOut } from "aws-amplify/auth";

import profileSvg from "@/assets/svgs/Profile.svg";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";

const UserProfileSettingMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  async function handleSignOut() {
    try {
      await signOut();
    } catch (error) {
      alert("error signing out: "+ error);
    }
  }
  

  return (
    <div>
      <div
        className="rounded-md p-[10px] bg-white"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        // @ts-ignore
        onClick={handleClick}
      >
        {/* @ts-ignore */}
        <Image src={profileSvg} alt="profileSvg" />
      </div>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleSignOut}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default UserProfileSettingMenu;
