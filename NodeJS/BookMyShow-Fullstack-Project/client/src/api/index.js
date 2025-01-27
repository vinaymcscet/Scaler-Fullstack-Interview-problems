import axios from 'axios';

const token = localStorage.getItem('token'); // this is empty before login

export const axiosInstance = axios.create({
    headers: {
        "Content-Type": "application/json"
    },
    baseURL: "/",
})
axiosInstance.interceptors.request.use(
    function (config) {
        const token = localStorage.getItem('token')
        if(token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        console.log("config", config);
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);