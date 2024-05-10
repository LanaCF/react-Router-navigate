import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const AuthRequire = ({ children }) => {
    const { state } = useLocation();

    const { user } = useAuth();

    if (!user) {
        return <Navigate to='/login' state={{ from: state?.from }} />
    }

    return children;
};