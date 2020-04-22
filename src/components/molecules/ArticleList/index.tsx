import React from "react";
import StyledLink from "@atoms/StyledLink";
import { CommentIcon } from "@lib/Icons";
import { displayDate } from "~/utils";
import { ArticleInfo } from "~/types";
import "./style.scss";

const NOTICE_KO = "공지";
const CLASSNAME_FOR_NOTICE = "notice";
const MAX_DISPLAY_NUM = 999;

export interface ArticleListProps {
    /**
     * 테이블 칼럼 이름
     */
    columns?: string[];
    /**
     * 포스트들
     */
    articles?: ArticleInfo[];
}

const Columns = (props: ArticleInfo) => {
    const {
        id,
        isNotice,
        title,
        commentCount,
        createdAt,
        updatedAt,
        author,
        viewCount,
    } = props;
    const className = isNotice ? CLASSNAME_FOR_NOTICE : "";
    const dateView = displayDate(updatedAt || createdAt);
    const countView =
        commentCount > MAX_DISPLAY_NUM ? MAX_DISPLAY_NUM + "+" : commentCount;

    return (
        <article className={className}>
            <span>{isNotice ? NOTICE_KO : id}</span>
            <h3>{title}</h3>
            <span className="comment_count_wrapper">
                <CommentIcon /> {countView}
            </span>
            <time dateTime={dateView}>{dateView}</time>
            <span>{author}</span>
            <span>{viewCount}</span>
        </article>
    );
};

const BulletinBoard = (props: ArticleListProps) => {
    const { columns, articles = [] } = props;

    return (
        <section>
            <div className="board_caption">
                {columns?.map(col => (
                    <span key={col}> {col} </span>
                ))}
            </div>
            {articles.map((article: ArticleInfo) => (
                <StyledLink to={`/article/${article.id}`} key={article.id}>
                    <Columns {...article} />
                </StyledLink>
            ))}
        </section>
    );
};

BulletinBoard.defaultProps = {
    columns: ["번호", "제목", "", "날짜", "글쓴이", "조회수"],
    articles: [],
};

export default BulletinBoard;
