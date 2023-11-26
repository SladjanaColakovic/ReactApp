import customAxios from "./customAxios"

export const post = (url, data) => {
    return customAxios.post(url, data);
}