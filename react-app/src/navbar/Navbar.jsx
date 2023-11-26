import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../auth/userSlice";

const Navbar = () => {

    const navigate = useNavigate();
    const user = useSelector(selectUser);

    const showRegistrationForm = () => {
        navigate('/', {replace: true});
    }

    const showLoginForm = () => {
        navigate('/login', {replace: true})
    }

    return (
        <ul>
            {!user && <li><Button name={"Login"} handleClick={showLoginForm} /></li>}
            {!user && <li><Button name={"Register"} handleClick={showRegistrationForm}/></li>}
        </ul>
    );
}

export default Navbar;