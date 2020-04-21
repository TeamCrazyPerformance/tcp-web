import React from "react";
import { useArticle, ArticleProvider } from "~/contexts/Article";
import { useCategory, CategoryProvider } from "~/contexts/Category";
import { useAuth } from "~/contexts/Auth";
import View from "./view";

const Article = () => {
    const {
        state: { article, comments },
    } = useArticle();

    const {
        state: { categories },
    } = useCategory();

    const {
        state: { user },
    } = useAuth();

    if (!(article && user)) return null;
    return (
        <View
            article={article}
            comments={comments}
            categories={categories}
            user={user}
        />
    );
};

export default () => (
    <CategoryProvider>
        <ArticleProvider>
            <Article />
        </ArticleProvider>
    </CategoryProvider>
);
