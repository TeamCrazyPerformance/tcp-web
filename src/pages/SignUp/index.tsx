import React from "react";
import SignUpForm from "../../components/organisms/SignUpForm";
import useSignUp, { SignUpProvider, Action } from "./store";
import "./style.scss";

const SignUpView = () => {
    const { state, dispatch: signUpDispatch } = useSignUp();

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        signUpDispatch({ type: Action.SUBMIT, payload: true });
    };

    const handleBlur = (e: React.FocusEvent<HTMLFormElement>) => {
        if (
            !(
                e.target instanceof HTMLInputElement ||
                e.target instanceof HTMLSelectElement
            )
        )
            return;

        const { name, value } = e.target;
        signUpDispatch({
            type: Action.UPDATE_INFO,
            inputValue: { name, value }
        });
    };

    return (
        <main>
            <SignUpForm
                handleSubmit={handleSubmit}
                handleBlur={handleBlur}
                userinfo={state}
            />
        </main>
    );
};

export default () => (
    <SignUpProvider>
        <SignUpView />
    </SignUpProvider>
);
