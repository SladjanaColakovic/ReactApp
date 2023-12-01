import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import customAxios from "../http/customAxios";
import { useDispatch } from "react-redux";
import { login } from "../auth/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = () => {
        const data = {
            username: username,
            password: password
        }
        customAxios.post(process.env.REACT_APP_SERVER_BASE_URL + process.env.REACT_APP_AUTH_URL + '/login', data)
            .then((res) => {
                var obj = JSON.parse(window.atob(res.data.accessToken.split('.')[1]))
                console.log(res.data);
                dispatch(login({
                    token: res.data.accessToken,
                    expiredIn: obj.exp,
                    role: obj.role,
                    id: obj.id,
                    loggedIn: true
                }))
                navigate('/', {replace: true})
            })
            .catch((error) => {
                console.log(error.message)
            })

    }

    return (<div className="main">
        <div className="row">
            <h1>Login</h1>
            <div className="col-4"></div>
            <div className="col-4">
                <Input value={username} setValue={setUsername} type="text" name={"Username"} />
                <Input value={password} setValue={setPassword} type="password" name={"Password"} />
                <Button className="saveButton" name={"Login"} handleClick={handleLogin} />
            </div>
            <div className="col-4"></div>
        </div>
    </div>);
}

export default Login;