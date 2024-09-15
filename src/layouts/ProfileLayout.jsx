import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ProfileMenu from "~/pages/Profile/ProfileMenu";

const ProfileLayout = () => {
  return (
    <div className="flex gap-x-2 p-3">
      <ProfileMenu />
      <Outlet />
    </div>
  );
};

export default ProfileLayout;
