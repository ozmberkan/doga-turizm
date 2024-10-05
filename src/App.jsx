import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeRoutes from "./routes/HomeRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import Error from "./pages/Error/Error";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const router = createBrowserRouter([
    HomeRoutes(),
    AdminRoutes(),
    { path: "*", element: <Error /> },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
