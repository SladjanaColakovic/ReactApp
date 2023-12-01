import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../auth/userSlice";
import { useDispatch } from "react-redux";
import { logout } from "../auth/userSlice";
import { Roles } from "../protected-routes/Roles";

const Navbar = () => {

    const navigate = useNavigate();
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const showRegistrationForm = () => {
        navigate('/registration', /*{replace: true}*/);
    }

    const showLoginForm = () => {
        navigate('/login', /*{replace: true}*/)
    }

    const showHomePage = () => {
        navigate('/', /*{replace: true}*/)
    }

    const showUsers = () => {
        navigate('/review', /*{replace: true}*/)
    }

    const showUserProfile = () => {
        navigate('/profile', /*{replace: true}*/)
    }

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <ul>
            {user && <li><Button name={"Logout"} handleClick={handleLogout} /></li>}
            <li><Button name={"Home"} handleClick={showHomePage} /></li>
            {user && user.role === Roles.ADMIN && <li><Button name={"Users"} handleClick={showUsers} /></li>}
            {user && user.role === Roles.USER && <li><Button name={"Profile"} handleClick={showUserProfile} /></li>}
            {!user && <li><Button name={"Login"} handleClick={showLoginForm} /></li>}
            {!user && <li><Button name={"Register"} handleClick={showRegistrationForm} /></li>}
        </ul>
    );
}

export default Navbar;