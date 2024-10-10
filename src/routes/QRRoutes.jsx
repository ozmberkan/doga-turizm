import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import MobileTicket from "~/pages/MobileTicket/MobileTicket";
import QRLayout from "~/layouts/QRLayout";

const QRRoutes = () => {
  const { user } = useSelector((store) => store.user);

  return {
    path: "/mobile-ticket/:id",
    element: user ? <MobileTicket /> : <Navigate to="/" />,
  };
};

export default QRRoutes;
