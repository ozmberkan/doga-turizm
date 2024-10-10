import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "~/components/Footer/Footer";
import Navbar from "~/components/Navbar/Navbar";
import FlexContainer from "~/container/FlexContainer";

const Layout = () => {
  return (
    <FlexContainer>
      <ToastContainer position="top-center" autoClose={700} />
      <Navbar />
      <Outlet />
      <Footer />
    </FlexContainer>
  );
};

export default Layout;
