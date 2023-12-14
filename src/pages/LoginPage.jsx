import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import validateUser from "../../form-validation/validateUser";

const LoginPage = () => {
    const { loginAsync } = useContext(UserContext);
    const [errorMessage, setErrorMessage] = useState();
    const navigate = useNavigate();

    const onSubmit = (event) => {
        event.preventDefault();
        const inputs = event.target.children;

        const isValid = [...inputs].reduce((result, field) => {
            if (field.nodeName !== "INPUT") return result;
            validateUser({ target: field }, true);
            return result && field.classList.contains("valid-input");
        }, true);
        if (!isValid) return setErrorMessage("Invalid username");


        loginAsync(inputs[1].value)
            .then(() => navigate("/"))
            .catch(({response, message}) => {
                setErrorMessage(response.data.message ?? message)
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
            <p>{errorMessage}</p>
        </div>
    )
};

export default LoginPage;