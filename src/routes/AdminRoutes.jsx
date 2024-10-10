import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Admin from "~/pages/Admin/Admin";


const AdminRoutes = () => {
  const { user } = useSelector((store) => store.user);

  return {
    path: "/admin",
    element: user?.admin === true ? <Admin /> : <Navigate to="/" />,
  };
};

export default AdminRoutes;
