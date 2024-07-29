import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header/header";
import ErrorHanling from "./components/ErrorHandling/ErrorHanling";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    errorElement: <ErrorHanling />,
  },
]);
const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
