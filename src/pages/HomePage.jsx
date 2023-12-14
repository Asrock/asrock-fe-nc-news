import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <Link to={`/articles`}>
                <h3>Go to Articles</h3>
            </Link>
            <Link to={`/users`}>
                <h3>Go to Users</h3>
            </Link>
        </div>
    )
};

export default HomePage;