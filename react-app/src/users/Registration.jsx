import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

const Registration = () => {

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('')

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
                    <Button className="saveButton" name={"Save"} />
                </div>
                <div className="col-4"></div>
            </div>
        </div>
    );
}

export default Registration;