import { Link } from "react-router-dom";

const UserMenu = ({ user }) => {
  return (
    <nav className="header-user-menu">
      <div className="inline">
        <p>{user.username}</p>
        <Link to={`/users/${user?.username}`}>
          <img className="thumbnail" src={user.avatar_url} />
        </Link>
      </div>
      <Link to="/logout">
        <p>Log out</p>
      </Link>
    </nav>
  )
};

export default UserMenu;