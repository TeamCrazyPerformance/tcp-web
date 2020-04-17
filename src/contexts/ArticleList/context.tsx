import React, { createContext, useReducer, useEffect, useContext } from "react";
import {
    ArticleListReducer,
    initialState,
    ArticleListAction,
    ArticleListState
} from "./reducer";
import * as api from "~/apis/Article";
import Action from "./actions";
import { useCategory } from "~/contexts/Category";

type ArticleListContextProps = {
    state: ArticleListState;
    dispatch: React.Dispatch<ArticleListAction>;
};

const ArticleListContext = createContext<ArticleListContextProps>({
    state: initialState,
    dispatch: () => initialState
});

export function ArticleListProvider(props: React.PropsWithChildren<{}>) {
    const [state, ArticleListDispatch] = useReducer(
        ArticleListReducer,
        initialState
    );
    const {
        state: { categories, selectedTab }
    } = useCategory();

    const fetchArticleList = () => {
        ArticleListDispatch({
            type: Action.FETCH_ARTICLIES_LOADING
        });

        const { page } = state;
        const selectedCategory = categories.find(
            category => category.id === selectedTab
        )?.name;

        api.getArticles(page, selectedCategory)
            .then(articles =>
                ArticleListDispatch({
                    type: Action.FETCH_ARTICLIES_SUCCESS,
                    payload: articles
                })
            )
            .catch(() =>
                ArticleListDispatch({
                    type: Action.FETCH_ARTICLIES_ERROR
                })
            );
    };

    useEffect(fetchArticleList, [selectedTab, state.page]);

    return (
        <ArticleListContext.Provider
            value={{
                state,
                dispatch: ArticleListDispatch
            }}
            {...props}
        />
    );
}

export default function useArticleList() {
    return useContext(ArticleListContext);
}