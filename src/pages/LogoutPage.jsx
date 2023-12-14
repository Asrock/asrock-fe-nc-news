import { useContext } from "react"
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const LogoutPage = (props) => {
    const { logout } = useContext(UserContext);
    const navigate = useNavigate();

    const logoutHandler = () => {
        logout();
        navigate("/");
    };

    return (
        <div>
            <p>Leave page?</p>
            <button onClick={logoutHandler}>Log out</button>
            <button onClick={() => history.back()}>Back</button>
        </div>
    )
};

export default LogoutPage;