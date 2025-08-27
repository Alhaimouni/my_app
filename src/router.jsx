import { createBrowserRouter } from "react-router";
import MainLayout from "./components/layout/mainLayout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <p className="flex justify-center items-center">mvp</p>,
      },
      {
        path: "dashboard",
        element: <p className="flex justify-center items-center">dashboard</p>,
      },
    ],
  },
]);

export default router;
