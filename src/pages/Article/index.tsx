import React from "react";
import { ArticleProvider } from "~/contexts/Article";
import { CategoryProvider } from "~/contexts/Category";
import View from "./view";

const Article = () => {
    return (
        <CategoryProvider>
            <ArticleProvider>
                <View />
            </ArticleProvider>
        </CategoryProvider>
    );
};

export default Article;
