import { useState, createContext, useEffect } from "react";
import { useCookies } from "react-cookie";
import apiRequest from "../../utils/api-utils";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [cookies, setCookie, removeCookie] = useCookies(['username']);
    const [user, setUser] = useState();

    useEffect(() => {
        if (cookies.username)
            loginAsync(cookies.username)
    }, [cookies])

    const loginAsync = (username) => apiRequest("get", `users/${username}`)
        .then(({ data }) => {
            setUser(data.user);
            setCookie('username', data.user.username, { path: '/' });
        });

    const logout = () => {
        setUser();
        removeCookie("username");
    };

    return (
        <UserContext.Provider value={{ user, loginAsync, logout }}>
            {children}
        </UserContext.Provider>
    )
};

export { UserContext, UserProvider };