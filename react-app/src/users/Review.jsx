import { useEffect, useState } from "react";
import { get, remove } from '../http/client'
import Button from "../components/Button";

const Review = () => {

    const [users, setUsers] = useState(null);
    const url = process.env.REACT_APP_SERVER_BASE_URL + process.env.REACT_APP_USER_URL;

    useEffect(() => {
        get(url)
            .then((res) => {
                setUsers(res.data);
            })
            .catch((error) => {
                console.log(error.message)
            })
    }, [url])

    const handleDelete = (id) => {
        remove(url + "/" + id)
            .then(() => {
                get(url)
                    .then((res) => {
                        setUsers(res.data);
                    })
                    .catch((error) => {
                        console.log(error.message)
                    })
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    return (
        <div className="table-div">
            <h1>Users</h1>
            <table id="users">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Address</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.address}</td>
                            <td><Button className="deleteButton" name={"Delete"} handleClick={() => handleDelete(user.id)} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Review;