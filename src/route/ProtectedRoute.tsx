/* eslint-disable @typescript-eslint/no-explicit-any */
import { Navigate } from "react-router-dom";


const ProtectedRoute = ({ children }: { children: any }) => {
    const token = localStorage.getItem("maactask-accessToken");
    if (token) {
        return <>{children}</>;
    } else {
        return <Navigate to={"/log-in"}></Navigate>;
    }
};

export default ProtectedRoute;