import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../auth/userSlice";
import Unauthorized from "../Unauthorized";

const RequireAuth = ({ roles }) => {

    const user = useSelector(selectUser);
    const location = useLocation();

    return (
        roles.includes(user?.role)
            ? <Outlet />
            : user
                ? <Unauthorized />
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;