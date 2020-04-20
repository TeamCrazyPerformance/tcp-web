import React, { useMemo } from "react";
import Header from "@organisms/Header";
import SideNavigation from "@molecules/SideNavigation";
import BulletinBoard from "@organisms/BulletinBoard";
import {
    useArticleList,
    Action as ArticleListAction,
} from "~/contexts/ArticleList";
import { useCategory } from "~/contexts/Category";
import "./style.scss";

const ArticleList = () => {
    const {
        state: { articles, articlesCount },
        dispatch: articleListDispatch,
    } = useArticleList();
    const {
        state: { categories },
    } = useCategory();

    const items = useMemo(
        () =>
            categories?.map(({ id, ...props }) => ({
                itemId: id.toString(),
                ...props,
            })),
        [categories]
    );

    return (
        <>
            <Header />
            <div className="body_wrapper">
                <nav>
                    <SideNavigation items={items} />
                </nav>
                <main>
                    <BulletinBoard
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
