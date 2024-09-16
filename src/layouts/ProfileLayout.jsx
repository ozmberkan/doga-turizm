import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ProfileMenu from "~/pages/Profile/ProfileMenu";

const ProfileLayout = () => {
  return (
    <div className="flex sm:flex-row flex-col gap-y-5 gap-x-2 p-3">
      <ProfileMenu />
      <Outlet />
      <ToastContainer />
    </div>
  );
};

export default ProfileLayout;
