import React from "react";
import AdminNavbar from "./AdminNavbar";
import AdminTable from "./AdminTable";
import { ToastContainer } from "react-toastify";
import FlexContainer from "~/container/FlexContainer";

const Admin = () => {
  return (
    <>
      <ToastContainer position="top-left" />
      <FlexContainer>
        <AdminNavbar />
        <div className="p-5">
          <AdminTable />
        </div>
      </FlexContainer>
    </>
  );
};

export default Admin;
