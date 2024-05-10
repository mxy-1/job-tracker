import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    const isLoggedIn = !!localStorage.getItem('user');

    return  isLoggedIn ? <>{children}</> : <Navigate to="/log-in" />;
}

export default PrivateRoute;