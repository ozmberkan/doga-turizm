import React from "react";
import { useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";
import createRoutes from "./routes/routes";

const App = () => {
  const { user } = useSelector((store) => store.user);
  const router = createRoutes(user);

  return <RouterProvider router={router} />;
};

export default App;
