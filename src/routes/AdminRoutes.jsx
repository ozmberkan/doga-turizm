import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { lazy, Suspense } from "react";
const AdminLayout = lazy(() => import("~/layouts/AdminLayout"));
const Admin = lazy(() => import("~/pages/Admin/Admin"));

const AdminRoutes = () => {
  const { user } = useSelector((store) => store.user);

  return {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading Admin Layout...</div>}>
        <AdminLayout />
      </Suspense>
    ),
    children: [
      {
        path: "/admin",
        element:
          user?.admin === true ? (
            <Suspense fallback={<div>Loading Admin...</div>}>
              <Admin />
            </Suspense>
          ) : (
            <Navigate to="/login" />
          ),
      },
    ],
  };
};

export default AdminRoutes;
