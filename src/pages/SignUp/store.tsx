import React, { createContext, useReducer, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import { getTokenValues, setToken } from "~/apis/utils";
import { signUp } from "~/apis/Auth";
import { useAuth, Action as authAction } from "~/contexts/Auth";
import { Profile } from "~/types";
import validator from "./validate";

export enum Action {
    UPDATE_INFO = "UPDATE_INFO",
    SUBMIT = "SUBMIT",
    LOAD_USER = "LOAD_USER",
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
    | { type: Action.LOAD_USER; user: Partial<Profile> }
    | { type: Action.UPDATE_INFO; inputValue: ValidateInput }
    | { type: Action.SUBMIT; payload: boolean };

export interface SignUpState {
    user: Partial<Profile> | null;
    validateState: ValidateStateType | null;
    submit: "before" | "submit";
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

export function SignUpProvider(props: React.PropsWithChildren<{}>) {
    const [state, dispatch] = useReducer(SignUpReducer, initialState);
    const { dispatch: authDispath } = useAuth();
    const [{ jwt }] = useCookies([]);
    const history = useHistory();

    useEffect(() => {
        const payload = getTokenValues(jwt);
        if (!payload) return;

        setToken(jwt);
        const { id, username, blog, email } = payload;
        //@TODO: load 후 validate, exist 시 '/' 리다이렉트
        dispatch({
            type: Action.LOAD_USER,
            user: { id, username, blog, email },
        });
    }, []);

    const handleSubmit = async () => {
        try {
            if (!state.user) return;

            const user = await signUp(state.user);
            authDispath({
                type: authAction.LOAD_USER,
                payload: user,
            });
            history.replace("/");
        } catch (err) {
            dispatch({
                type: Action.SUBMIT,
                payload: false,
            });
            console.error(err);
            //@TODO: 에러 모달 띄우기
        }
    };

    useEffect(() => {
        //@TODO: submit 전 validate.. 및 확인 모달 띄우기..
        if (state.submit !== "submit") return;
        handleSubmit();
    }, [state.submit]);

    return <SignUpContext.Provider value={{ state, dispatch }} {...props} />;
}

export default function useSignUp() {
    return useContext(SignUpContext);
}
