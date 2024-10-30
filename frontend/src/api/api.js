import axios from 'axios';
import { AUTH_KEY } from './constants';


const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

api.interceptors.request.use(
    (config) => {
        const key = localStorage.getItem(AUTH_KEY);
        if (key) {
            config.headers.Authorization = `Token ${key}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const get = (url, config = {}) => api.get(url, config);
export const post = (url, data, config = {}) => api.post(url, data, config);
export const put = (url, data, config = {}) => api.put(url, data, config);
export const del = (url, config = {}) => api.delete(url, config);


export default api;
