import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import FlexContainer from "~/container/FlexContainer";
import AdminNavbar from "~/components/Admin/AdminNavbar";

const AdminLayout = () => {
  const { theme } = useSelector((store) => store.theme);
  return (
    <FlexContainer>
      <AdminNavbar />
      <Outlet />
      <ToastContainer
        position="top-left"
        autoClose={700}
        theme={theme === "dark" ? "dark" : "light"}
      />
    </FlexContainer>
  );
};

export default AdminLayout;
