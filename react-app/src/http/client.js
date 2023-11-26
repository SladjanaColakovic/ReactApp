import customAxios from "./customAxios"

export const post = (url, data) => {
    return customAxios.post(url, data);
}

export const get = (url) => {
    return customAxios.get(url);
}

export const put = (url, data) => {
    return customAxios.put(url, data);
}

export const remove = (url) => {
    return customAxios.delete(url);
}