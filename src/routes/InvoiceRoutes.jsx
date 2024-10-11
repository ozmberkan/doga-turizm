import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Invoice from "~/pages/Invoice/Invoice";

const InvoiceRoutes = () => {
  const { user } = useSelector((store) => store.user);

  return {
    path: "/e-invoice/:id",
    element: user ? <Invoice /> : <Navigate to="/" />,
  };
};

export default InvoiceRoutes;
