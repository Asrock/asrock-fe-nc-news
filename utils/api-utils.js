import axios from "axios";

const BASEURL = "https://asrock-be-nc-news.onrender.com/api/";

export default function apiRequest(method, urlPath, data) {
    return axios[method.toLowerCase()](BASEURL + urlPath, data);
}