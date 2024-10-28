import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import HomeRoutes from "./routes/HomeRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import Error from "./pages/Error/Error";
import QRRoutes from "./routes/QRRoutes";
import InvoiceRoutes from "./routes/InvoiceRoutes";

const App = () => {
  const { theme } = useSelector((store) => store.theme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const router = createBrowserRouter([
    HomeRoutes(),
    AdminRoutes(),
    QRRoutes(),
    InvoiceRoutes(),
    { path: "*", element: <Error /> },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
