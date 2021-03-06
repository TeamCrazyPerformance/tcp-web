import React from "react";
import { useHistory } from "react-router-dom";
import Avatar from "~/components/UI/atoms/Avatar";
import Button from "~/components/UI/atoms/Button";
import Divider from "~/components/UI/atoms/Divider";
import { EyeIcon, CommentIcon } from "@lib/Icons";
import { displayDate } from "~/utils";
import { Profile, Article as IArticle } from "~/types";

export interface ArticleTitleProps {
    article: Omit<IArticle, "comment" | "contents">;
    user: Profile;
    onDeleteArticle: (id: number | string) => void;
}

interface AuthorButtonProps {
    articleId: string | number;
    onDeleteArticle: (id: number | string) => void;
}

const AuthorButtons = (props: AuthorButtonProps) => {
    const { articleId, onDeleteArticle } = props;
    const history = useHistory();
    const handleModify = () => {
        history.push(`/editor/${articleId}`);
    };
    const handleDelete = () => {
        onDeleteArticle(articleId);
    };

    return (
        <div className="gnb">
            <Button name={"수정"} className="white" onClick={handleModify} />
            <Button name={"삭제"} className="red" onClick={handleDelete} />
        </div>
    );
};

export const ArticleTitle = (props: ArticleTitleProps) => {
    const { article, user, onDeleteArticle } = props;
    const {
        author,
        createdAt,
        updatedAt,
        title,
        commentCount,
        viewCount,
    } = article;

    const dateView = displayDate(updatedAt || createdAt, {
        format: "YYYY/MM/DD A hh:mm",
    });

    const { avatar = "", github = "", username = "" } = author;

    return (
        <div>
            <div className="upper_btns">
                <Button name={"목록"} className="white" />
                {user.id === author.id && (
                    <AuthorButtons
                        articleId={article.id}
                        onDeleteArticle={onDeleteArticle}
                    />
                )}
            </div>
            <Divider className="article_upper_divider" />
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
        </div>
    );
};

export default ArticleTitle;
