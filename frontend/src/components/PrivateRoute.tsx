import { Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    const { user } = useAuthContext()
    
    return  user ? <>{children}</> : <Navigate to="/log-in" />;
}

export default PrivateRoute;