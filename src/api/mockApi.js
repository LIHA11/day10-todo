import axios from "axios";
import {message} from "antd";

const api = axios.create({
    baseURL: 'https://68c7ac8f5d8d9f51473287a8.mockapi.io/123456',
    headers: {'Content-Type': 'application/json'},
    timeout: 10_000
})

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const {status} = error.response;
        if (status === 404) {
            alert(error.message);
            // message.error(error.message).then(r => {});

        }
        return Promise.reject(error);
    }
);

export {api}