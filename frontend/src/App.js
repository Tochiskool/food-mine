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

function App() {
  return <RouterProvider router={router} />;
}

export default App;
