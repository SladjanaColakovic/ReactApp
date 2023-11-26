import axios from "axios";
import { store } from '../auth/store'

const customAxios = axios.create({
    baseURL: process.env.REACT_APP_SERVER_BASE_URL
});

customAxios.interceptors.request.use(
    config => {
        config.headers['Content-Type'] = 'application/json';
        if (store.getState().user.user) {
            config.headers['Authorization'] = 'Bearer ' + store.getState().user.user.token;
        }
        return config
    },
    error => {
        Promise.reject(error)
    }
);

export default customAxios;