import axios from "axios";

export default axios.create({
    baseURL: "https://appoks-atw-devchallenge.herokuapp.com/",
    headers: {
        "Content-type": "application/json"
    }
});
