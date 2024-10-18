import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "~/components/Navbar/Navbar";
import FlexContainer from "~/container/FlexContainer";

const Layout = () => {
  const { theme } = useSelector((store) => store.theme);

  return (
    <FlexContainer>
      <ToastContainer
        position="top-center"
        autoClose={700}
        theme={theme === "dark" ? "dark" : "light"}
      />
      <Navbar />
      <Outlet />
    </FlexContainer>
  );
};

export default Layout;
