import React, { useMemo } from "react";
import ArticleList, { ArticleListProps } from "@molecules/ArticleList";
import Pagination, { PaginationProps } from "@molecules/Pagination";
import "./style.scss";

type BulletinBoardProps = ArticleListProps &
    Pick<PaginationProps, "onPageChange"> & { articlesCount: number };

const ARTICES_PER_PAGE = 10;

const BulletinBoard = (props: BulletinBoardProps) => {
    const { articles, articlesCount, onPageChange } = props;

    const pageCount = useMemo(
        () => Math.ceil(articlesCount / ARTICES_PER_PAGE),
        [articlesCount]
    );

    return (
        <div className="article_list">
            <ArticleList articles={articles} />
            <div className="article_list_pagination">
                <Pagination
                    pageCount={pageCount}
                    onPageChange={onPageChange}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={3}
                />
            </div>
        </div>
    );
};

export default BulletinBoard;
