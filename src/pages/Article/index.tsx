import React from "react";
import {
    useArticle,
    ArticleProvider,
    Action as ArticleAction,
} from "~/contexts/Article";
import { useCategory, CategoryProvider } from "~/contexts/Category";
import { useAuth } from "~/contexts/Auth";
import * as api from "~/apis/Comment";
import View from "./view";

//TODO : api 에러시 토스트/모달 띄우기
const Article = () => {
    const {
        state: { article, comments },
        dispatch: ArticleDispatch,
    } = useArticle();

    const {
        state: { categories },
    } = useCategory();

    const {
        state: { user },
    } = useAuth();

    const handleCommentDelete = (commentId: number) => {
        if (!article) return;

        api.deleteComment(article.id, commentId).then(() =>
            ArticleDispatch({ type: ArticleAction.DELETE_COMMENT, commentId })
        );
    };

    if (!(article && user)) return null;
    return (
        <View
            article={article}
            comments={comments}
            categories={categories}
            user={user}
            onCommentDelete={handleCommentDelete}
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
