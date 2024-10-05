import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Tickets from "~/pages/Tickets/Tickets";
import About from "~/pages/Footer/ExploreWe/About";
import Career from "~/pages/Footer/ExploreWe/Career";
import Contact from "~/pages/Footer/ExploreWe/Contact";
import Energy from "~/pages/Footer/ExploreWe/Energy";
import AskedQuestions from "~/pages/Footer/Help/AskedQuestions";
import CookiePolicy from "~/pages/Footer/Help/CookiePolicy";
import PrivacyPolicy from "~/pages/Footer/Help/PrivacyPolicy";
import ProtectPersonelData from "~/pages/Footer/Help/ProtectPersonelData";
import Hiring from "~/pages/Footer/WithWe/Hiring";
import Rent from "~/pages/Footer/WithWe/Rent";
import CampaignDetail from "~/pages/Campaigns/CampaignDetail";
import AllServices from "~/pages/Services/AllServices";
import Payment from "~/pages/Payment/Payment";
import Profile from "~/pages/Profile/Profile";
import Layout from "~/layouts/Layout";
import Home from "~/pages/Home/Home";

const HomeRoutes = () => {
  const { user } = useSelector((store) => store.user);

  return {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/profile",
        element: user ? <Profile /> : <Navigate to="/" />,
      },
      {
        path: "/tickets",
        element: <Tickets />,
      },
      {
        path: "/payment",
        element: user ? <Payment /> : <Navigate to="/" />,
      },
      { path: "/about", element: <About /> },
      { path: "/career", element: <Career /> },
      { path: "/contact", element: <Contact /> },
      { path: "/energy", element: <Energy /> },
      { path: "/questions", element: <AskedQuestions /> },
      { path: "/cookie", element: <CookiePolicy /> },
      { path: "/privacy", element: <PrivacyPolicy /> },
      { path: "/protectData", element: <ProtectPersonelData /> },
      { path: "/rent", element: <Rent /> },
      { path: "/hiring", element: <Hiring /> },
      { path: "/campaign/:id", element: <CampaignDetail /> },
      { path: "/services", element: <AllServices /> },
    ],
  };
};

export default HomeRoutes;
