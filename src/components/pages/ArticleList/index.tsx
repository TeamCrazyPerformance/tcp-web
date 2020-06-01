import React from "react";
import { ArticleListProvider } from "~/contexts/ArticleList";
import { CategoryProvider } from "~/contexts/Category";
import View from "./view";

const ArticleList = () => {
    return (
        <CategoryProvider>
            <ArticleListProvider>
                <View />
            </ArticleListProvider>
        </CategoryProvider>
    );
};

export default ArticleList;
