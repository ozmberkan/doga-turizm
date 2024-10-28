import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Navbar from "~/components/Navbar/Navbar";
import FlexContainer from "~/container/FlexContainer";

const Layout = () => {
  return (
    <FlexContainer>
      <Navbar />
      <Outlet />
      <Toaster />
    </FlexContainer>
  );
};

export default Layout;
