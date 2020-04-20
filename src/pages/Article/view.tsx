import React from "react";
import Header from "@organisms/Header";
import SideNavigation from "@molecules/SideNavigation";
import { default as ArticleView } from "@organisms/Article";
import { useArticle } from "~/contexts/Article";
import { useCategory } from "~/contexts/Category";
import { useAuth } from "~/contexts/Auth";
import "./style.scss";

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
                    />
                </main>
            </div>
        </>
    );
};

export default Article;
