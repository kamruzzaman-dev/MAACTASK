import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import App from "../App";
import RegionList from "../pages/Dashboard/Region/reginList";
import AreaList from "../pages/Dashboard/Area";
import CreateArea from "../pages/Dashboard/Area/createArea";
import CreateRegion from "../pages/Dashboard/Region/createRegion";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <LandingPage />, },
      { path: "/log-in", element: <LogIn /> },
      { path: "/register", element: <Register /> },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <Dashboard />
    ),
    children: [
      {
        path: "region",
        element: <RegionList />,
      },
      {
        path: "area",
        element: <AreaList />,
      },
      {
        path: "create-area",
        element: <CreateArea />,
      },
      {
        path: "create-region",
        element: <CreateRegion />,
      },
    ],
  },
]);

export default router;
