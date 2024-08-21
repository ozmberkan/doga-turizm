import Home from "./pages/Home/Home";
import Test from "./pages/Test/Test";
import Register from "./pages/Register/Register";
import Error from "./pages/Error/Error";
import Admin from "./pages/Admin/Admin";
import Profile from "./pages/Profile/Profile";
import Tickets from "./pages/Tickets/Tickets";
import TicketDetail from "./pages/Tickets/TicketDetail";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AdminCampaign from "./pages/Admin/AdminCampaign";
import AdminTickets from "./pages/Admin/AdminTickets";
import FlexContainer from "./container/FlexContainer";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";

const App = () => {
  const [open, setOpen] = useState(false);

  const Layout = () => {
    return (
      <FlexContainer>
        <Navbar open={open} setOpen={setOpen} />
        <Outlet />
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
          element: <Home />,
        },
        {
          path: "/register",
          element: <Register />,
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
