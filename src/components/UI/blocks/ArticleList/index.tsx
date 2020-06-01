import React from "react";
import StyledLink from "~/components/UI/atoms/StyledLink";
import Columns from './Columns';
import { ArticleInfo, NoticeInfo } from "~/types";
import "./style.scss";

export interface ArticleListProps {
    /**
     * 테이블 칼럼 이름
     */
    columns?: string[];
    /**
     * 포스트들
     */
    articles?: ArticleInfo[];
    notices?: NoticeInfo[];
}

const BulletinBoard = (props: ArticleListProps) => {
    const { columns, articles = [], notices = [] } = props;

    return (
        <section>
            <div className="board_caption">
                {columns?.map(col => (
                    <span key={col}> {col} </span>
                ))}
            </div>
            {notices.map(({ article: notice, type }: NoticeInfo) => (
                <StyledLink to={`/article/${notice.id}`} key={notice.id}>
                    <Columns {...notice} isNotice={type} />
                </StyledLink>
            ))}
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
