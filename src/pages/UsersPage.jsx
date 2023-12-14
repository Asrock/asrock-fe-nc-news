import { useState } from "react"
import { useUpdateEffect } from "../../utils/react-utils";
import UserCard from "../components/UserCard";
import apiRequest from "../../utils/api-utils";

const UsersPage = () => {
    const [users, setUsers] = useState([]);
    useUpdateEffect(() => {
        apiRequest("get", "users")
            .then(({ data }) => setUsers(data.users));
    }, [])
    return (
        <>
            <h1>Users</h1>
            <div className="user-list">
                {users.map(user => <UserCard key={user.username} user={user} />)}
            </div>
        </>
    )
};

export default UsersPage;