import React from "react";
import Avatar from "@atoms/Avatar";
import { IoMdEye as EyeIcon } from "react-icons/io";
import { MdModeComment as CommentIcon } from "react-icons/md";
// import PencilButton from "@atoms/PencilButton";
import { displayDate } from "~/utils";
import { Article } from "~/types";
import "./style.scss";

export interface ArticleTitleProps {
    article: Omit<Article, "comment" | "contents">;
}

const ArticleTitle = (props: ArticleTitleProps) => {
    const {
        author,
        createdAt,
        updatedAt,
        title,
        commentCount,
        viewCount,
    } = props.article;
    const dateView = displayDate(updatedAt || createdAt, {
        format: "YYYY/MM./DD A hh:mm",
    });

    const { avatar = "", github = "", username = "" } = author;

    return (
        <div className="box_post_title">
            <div className="title_info">
                <h1>{title}</h1>
                <div>
                    <time>{dateView}</time>
                    <strong>{username}</strong>
                </div>
            </div>
            <span className="title_right_side">
                <span className="title_icons">
                    <span className="title_icon">
                        <CommentIcon /> {commentCount}
                    </span>
                    <span className="title_icon">
                        <EyeIcon /> {viewCount}
                    </span>
                </span>
                <Avatar src={avatar} github={github} />
            </span>
        </div>
    );
};

ArticleTitle.defaultProps = {
    deletable: false,
};

export default ArticleTitle;
