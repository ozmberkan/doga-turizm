// CSS / IMPORTS
import Navbar from "./components/Navbar/Navbar";
import FlexContainer from "./container/FlexContainer";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
// Pages
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import Admin from "./pages/Admin/Admin";
import Tickets from "./pages/Tickets/Tickets";
import About from "./pages/Footer/ExploreWe/About";
import Career from "./pages/Footer/ExploreWe/Career";
import Contact from "./pages/Footer/ExploreWe/Contact";
import Energy from "./pages/Footer/ExploreWe/Energy";
import AskedQuestions from "./pages/Footer/Help/AskedQuestions";
import CookiePolicy from "./pages/Footer/Help/CookiePolicy";
import PrivacyPolicy from "./pages/Footer/Help/PrivacyPolicy";
import ProtectPersonelData from "./pages/Footer/Help/ProtectPersonelData";
import Hiring from "./pages/Footer/WithWe/Hiring";
import Rent from "./pages/Footer/WithWe/Rent";
import CampaignDetail from "./pages/Campaigns/CampaignDetail";
import AllServices from "./pages/Services/AllServices";
import Payment from "./pages/Payment/Payment";
import ProfileLayout from "./layouts/ProfileLayout";
import Profile from "./pages/Profile/MyProfile/Profile";
import MyTickets from "./pages/Profile/MyTickets/MyTickets";
import LastTickets from "./pages/Profile/LastTickets/LastTickets";

const App = () => {
  const { user } = useSelector((store) => store.user);

  const Layout = () => {
    return (
      <FlexContainer>
        <Navbar />
        <Outlet />
        <ToastContainer position="bottom-right" />
      </FlexContainer>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "/profile",
          element: user ? <ProfileLayout /> : <Navigate to="/" />,
          children: [
            { path: "myprofile", element: <Profile /> },
            { path: "mytickets", element: <MyTickets /> },
            { path: "lasttickets", element: <LastTickets /> },
          ],
        },
        {
          path: "/tickets",
          element: <Tickets />,
        },
        {
          path: "/payment",
          element: user ? <Payment /> : <Navigate to="/" />,
        },
        // FOOTER
        { path: "/about", element: <About /> },
        { path: "/career", element: <Career /> },
        { path: "/contact", element: <Contact /> },
        { path: "/energy", element: <Energy /> },
        // FOOTER
        { path: "/questions", element: <AskedQuestions /> },
        { path: "/cookie", element: <CookiePolicy /> },
        { path: "/privacy", element: <PrivacyPolicy /> },
        { path: "/protectData", element: <ProtectPersonelData /> },
        // FOOTER
        { path: "/rent", element: <Rent /> },
        { path: "/hiring", element: <Hiring /> },
        //
        { path: "/campaign/:id", element: <CampaignDetail /> },
        //
        { path: "/services", element: <AllServices /> },
      ],
    },
    {
      path: "/admin",
      element: user?.admin === true ? <Admin /> : <Navigate to="/" />,
    },
    { path: "*", element: <Error /> },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
