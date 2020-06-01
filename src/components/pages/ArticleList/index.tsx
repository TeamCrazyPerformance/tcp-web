import React from "react";
import Template from "./Template";
import { CategoryProvider, useCategory } from "~/contexts/Category";
import { useAuth } from "~/contexts/Auth";
import {
    ArticleListProvider,
    useArticleList,
    Action as ArticleListAction,
} from "~/contexts/ArticleList";

const View = () => {
    const {
        state: { notices, articles, articlesCount },
        dispatch: articleListDispatch,
    } = useArticleList();
    const {
        state: { categories },
    } = useCategory();

    const {
        state: { user },
    } = useAuth();

    return (
        <Template
            categories={categories}
            user={user}
            articles={articles}
            notices={notices}
            articlesCount={articlesCount}
            onPageChange={({ selected: page }) => {
                articleListDispatch({
                    type: ArticleListAction.SET_PAGE,
                    page,
                });
            }}
        />
    );
};

export default () => (
    <CategoryProvider>
        <ArticleListProvider>
            <View />
        </ArticleListProvider>
    </CategoryProvider>
);
