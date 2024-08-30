import React from "react";
import AdminNavbar from "./AdminNavbar";
import AdminTable from "./AdminTable";
import { ToastContainer } from "react-toastify";

const Admin = () => {
  return (
    <>
      <ToastContainer position="top-left" />
      <div className="flex flex-col">
        <AdminNavbar />
        <div className="p-5">
          <AdminTable />
        </div>
      </div>
    </>
  );
};

export default Admin;
