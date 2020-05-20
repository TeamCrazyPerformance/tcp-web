import React from "react";
import Header from "@organisms/Header";
import SideNavigation from "@molecules/SideNavigation";
import BulletinBoard from "@organisms/BulletinBoard";
import {
    useArticleList,
    Action as ArticleListAction,
} from "~/contexts/ArticleList";
import { useCategory } from "~/contexts/Category";
import { useAuth } from "~/contexts/Auth";
import "./style.scss";

const ArticleList = () => {
    const {
        state: { articles, articlesCount },
        dispatch: articleListDispatch,
    } = useArticleList();
    const {
        state: { categories },
    } = useCategory();

    const {
        state: { user },
    } = useAuth();

    return (
        <>
            <Header />
            <div className="body_wrapper">
                <nav>
                    <SideNavigation items={categories} />
                </nav>
                <main>
                    <BulletinBoard
                        user={user}
                        articles={articles}
                        articlesCount={articlesCount}
                        onPageChange={({ selected: page }) => {
                            articleListDispatch({
                                type: ArticleListAction.SET_PAGE,
                                page,
                            });
                        }}
                    />
                </main>
            </div>
        </>
    );
};

export default ArticleList;
