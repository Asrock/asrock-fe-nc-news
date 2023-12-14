import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import UserMenu from "./UserMenu";
import LoginMenu from "./LoginMenu";
import { Link } from "react-router-dom";

const Header = () => {
    const { user } = useContext(UserContext);
    return (
        <header>
            <Link to="/">
                <img className="icon" src="https://nc-marketplace-sem-1.onrender.com/img/favicon-32x32.png" />
            </Link>
                {user ? <UserMenu user={user} /> : <LoginMenu />}
        </header>
    )
};

export default Header;