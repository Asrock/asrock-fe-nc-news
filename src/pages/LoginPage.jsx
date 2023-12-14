import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import validateUser from "../../form-validation/validateUser";

const LoginPage = () => {
    const { loginAsync } = useContext(UserContext);
    const navigate = useNavigate();

    const onSubmit = (event) => {
        event.preventDefault();
        const inputs = event.target.children;

        const isValid = [...inputs].reduce((result, field) => {
            validateUser({ target: field }, true);
            return result && field.classList.contains("valid-input");
        }, true);
        if (!isValid) return;

        loginAsync(inputs[0].value)
            .then(() => navigate("/"))
            .catch(() => {
                inputs[0].classList.remove("valid-input");
                inputs[0].classList.add("invalid-input");
            });
    }

    return (
        <div className="user-form">
            <h1>Log in</h1>
            <form onSubmit={onSubmit}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" onKeyUp={validateUser} />
                <button>Log in</button>
            </form>
        </div>
    )
};

export default LoginPage;