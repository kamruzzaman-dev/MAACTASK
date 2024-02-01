import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/log-in", element: <LogIn /> },
  { path: "/register-in", element: <Register /> },
  { path: "/dashboard", element: <Dashboard /> },
]);

export default router;
