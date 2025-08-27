import { createBrowserRouter } from "react-router";
import MainLayout from "./components/layout/mainLayout/MainLayout";

const router = createBrowserRouter([
  {

    path: "/",
    element: <MainLayout />, 
    children: [
      { index: true, element: <p>mvp</p> },   
      { path: "dashboard", element: <p>dashboard</p> }
    ],
  },

])

export default router
