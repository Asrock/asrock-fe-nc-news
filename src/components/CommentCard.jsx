import React from "react"

const CommentCard = ({ comment: { body, topic, created_at, author } }) => {
    return (
        <div className="comment-card">
            <p>{body}</p>
            <p>{topic}</p>
            <p>{created_at}</p>
            <p>{author}</p>
        </div>
    )
};

export default CommentCard;