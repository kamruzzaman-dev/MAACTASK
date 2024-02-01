import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import App from "../App";

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
  { path: "/dashboard", element: <Dashboard /> },
]);

export default router;
