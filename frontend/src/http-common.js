import axios from "axios";

const http = axios.create({
    baseURL : "https://chidestore-server.onrender.com"
});

export default http;