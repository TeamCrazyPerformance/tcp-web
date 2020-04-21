import React, { createContext, useReducer, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import {
    ArticleListReducer,
    initialState,
    ArticleAction,
    ArticleState,
} from "./reducer";
import * as api from "~/apis/Article";
import Action from "./actions";

type ArticleListContextProps = {
    state: ArticleState;
    dispatch: React.Dispatch<ArticleAction>;
};

const ArticleListContext = createContext<ArticleListContextProps>({
    state: initialState,
    dispatch: () => initialState,
});

export function ArticleProvider(props: React.PropsWithChildren<{}>) {
    const [state, ArticleListDispatch] = useReducer(
        ArticleListReducer,
        initialState
    );
    const { id } = useParams();

    const fetchArticleList = () => {
        if (!id) return;

        ArticleListDispatch({
            type: Action.FETCH_ARTICLIE_LOADING,
        });

        api.getArticle(id)
            .then(payload =>
                ArticleListDispatch({
                    type: Action.FETCH_ARTICLIE_SUCCESS,
                    payload,
                })
            )
            .catch(() =>
                ArticleListDispatch({
                    type: Action.FETCH_ARTICLIE_ERROR,
                })
            );
    };

    useEffect(fetchArticleList, [id]);

    return (
        <ArticleListContext.Provider
            value={{
                state,
                dispatch: ArticleListDispatch,
            }}
            {...props}
        />
    );
}

export default function useArticleList() {
    return useContext(ArticleListContext);
}
