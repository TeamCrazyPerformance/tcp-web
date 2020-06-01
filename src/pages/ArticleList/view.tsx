import React from "react";
import Header from "@blocks/Header";
import SideNavigation from "~/components/atoms/SideNavigation";
import BulletinBoard from "@blocks/BulletinBoard";
import {
    useArticleList,
    Action as ArticleListAction,
} from "~/contexts/ArticleList";
import { useCategory } from "~/contexts/Category";
import { useAuth } from "~/contexts/Auth";
import "./style.scss";

const ArticleList = () => {
    const {
        state: { notices, articles, articlesCount },
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
                        notices={notices}
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
