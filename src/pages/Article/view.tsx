import React from "react";
import Header from "@organisms/Header";
import SideNavigation from "@molecules/SideNavigation";
import { default as ArticleView, ArticleProps } from "@organisms/Article";
import { Category } from "~/types";
import "./style.scss";

export type Props = ArticleProps & { categories: Category[] };

const Article = (props: Props) => {
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

    if (!(article && user)) return null;

    return (
        <>
            <Header />
            <div className="body_wrapper">
                <nav>
                    <SideNavigation items={categories} />
                </nav>
                <main>
                    <ArticleView
                        article={article}
                        comments={comments}
                        user={user}
                        onCreateComment={onCreateComment}
                        onEditComment={onEditComment}
                        onDeleteComment={onDeleteComment}
                        onDeleteArticle={onDeleteArticle}
                    />
                </main>
            </div>
        </>
    );
};

export default Article;
