import API, { TOKEN_KEY, setToken } from "./utils";
import { User, Profile } from "../types";
import { setLocalStorage } from "../utils";
import { API as SERVER_URI } from "../config";

type TokenUser = {
    user: User & { token: string };
};

function handleUserResponse({ user: { token, ...user } }: TokenUser) {
    setLocalStorage(TOKEN_KEY, token);
    setToken(token);
    return user;
}

export function getCurrentUser() {
    return API.get<TokenUser>("/user");
}

export function login() {
    window.location.href = SERVER_URI.login;
}

export function signUp(user: Partial<Profile>) {
    return API.post<TokenUser>("/users", {
        user
    }).then(res => handleUserResponse(res.data));
}

export function updateUser(user: Partial<User>) {
    return API.put<User>("/users", { user });
}

export function logout() {
    localStorage.removeItem(TOKEN_KEY);
    setToken(null);
}