import { Link } from "react-router-dom";

const LoginMenu = () => {
    return (
		<nav className="header-sub-menu">
			<Link to="/login">
				<p>Login</p>
			</Link>
		</nav>
	);
};

export default LoginMenu;