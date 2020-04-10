import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "~/hooks";
import { setToken } from "~/apis/utils";
import { useAuth, Action } from "~/contexts/Auth";

const getStringValue = (args: string[] | string | null | undefined): string =>
    Array.isArray(args) ? args[0] : args ? args : "";

const Redirect = () => {
    const query = useQuery();
    const { dispatch: authDispath } = useAuth();
    const history = useHistory();

    const setUser = () => {
        let { id, username, github, avatar, token } = query;
        if (!token) {
            history.replace("/");
            return;
        }

        [id, username, github, avatar, token] = [
            id,
            username,
            github,
            avatar,
            token,
        ].map((item) => getStringValue(item));

        const user = {
            id,
            username,
            github,
            avatar,
            token,
        };

        setToken(token);
        authDispath({
            type: Action.LOAD_USER,
            payload: user,
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