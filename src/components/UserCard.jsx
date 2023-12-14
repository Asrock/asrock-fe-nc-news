import React from "react"

const UserCard = ({ user }) => {
    return (
        <div className="user-card">
            <img className="thumbnail" src={user.avatar_url} />
            <p>{user.username}</p>
        </div>)
};

export default UserCard;