import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "~/hooks";
import { handleUserResponse } from "~/apis/Auth";
import { useAuth, Action } from "~/contexts/Auth";

const getStringValue = (args: string[] | string | null | undefined ): string =>
    Array.isArray(args) ? args[0] : args ? args : "";

const Redirect = () => {
    const query = useQuery();
    const { dispatch: authDispath } = useAuth();
    const history = useHistory();

    const setUser = () => {
        let { id,isAdmin: adminValue, username, github, avatar, token } = query;
        if (!token) {
            history.replace("/");
            return;
        }
        let isAdmin = adminValue === 'true' ? true : false;

        [id,  username, github, avatar, token] = [
            id,
            username,
            github,
            avatar,
            token
        ].map(item => getStringValue(item));

        const user = {
            id,
            isAdmin,
            username,
            github,
            avatar,
            token
        };
        handleUserResponse({ user });
        authDispath({
            type: Action.LOAD_USER,
            payload: user
        });
        history.replace("/");
    };

    useEffect(setUser, []);

    return (
        <>
            <main>redirect...</main>
        </>
    );
};

export default Redirect;
