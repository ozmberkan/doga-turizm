import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import FlexContainer from "~/container/FlexContainer";
import AdminNavbar from "~/components/Admin/AdminNavbar";

const AdminLayout = () => {
  return (
    <FlexContainer>
      <AdminNavbar />
      <Outlet />
      <ToastContainer position="top-left" autoClose={700} />
    </FlexContainer>
  );
};

export default AdminLayout;
