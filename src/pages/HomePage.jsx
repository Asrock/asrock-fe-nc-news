import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <Link to={`/articles`}>
                <h3>Go to Articles</h3>
            </Link>
        </div>
    )
};

export default HomePage;