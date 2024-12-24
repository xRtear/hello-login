import {get, post} from "@/utils/request";

export const test = () => {
    return get(`http://77.111.110.46:7999/`);
};

export const login = (data) => {
    return post(`http://77.111.110.46:7999/login`,data);
};