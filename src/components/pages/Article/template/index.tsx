import React from "react";
import Article, { ArticleProps } from "~/components/UI/blocks/Article";
import BaseTemplate from "~/components/pages/template";
import { Category } from "~/types";

export type Props = ArticleProps & { categories: Category[] };

const ArticleTemplate = (props: Props) => {
    const {
        article,
        comments,
        categories,
        user,
        onCreateComment,
        onDeleteComment,
        onEditComment,
        onDeleteArticle,
    } = props;

    return (
        <BaseTemplate categories={categories}>
            <Article
                article={article}
                comments={comments}
                user={user}
                onCreateComment={onCreateComment}
                onEditComment={onEditComment}
                onDeleteComment={onDeleteComment}
                onDeleteArticle={onDeleteArticle}
            />
        </BaseTemplate>
    );
};

export default ArticleTemplate;
