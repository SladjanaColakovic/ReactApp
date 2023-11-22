import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (  <div className="main">
    <div className="row">
        <h1>Login</h1>
        <div className="col-4"></div>
        <div className="col-4">
            <Input value={username} setValue={setUsername} type="text" name={"Username"} />
            <Input value={password} setValue={setPassword} type="password" name={"Password"} />
            <Button className="saveButton" name={"Login"} />
        </div>
        <div className="col-4"></div>
    </div>
</div> );
}
 
export default Login;