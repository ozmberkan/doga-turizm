import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import FlexContainer from "./container/FlexContainer";
import Navbar from "./components/Navbar/Navbar";
// Pages
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import Admin from "./pages/Admin/Admin";
import Profile from "./pages/Profile/Profile";
import Tickets from "./pages/Tickets/Tickets";
import AdminCampaign from "./pages/Admin/AdminCampaign";
import AdminTickets from "./pages/Admin/AdminTickets";
import MyTickets from "./pages/Profile/MyTickets";
import About from "./pages/Footer/ExploreWe/About";
import Carier from "./pages/Footer/ExploreWe/Carier";
import Contact from "./pages/Footer/ExploreWe/Contact";
import Energy from "./pages/Footer/ExploreWe/Energy";
import AskedQuestions from "./pages/Footer/Help/AskedQuestions";
import CookiePolicy from "./pages/Footer/Help/CookiePolicy";
import PrivacyPolicy from "./pages/Footer/Help/PrivacyPolicy";
import ProtectPersonelData from "./pages/Footer/Help/ProtectPersonelData";
import Hiring from "./pages/Footer/WithWe/Hiring";
import Rent from "./pages/Footer/WithWe/Rent";
import CampaignDetail from "./pages/Campaigns/CampaignDetail";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  const [loading, setLoading] = useState(true);

  const Layout = () => (
    <FlexContainer>
      <Navbar />
      <Outlet />
      <ToastContainer />
    </FlexContainer>
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home setLoading={setLoading} /> },
        {
          path: "/profile",
          element: <Profile />,
          children: [{ path: "mytickets", element: <MyTickets /> }],
        },
        { path: "/tickets", element: <Tickets /> },
        { path: "/about", element: <About /> },
        { path: "/carier", element: <Carier /> },
        { path: "/contact", element: <Contact /> },
        { path: "/energy", element: <Energy /> },
        //
        { path: "/questions", element: <AskedQuestions /> },
        { path: "/cookie", element: <CookiePolicy /> },
        { path: "/privacy", element: <PrivacyPolicy /> },
        { path: "/protectData", element: <ProtectPersonelData /> },
        //
        { path: "/rent", element: <Rent /> },
        { path: "/hiring", element: <Hiring /> },
        //
        { path: "/campaign/:id", element: <CampaignDetail /> },
      ],
    },
    {
      path: "/admin",
      element: <Admin />,
      children: [
        { path: "campaign", element: <AdminCampaign /> },
        { path: "tickets", element: <AdminTickets /> },
      ],
    },
    { path: "*", element: <Error /> },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
