import { Link } from "react-router-dom";
import { useState } from "react";
import { relativeTimeFormatter } from "../../utils/formatter-utils";
import apiRequest from "../../utils/api-utils";

const CommentCard = ({ comment: { body, created_at, author, votes: currVotes, comment_id, article_id } }) => {
    const [votes, setVotes] = useState(currVotes);

    const voteHandler = (num) => ({ target }) => {
        const oppositeBtn = [...target.parentElement.children].find(field => field.nodeName === "BUTTON" && field !== target);

        [target, oppositeBtn].forEach((btn) => btn.classList.remove("vote-error"));

        const relativeUrlPath = comment_id == null ? `articles/${article_id}` : `comments/${comment_id}`;
        apiRequest("patch", relativeUrlPath, { inc_votes: num })
            .then(({ data }) => {
                setVotes((data.article ?? data.comment)["votes"]);

                if(oppositeBtn.classList.contains("vote-success"))
                    [target, oppositeBtn].forEach((btn) => btn.classList.remove("vote-success"));
                else
                    target.classList.add("vote-success");
            })
            .catch(() => {
                target.classList.add("vote-error");
            });
    };

    return (
        <div className="comment-card">
            <div className="comment">
                <div className="voting">
                    <button className="round" onClick={voteHandler(1)}>&#x25B3;</button>
                    <p>{votes}</p>
                    <button className="round" onClick={voteHandler(-1)}>&#x25BD;</button>
                </div>
                <p>{body}</p>
            </div>
            <div className="inline">
                <h5>Created by</h5>
                <Link to={`/users/${author}`}><h5>{author}</h5></Link>
                <h5>{relativeTimeFormatter(new Date(created_at))}</h5>
            </div>
        </div>
    )
};

export default CommentCard;