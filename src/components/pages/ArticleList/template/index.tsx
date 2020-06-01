import React, { useMemo } from "react";
import { useHistory } from "react-router-dom";
import ArticleList, {
    ArticleListProps,
} from "~/components/UI/blocks/ArticleList";
import Pagination, { PaginationProps } from "~/components/UI/atoms/Pagination";
import Button from "~/components/UI/atoms/Button";
import BaseTemplate from "~/components/pages/template";
import { Category, Profile } from "~/types";
import "./style.scss";

const ARTICES_PER_PAGE = 10;

type Props = {
    categories: Category[];
} & ArticleListProps &
    Pick<PaginationProps, "onPageChange"> & { articlesCount: number } & {
        user: Profile | null;
    };

const ArticleListTemplate = (props: Props) => {
    const {
        categories,
        user,
        articles,
        notices,
        articlesCount,
        onPageChange,
    } = props;

    const history = useHistory();

    const pageCount = useMemo(
        () => Math.ceil(articlesCount / ARTICES_PER_PAGE),
        [articlesCount],
    );

    const handleWrite = () => {
        history.push("/editor/new");
    };

    return (
        <BaseTemplate categories={categories}>
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
                    <Pagination
                        pageCount={pageCount}
                        onPageChange={onPageChange}
                    />
                </div>
            </div>
        </BaseTemplate>
    );
};

export default ArticleListTemplate;
