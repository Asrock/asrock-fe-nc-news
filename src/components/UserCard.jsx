import React from "react"
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
    return (
        <div className="user-card">
            <img className="thumbnail" src={user.avatar_url} />
            <Link to={`/users/${user.username}`}>
                <p>{user.username}</p>
            </Link>
        </div>)
};

export default UserCard;