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

const App = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const Layout = () => (
    <FlexContainer>
      <Navbar open={open} setOpen={setOpen} />
      <Outlet />
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
