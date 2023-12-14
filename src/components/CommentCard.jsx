import { Link } from "react-router-dom"
import { relativeTimeFormatter } from "../../utils/formatter-utils";

const CommentCard = ({ comment: { body, created_at, author } }) => {
    return (
        <div className="comment-card">
            <p>{body}</p>
            <div className="inline">
                <h5>Created by</h5>
                <Link to={`/users/${author}`}><h5>{author}</h5></Link>
                <h5>{relativeTimeFormatter(new Date(created_at))}</h5>
            </div>
        </div>
    )
};

export default CommentCard;