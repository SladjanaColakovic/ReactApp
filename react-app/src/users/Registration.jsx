import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { post } from '../http/client'
import { useNavigate } from "react-router-dom";

const Registration = () => {

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const url = process.env.REACT_APP_SERVER_BASE_URL + process.env.REACT_APP_USER_URL;

    const handleRegister = () => {
        const data = {
            name: name,
            username: username,
            address: address,
            password: password
        }

        post(url, data)
            .then((res) => {
                console.log(res.data);
                navigate('/', { replace: true });
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    return (
        <div className="main">
            <div className="row">
                <h1>Registration</h1>
                <div className="col-4"></div>
                <div className="col-4">
                    <Input value={name} setValue={setName} type="text" name={"Name"} />
                    <Input value={username} setValue={setUsername} type="text" name={"Username"} />
                    <Input value={address} setValue={setAddress} type="text" name={"Address"} />
                    <Input value={password} setValue={setPassword} type="password" name={"Password"} />
                    <Button className="saveButton" name={"Save"} handleClick={handleRegister} />
                </div>
                <div className="col-4"></div>
            </div>
        </div>
    );
}

export default Registration;