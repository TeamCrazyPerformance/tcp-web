import React from "react";
import { ArticleListProvider } from "~/contexts/ArticleList";
import { CategoryProvider } from "~/contexts/Category";
import View from "./view";

const ArticleList = () => {
    return (
        <ArticleListProvider>
            <CategoryProvider>
                <View />
            </CategoryProvider>
        </ArticleListProvider>
    );
};

export default ArticleList;
