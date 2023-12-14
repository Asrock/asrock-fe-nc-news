import LoadingPage from "../pages/LoadingPage";

export default function ApiManager({status, message}, completed) {
    switch(status){
        case "loading": return <LoadingPage message={message}/>;
        default: return completed;
    }
}