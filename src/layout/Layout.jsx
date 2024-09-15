import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "~/components/Navbar/Navbar";
import FlexContainer from "~/container/FlexContainer";

const Layout = () => {
  return (
    <FlexContainer>
      <Navbar />
      <Outlet />
      <ToastContainer position="bottom-right" />
    </FlexContainer>
  );
};

export default Layout;
