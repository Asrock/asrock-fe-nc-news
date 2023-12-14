import LoadingPage from "../pages/LoadingPage";
import ErrorPage from "../pages/ErrorPage";

export default function ApiManager({status, message}, completed) {
    switch(status){
        case "loading": return <LoadingPage message={message}/>;
        case "error": return <ErrorPage message={message}/>;
        default: return completed;
    }
}