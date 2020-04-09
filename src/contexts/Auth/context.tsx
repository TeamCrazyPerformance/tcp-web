import React, { createContext, useReducer, useEffect, useContext } from "react";
import { useCookies } from "react-cookie";
import { authReducer, initialState, AuthAction, AuthState } from "./reducer";
import { getLocalStorage } from "~/utils";
import {
    TOKEN_KEY,
    setToken,
    isTokenValid,
    getTokenValues,
} from "~/apis/utils";
import { getCurrentUser, logout } from "~/apis/Auth";
import Action from "./actions";

type AuthContextProps = {
    state: AuthState;
    dispatch: React.Dispatch<AuthAction>;
};

const AuthContext = createContext<AuthContextProps>({
    state: initialState,
    dispatch: () => initialState,
});

export function AuthProvider(props: React.PropsWithChildren<{}>) {
    const [{ user, isAuthenticated }, userDispatch] = useReducer(
        authReducer,
        initialState
    );
    const [{ jwt }] = useCookies([]);

    const initAuth = () => {
        const token = getLocalStorage(TOKEN_KEY) || jwt;
        if (!token) return;

        if (jwt) {
            const payload = getTokenValues(jwt);
            if (payload && !payload.exist) return;
        }

        if (isTokenValid(token)) {
            setToken(token);
            userDispatch({ type: Action.LOGIN });
        } else {
            userDispatch({ type: Action.LOGOUT });
            logout();
        }
    };

    const fetchUser = () => {
        if (user || !isAuthenticated) return;

        getCurrentUser()
            .then((user) =>
                userDispatch({ type: Action.LOAD_USER, payload: user })
            )
            .catch((error) => console.log(error));
    };

    useEffect(initAuth, []);
    useEffect(fetchUser, [user, isAuthenticated, userDispatch]);

    return (
        <AuthContext.Provider
            value={{ state: { user, isAuthenticated }, dispatch: userDispatch }}
            {...props}
        />
    );
}

export default function useAuth() {
    return useContext(AuthContext);
}
