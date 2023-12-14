import { useParams, Link } from "react-router-dom";
import { useState } from "react"
import { useUpdateEffect } from "../../utils/react-utils"
import apiRequest from "../../utils/api-utils"
import CommentCard from "../components/CommentCard";
import ApiManager from "../components/ApiManager";

const ArticlePage = () => {
    const [apiStatus, setApiStatus] = useState({ status: "loading" });
    const [article, setArticle] = useState({});
    const [comments, setComments] = useState([]);
    const { article_id } = useParams();

    useUpdateEffect(() => {
        Promise
            .all([
                apiRequest("get", `articles/${article_id}`),
                apiRequest("get", `articles/${article_id}/comments`)
            ])
            .then(([{ data: { article } }, { data: { comments } }]) => {
                setArticle(article);
                //TODO - This might be done in the BE
                comments.sort((a, b) => b.created_at.localeCompare(a.created_at));
                setComments(comments);
                setApiStatus({ status: "completed" });
            })
			.catch(({ response, message }) => {
				setApiStatus({ status: "error", message: response.data.message ?? message });
			});
    }, [])

    return ApiManager(apiStatus,
        <div>
            <h2>{article.title}</h2>
            <h5>{new Date(article.created_at).toLocaleDateString()}</h5>
            <img className="large" src={article.article_img_url} />
            <CommentCard comment={article} />
            <Link className="tag" to={`/topics/${article.topic}/articles`}>{article.topic}</Link>
            <h4>Comments</h4>
            <div className="comments-list">
                {comments.length
                    ? comments.map(comment => <CommentCard key={comment.comment_id} comment={comment} />)
                    : <p>Be the first to comment</p>}
            </div>
        </div>
    );
};

export default ArticlePage;