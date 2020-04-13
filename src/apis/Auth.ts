import API, { TOKEN_KEY, setToken } from "./utils";
import { Profile, User } from "../types";
import { setLocalStorage } from "../utils";
import { URLs } from "../config";

type TokenUser = {
    user: Profile & { token: string };
};

export function handleUserResponse({ user: { token, ...user } }: TokenUser) {
    setLocalStorage(TOKEN_KEY, token);
    setToken(token);
    return user;
}

export function getCurrentUser() {
    return API.get<TokenUser>(`/user`).then(res =>
        handleUserResponse(res.data)
    );
}

export function login() {
    window.location.href = URLs.login;
}

export function signUp(user: Partial<User>) {
    return API.post<TokenUser>("/users", {
        user
    }).then(res => handleUserResponse(res.data));
}

export function updateUser(user: Partial<User>) {
    return API.put<User>("/users", { user });
}
