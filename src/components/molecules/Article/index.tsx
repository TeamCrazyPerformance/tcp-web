import React from "react";
import Avatar from "@atoms/Avatar";
import { IoMdEye as EyeIcon } from "react-icons/io";
import { MdModeComment as CommentIcon } from "react-icons/md";
import CommentContainer from "@molecules/CommentContainer";
import { displayDate } from "~/utils";
import { User, Article as IArticle, Comment } from "~/types";
import "./style.scss";

export interface ArticleTitleProps {
    article: Omit<IArticle, "comment" | "contents">;
}

export const ArticleTitle = (props: ArticleTitleProps) => {
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

export interface ArticleProps {
    user: User;
    article: IArticle;
    comments: Comment[];
}

const Article = (props: ArticleProps) => {
    const { user, article, comments } = props;

    return (
        <div className="article_page">
            <ArticleTitle article={article} />

            <div className="article_content">
                {article.contents.split("\n").map((line) => (
                    <span>
                        {line}
                        <br />
                    </span>
                ))}
            </div>
            <CommentContainer comments={comments} user={user} />
        </div>
    );
};

export default Article;