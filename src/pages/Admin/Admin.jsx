import AdminNavbar from "./AdminNavbar";
import AdminTable from "./AdminTable";
import { ToastContainer } from "react-toastify";
import FlexContainer from "~/container/FlexContainer";

const Admin = () => {
  return (
    <FlexContainer>
      <AdminNavbar />
      <AdminTable />
      <ToastContainer position="top-left" />
    </FlexContainer>
  );
};

export default Admin;
