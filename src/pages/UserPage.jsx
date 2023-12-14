import { useState } from "react"
import { useParams } from "react-router-dom";
import { useUpdateEffect } from "../../utils/react-utils";
import apiRequest from "../../utils/api-utils";
import ApiManager from "../components/ApiManager";

const UserPage = () => {
    const { username } = useParams();
    const [apiStatus, setApiStatus] = useState({ status: "loading" });
    const [user, setUser] = useState({ avatar_url: null });

    useUpdateEffect(() => {
        apiRequest("get", `users/${username}`)
            .then(({ data }) => {
                setUser(data.user)
                setApiStatus({ status: "completed" });
            });
    }, [username]);

    return ApiManager(apiStatus,
        <div>
            <h1>User profile</h1>
            <h4>{user.username}</h4>
            <img className="thumbnail" src={user.avatar_url} />
            <p>{user.name}</p>
        </div>
    );
};

export default UserPage;