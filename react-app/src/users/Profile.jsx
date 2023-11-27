import { useEffect, useState } from "react";
import Button from "../components/Button";
import EditInput from "../components/EditInput";
import { get, put } from '../http/client'
import { useSelector } from "react-redux";
import { selectUser } from "../auth/userSlice";

const Profile = () => {

    const url = process.env.REACT_APP_SERVER_BASE_URL + process.env.REACT_APP_USER_URL;
    const [editUser, setEditUser] = useState(null);
    const user = useSelector(selectUser);

    useEffect(() => {
        get(url + "/" + user.id)
            .then((res) => {
                setEditUser(res.data);
            })
            .catch((error) => {
                console.log(error.message)
            })
    }, [url, user.id])

    const handleEdit = () => {
        const data = {
            id: user.id,
            name: editUser.name,
            username: editUser.username,
            address: editUser.address
        }
        put(url, data)
            .then((res) => {
                setEditUser(res.data);
                get(url + "/" + user.id)
                    .then((res) => {
                        setEditUser(res.data);
                    })
                    .catch((error) => {
                        console.log(error.message)
                    })
            }).catch((error) => {
                console.log(error.message)
            })
    }

    return (
        <div className="main">
            <h1>User profile</h1>
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4">
                    {editUser && <EditInput value={editUser.name} type="text" name={"Name"} setValue={setEditUser} editEntity={editUser} editProperty={"name"} />}
                    {editUser && <EditInput value={editUser.username} type="text" name={"Username"} setValue={setEditUser} editEntity={editUser} editProperty={"username"} />}
                    {editUser && <EditInput value={editUser.address} type="text" name={"Address"} setValue={setEditUser} editEntity={editUser} editProperty={"address"} />}
                    <Button className="saveButton" name={"Edit"} handleClick={handleEdit} />
                </div>
                <div className="col-4"></div>
            </div>
        </div>
    );
}

export default Profile;