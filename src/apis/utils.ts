// import { useHistory } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";

axios.defaults.baseURL = process.env.REACT_APP_API_SERVER;

export const TOKEN_KEY = "jwt";

export function setToken(token: string | null) {
    if (token) {
        axios.defaults.headers.common["Authorization"] = `${token}`;
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }
}

interface JWTPayload {
    id: string;
    avatar: string;
    exist: boolean;
    email: string;
    blog: string;
    username: string;
    exp: number;
}

export function isTokenValid(token: string) {
    try {
        const decoded: JWTPayload = jwtDecode(token);
        const currentAt = Date.now().valueOf() / 1000;
        return decoded.exp > currentAt;
    } catch (error) {
        return false;
    }
}

export function getTokenValues(token: string) {
    try {
        const decoded: JWTPayload = jwtDecode(token);
        const currentAt = Date.now().valueOf() / 1000;
        return decoded.exp > currentAt ? decoded : false;
    } catch (error) {
        return false;
    }
}

export default axios;
