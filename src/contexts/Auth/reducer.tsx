import { Profile } from "~/types";
import Action from "./actions";

export type AuthAction =
    | { type: Action.LOGIN }
    | { type: Action.LOAD_USER; payload: Profile }
    | { type: Action.LOGOUT };

export interface AuthState {
    isAuthenticated: boolean;
    user: Profile | null;
}

export const initialState: AuthState = {
    isAuthenticated: false,
    user: null
};

export function authReducer(state: AuthState, action: AuthAction): AuthState {
    switch (action.type) {
        case Action.LOGIN: {
            return { ...state, isAuthenticated: true };
        }
        case Action.LOAD_USER: {
            return { ...state, user: action.payload };
        }
        case Action.LOGOUT: {
            return { isAuthenticated: false, user: null };
        }
        default:
            return state;
    }
}
