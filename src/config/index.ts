export const API_SERVER = process.env.REACT_APP_API_SERVER;

export const DEFAULT_REQUEST_OPTION = {
    headers: { "Cache-Control": "no-cache" },
    withCredentials: true,
    mode: "cors",
    credentials: "include",
};

export const URLs = {
    login: `${API_SERVER}/users/login`,
};
