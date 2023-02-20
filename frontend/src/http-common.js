import axios from "axios";

const http = axios.create({
    baseURL : "https://chidestore-server.onrender.com",
    headers : {
        "Content-type" : "application/json"
    }
});

export default http;