import React, { createContext, useReducer, useEffect, useContext } from "react";
import { authReducer, initialState, AuthAction, AuthState } from "./reducer";
import { getLocalStorage } from "../../utils";
import { TOKEN_KEY, setToken, isTokenValid } from "../../apis/utils";
import { logout } from "../../apis/Auth";
import Action from "./actions";

type AuthContextProps = {
    state: AuthState;
    dispatch: React.Dispatch<AuthAction>;
};

const AuthContext = createContext<AuthContextProps>({
    state: initialState,
    dispatch: () => initialState
});

export function AuthProvider(props: React.PropsWithChildren<{}>) {
    const [state, dispatch] = useReducer(authReducer, initialState);
    useEffect(() => {
        const token = getLocalStorage(TOKEN_KEY);

        if (!token) return;

        if (isTokenValid(token)) {
            setToken(token);
            dispatch({ type: Action.LOGIN });
        } else {
            dispatch({ type: Action.LOGOUT });
            logout();
        }
    }, []);

    return <AuthContext.Provider value={{ state, dispatch }} {...props} />;
}

export default function useAuth() {
    return useContext(AuthContext);
}