import React from "react";
import { CommentIcon } from "@lib/Icons";
import { displayDate } from "~/utils";
import { ArticleInfo } from "~/types";
import "./style.scss";

const NOTICE_KO = "공지";
const CLASSNAME_FOR_NOTICE = "notice";
const MAX_DISPLAY_NUM = 999;

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
            <h3>
                {isNotice === "게시판" && (
                    <span className="notice_board">게시판</span>
                )}
                {title}
            </h3>
            <span className="comment_count_wrapper">
                <CommentIcon /> {countView}
            </span>
            <time dateTime={dateView}>{dateView}</time>
            <span>{author}</span>
            <span>{viewCount}</span>
        </article>
    );
};

export default Columns;