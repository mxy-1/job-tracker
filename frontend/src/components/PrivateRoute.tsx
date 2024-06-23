import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    const isLoggedIn = !!localStorage.getItem('user');
    const location = useLocation()

    // pass in current location, so that users can be redirected after login
    return  isLoggedIn ? <>{children}</> : <Navigate to="/log-in" state={{prev:location.pathname}}/>;
}

export default PrivateRoute;