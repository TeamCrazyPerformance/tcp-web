import React, { useMemo } from "react";
import { useHistory } from "react-router-dom";
import ArticleList, { ArticleListProps } from "~/components/blocks/ArticleList";
import Pagination, { PaginationProps } from "~/components/atoms/Pagination";
import Button from "@atoms/Button";
import { Profile } from "~/types";
import "./style.scss";

type BulletinBoardProps = ArticleListProps &
    Pick<PaginationProps, "onPageChange"> & { articlesCount: number } & {
        user: Profile | null;
    };

const ARTICES_PER_PAGE = 10;

const BulletinBoard = (props: BulletinBoardProps) => {
    const { user, articles, notices, articlesCount, onPageChange } = props;
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
            <ArticleList articles={articles} notices={notices} />
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
