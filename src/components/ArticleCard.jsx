import { Link } from "react-router-dom";
import { relativeTimeFormatter } from "../../utils/formatter-utils"

const ArticleCard = ({ article }) => {
    return (
        <div className="article-card">
            <div className="inline">
                <h4>{article.votes} votes</h4>
                <h4>{article.comment_count} comments</h4>
            </div>
            <div className="inline">
                <img className="thumbnail" src={article.article_img_url} />
                <Link to={`/articles/${article.article_id}`}>
                    <h3>{article.title}</h3>
                </Link>
            </div>
            <div>
                <Link to={`/topics/${article.topic}/articles`}>
                    <button>{article.topic}</button>
                </Link>
            </div>
            <div className="inline">
                <h5>Created by</h5>
                <Link to={`/users/${article.author}`}><h5>{article.author}</h5></Link>
                <h5>{relativeTimeFormatter(new Date(article.created_at))}</h5>
            </div>
        </div>
    )
};

export default ArticleCard;