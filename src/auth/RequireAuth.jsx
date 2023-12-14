import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Navigate } from "react-router-dom";

const RequireAuth = () => {
    const { user } = useContext(UserContext);
    return user ? children : <Navigate to='/login'/>
};

export default RequireAuth;