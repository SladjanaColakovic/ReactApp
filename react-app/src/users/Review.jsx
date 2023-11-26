import { useEffect, useState } from "react";
import { get } from '../http/client'

const Review = () => {

    const [users, setUsers] = useState(null);
    const url = process.env.REACT_APP_SERVER_BASE_URL + process.env.REACT_APP_USER_URL;

    useEffect(() => {
        get(url)
            .then((res) => {
                setUsers(res.data);
            })
    }, [url])

    return (
        <div className="table-div">
            <h1>Users</h1>
            <table id="users">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Review;