import React from "react";
import "./style.scss";
import CommentIcon from "~/components/atoms/CommentIcon";
import { displayDate } from "~/utils";

const NOTICE_KO = "공지";
const CLASSNAME_FOR_NOTICE = "notice";
const MAX_DISPLAY_NUM = 999;
interface PostProps {
    /**
     * 게시글 번호
     */
    no: number | string;
    /**
     * 제목
     */
    title: string;
    /**
     * 댓글 수
     */
    commentCount: number;
    /**
     * 작성일자
     */
    date: Date | string;
    /**
     * 작성자
     */
    writer: string;
    /**
     * 조회수
     */
    viewCount: number;
}

export interface BulletinBoardProps {
    /**
     * 테이블 칼럼 이름
     */
    columns: string[];
    /**
     * 포스트들
     */
    posts?: PostProps[];
}

const Columns = (props: PostProps) => {
    const { no, title, commentCount, date, writer, viewCount } = props;
    const className = no === NOTICE_KO ? CLASSNAME_FOR_NOTICE : "";
    const dateView = displayDate(date);
    const countView =
        commentCount > MAX_DISPLAY_NUM ? MAX_DISPLAY_NUM + "+" : commentCount;

    return (
        <article className={className}>
            <span>{no}</span>
            <h3>{title}</h3>
            <span className="comment_count_wrapper">
                <CommentIcon /> {countView}
            </span>
            <time dateTime={dateView}>{dateView}</time>
            <span>{writer}</span>
            <span>{viewCount}</span>
        </article>
    );
};

const BulletinBoard = (props: BulletinBoardProps) => {
    const { columns, posts = [] } = props;

    return (
        <section>
            <div className="board_caption">
                {columns.map((col) => (
                    <span> {col} </span>
                ))}
            </div>
            {posts.map((post: PostProps) => (
                <Columns {...post} />
            ))}
        </section>
    );
};

BulletinBoard.defaultProps = {
    columns: ["번호", "제목", "", "날짜", "글쓴이", "조회수"],
    posts: [],
};

export default BulletinBoard;
