import React, { createContext, useReducer, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { setToken } from "~/apis/utils";
import * as api from "~/apis/Auth";
import { useAuth, Action as authAction } from "~/contexts/Auth";
import { useQuery } from "~/hooks";
import { User } from "~/types";
import validator from "./validate";

export enum Action {
    UPDATE_INFO = "UPDATE_INFO",
    SUBMIT = "SUBMIT",
    LOAD_USER = "LOAD_USER",
    REDIRECT = "REDIRECT",
}

interface ValidateStateType {
    grade: boolean | undefined;
    schoolRegister: boolean | undefined;
    phone: boolean | undefined;
    birth: boolean | undefined;
    username: boolean | undefined;
    email: boolean | undefined;
    blog: boolean | undefined;
}

interface ValidateInput {
    name: keyof ValidateStateType | string;
    value: any;
}

export type SignUpAction =
    | {
          type: Action.LOAD_USER;
          user: Partial<User>;
      }
    | { type: Action.REDIRECT }
    | { type: Action.UPDATE_INFO; inputValue: ValidateInput }
    | { type: Action.SUBMIT; payload: boolean };

export interface SignUpState {
    user: Partial<User> | null;
    validateState: ValidateStateType | null;
    submit: "before" | "submit";
    needRedirect: boolean;
}

export const initialState: SignUpState = {
    validateState: {
        grade: undefined,
        schoolRegister: undefined,
        phone: undefined,
        birth: undefined,
        username: undefined,
        email: undefined,
        blog: undefined,
    },
    user: null,
    submit: "before",
    needRedirect: false,
};

export function SignUpReducer(
    state: SignUpState,
    action: SignUpAction
): SignUpState {
    switch (action.type) {
        case Action.LOAD_USER: {
            const { user } = action;
            return {
                ...state,
                user: {
                    id: user?.id,
                    email: user?.email,
                    blog: user?.blog,
                    username: user?.username,
                },
                needRedirect: true,
            };
        }

        case Action.REDIRECT: {
            return {
                ...state,
                needRedirect: false,
            };
        }

        case Action.UPDATE_INFO: {
            const { inputValue } = action;
            const { name, value } = inputValue;
            const result = !validator(inputValue);
            const { user, validateState } = state;
            if (!validateState) return { ...state };
            return {
                ...state,
                user: {
                    ...user,
                    [name]: value,
                },
                validateState: {
                    ...validateState,
                    [name]: result,
                },
            };
        }
        case Action.SUBMIT: {
            return { ...state, submit: "submit" };
        }

        default:
            return state;
    }
}

type SignUpContextProps = {
    state: SignUpState;
    dispatch: React.Dispatch<SignUpAction>;
};

const SignUpContext = createContext<SignUpContextProps>({
    state: initialState,
    dispatch: () => initialState,
});

const getStringValue = (args: string[] | string | null | undefined): string =>
    Array.isArray(args) ? args[0] : args ? args : "";

export function SignUpProvider(props: React.PropsWithChildren<{}>) {
    const [
        { user, submit, needRedirect, validateState },
        dispatch,
    ] = useReducer(SignUpReducer, initialState);
    const { dispatch: authDispath } = useAuth();
    const history = useHistory();
    const query = useQuery();

    const setUser = () => {
        let { id, username, blog, email, token } = query;
        if (!token) return;

        [id, username, blog, email, token] = [
            id,
            username,
            blog,
            email,
            token,
        ].map((item) => getStringValue(item));

        setToken(token);
        dispatch({
            type: Action.LOAD_USER,
            user: {
                id,
                username,
                blog,
                email,
            },
        });
    };

    const handleSubmit = () => {
        if (!user || submit !== "submit") return;

        api.signUp(user)
            .then((newUser) =>
                authDispath({
                    type: authAction.LOAD_USER,
                    payload: newUser,
                })
            )
            .then(() => history.replace("/"))
            .catch((err) => {
                dispatch({
                    type: Action.SUBMIT,
                    payload: false,
                });
                console.error(err);
            });
    };

    const redircet = () => {
        if (!needRedirect) return;
        dispatch({ type: Action.REDIRECT });
        history.replace("/signup");
    };

    useEffect(setUser, []);
    useEffect(redircet, [needRedirect, history]);
    useEffect(handleSubmit, [submit]);

    return (
        <SignUpContext.Provider
            value={{
                state: { user, submit, needRedirect, validateState },
                dispatch,
            }}
            {...props}
        />
    );
}

export default function useSignUp() {
    return useContext(SignUpContext);
}
