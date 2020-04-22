import React from "react";
import Avatar from "@atoms/Avatar";
import CommentContainer from "@molecules/CommentContainer";
import { EyeIcon, CommentIcon } from "@lib/Icons";
import { displayDate } from "~/utils";
import { Profile, Article as IArticle, Comment } from "~/types";
import "./style.scss";

export interface ArticleTitleProps {
    article: Omit<IArticle, "comment" | "contents">;
}

export interface ArticleProps {
    user: Profile;
    article: IArticle;
    comments: Comment[];
    /**
     * 댓글 삭제 이벤트
     */
    onDeleteComment?: (commentId: number) => void;
    /**
     * 댓글 수정 이벤트
     */
    onEditComment?: (comment: { id: number; contents: string }) => void;
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

const parse = (line: string, idx: number) => (
    <span key={idx}>
        {line}
        <br />
    </span>
);

const ArticleContents = ({ contents }: { contents: string }) => {
    const contentsSplitedByNewline = contents.split("\n");

    return (
        <div className="article_content">
            {contentsSplitedByNewline.map(parse)}
        </div>
    );
};

const Article = (props: ArticleProps) => {
    const { user, article, comments, onDeleteComment, onEditComment } = props;

    return (
        <div className="article_page">
            <ArticleTitle article={article} />
            <ArticleContents contents={article.contents} />
            <CommentContainer
                comments={comments}
                user={user}
                onDeleteComment={onDeleteComment}
                onEditComment={onEditComment}
            />
        </div>
    );
};

export default Article;
