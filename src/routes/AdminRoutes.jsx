import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { lazy, Suspense } from "react";
import { quantum } from "ldrs";
const AdminLayout = lazy(() => import("~/layouts/AdminLayout"));
const Admin = lazy(() => import("~/pages/Admin/Admin"));

const AdminRoutes = () => {
  quantum.register();
  const { user } = useSelector((store) => store.user);

  return {
    path: "/",
    element: (
      <Suspense
        fallback={
          <div className="w-full  flex justify-center items-center">
            <l-quantum size="90" speed="1.75" color="#4FC646"></l-quantum>
          </div>
        }
      >
        <AdminLayout />
      </Suspense>
    ),
    children: [
      {
        path: "/admin",
        element:
          user?.admin === true ? (
            <Suspense
              fallback={
                <div className="w-full  flex justify-center items-center">
                  <l-quantum size="90" speed="1.75" color="#4FC646"></l-quantum>
                </div>
              }
            >
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
