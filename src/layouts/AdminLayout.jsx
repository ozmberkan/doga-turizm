import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import FlexContainer from "~/container/FlexContainer";
import AdminNavbar from "~/components/Admin/AdminNavbar";

const AdminLayout = () => {
  return (
    <FlexContainer>
      <AdminNavbar />
      <Outlet />
      <Toaster />
    </FlexContainer>
  );
};

export default AdminLayout;
