import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import axios from "axios"
import CommentCard from "../components/CommentCard";

const ArticlePage = () => {
    const [article, setArticle] = useState({});
    const [comments, setComments] = useState([]);
    const { article_id = 1 } = useParams();


    //TODO - Change it
    useEffect(() => {
        Promise
            .all([
                axios.get(`https://asrock-be-nc-news.onrender.com/api/articles/${article_id}`),
                axios.get(`https://asrock-be-nc-news.onrender.com/api/articles/${article_id}/comments`)
            ])
            .then(([{ data: { article } }, { data: { comments } }]) => {
                console.log(article)
                console.log(comments)
                setArticle(article);
                setComments(comments);
            });
    }, [])

    return (
        <div>
            <h2>{article.title}</h2>
            <h5>{new Date(article.created_at).toLocaleDateString()}</h5>
            <CommentCard comment={article} />
            <div className="comments-list">
                {comments.map(comment => <CommentCard key={comment.comment_id} comment={comment} />)}
            </div>
        </div>
    )
};

export default ArticlePage;