import React, { useMemo } from "react";
import { useHistory } from "react-router-dom";
import ArticleList, { ArticleListProps } from "@molecules/ArticleList";
import Pagination, { PaginationProps } from "@molecules/Pagination";
import Button from "@atoms/Button";
import { Profile } from "~/types";
import "./style.scss";

type BulletinBoardProps = ArticleListProps &
    Pick<PaginationProps, "onPageChange"> & { articlesCount: number } & {
        user: Profile | null;
    };

const ARTICES_PER_PAGE = 10;

const BulletinBoard = (props: BulletinBoardProps) => {
    const { user, articles, articlesCount, onPageChange } = props;
    const history = useHistory();

    const pageCount = useMemo(
        () => Math.ceil(articlesCount / ARTICES_PER_PAGE),
        [articlesCount],
    );

    const handleWrite = () => {
        history.push("/editor/new");
    };

    return (
        <div className="article_list">
            <ArticleList articles={articles} />
            {user && (
                <Button
                    name="작성"
                    className="white align-left"
                    onClick={handleWrite}
                />
            )}
            <div className="article_list_pagination">
                <Pagination pageCount={pageCount} onPageChange={onPageChange} />
            </div>
        </div>
    );
};

export default BulletinBoard;
