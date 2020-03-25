const ENV = process.env.NODE_ENV;

export const API_SERVER = process.env[`${ENV}_API_SERVER`];

export const DEFAULT_REQUEST_OPTION = {
    headers: { "Cache-Control": "no-cache" },
    withCredentials: true,
    mode: "cors",
    credentials: "include"
};

export const API = {
    login: `${API_SERVER}/users/login`
};
