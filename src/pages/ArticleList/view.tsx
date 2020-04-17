import React, { useMemo } from "react";
import Header from "@organisms/Header";
import SideNavigation from "@molecules/SideNavigation";
import BulletionBoard from "@molecules/BulletinBoard";
import { useArticleList } from "~/contexts/ArticleList";
import { useCategory } from "~/contexts/Category";
import "./style.scss";

const ArticleList = () => {
    const {
        state: { articles },
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
                    <BulletionBoard articles={articles} />
                </main>
            </div>
        </>
    );
};

export default ArticleList;
