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
        state: { categories, selectedTab: category },
    } = useCategory();

    const {
        state: { user },
    } = useAuth();

    const handleCreateComment = (comment: { contents: string }) => {
        if (!article) return;

        api.createComment(article?.id, { category }, comment).then(payload =>
            ArticleDispatch({ type: ArticleAction.ADD_COMMENT, payload })
        );
    };

    const handleDeleteComment = (commentId: number) => {
        if (!article) return;

        api.deleteComment(article.id, commentId).then(() =>
            ArticleDispatch({ type: ArticleAction.DELETE_COMMENT, commentId })
        );
    };

    const handleEditComment = (comment: { id: number; contents: string }) => {
        if (!article) return;

        api.updateComment(article.id, comment).then(payload =>
            ArticleDispatch({ type: ArticleAction.MODIFY_COMMENT, payload })
        );
    };

    if (!(article && user)) return null;
    return (
        <View
            article={article}
            comments={comments}
            categories={categories}
            user={user}

            onCreateComment={handleCreateComment}
            onDeleteComment={handleDeleteComment}
            onEditComment={handleEditComment}

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
