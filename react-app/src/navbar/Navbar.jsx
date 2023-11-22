import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
const Navbar = () => {

    const navigate = useNavigate();

    const showRegistrationForm = () => {
        navigate('/', {replace: true});
    }

    const showLoginForm = () => {
        navigate('/login', {replace: true})
    }

    return (
        <ul>
            <li><Button name={"Login"} handleClick={showLoginForm} /></li>
            <li><Button name={"Register"} handleClick={showRegistrationForm}/></li>
        </ul>
    );
}

export default Navbar;