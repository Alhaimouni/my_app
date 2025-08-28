import { createBrowserRouter } from "react-router";
import Mapbox from "./components/mapbox/Mapbox";
import MainLayout from "./components/layout/mainLayout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <p>sdsad</p>,
      },
      {
        path: "dashboard",
        element: <p className="flex justify-center items-center">dashboard</p>,
      },
    ],
  },
]);

export default router;
