import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import Admin from "./pages/Admin/Admin";
import Profile from "./pages/Profile/Profile";
import Tickets from "./pages/Tickets/Tickets";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminCampaign from "./pages/Admin/AdminCampaign";
import AdminTickets from "./pages/Admin/AdminTickets";
import FlexContainer from "./container/FlexContainer";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
import { Loading } from "./components/Loading/Loading";

const App = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const Layout = () => {
    return (
      <FlexContainer>
        <Navbar open={open} setOpen={setOpen} />
        <Outlet />
        {/* {loading && <Loading />} */}
      </FlexContainer>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home setLoading={setLoading} />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/tickets",
          element: <Tickets />,
        },
      ],
    },
    {
      path: "/admin",
      element: <Admin />,
      children: [
        {
          path: "campaign",
          element: <AdminCampaign />,
        },
        {
          path: "tickets",
          element: <AdminTickets />,
        },
      ],
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
