import React from "react";
import CommentContainer from "~/components/UI/blocks/CommentContainer";
import ReactHtmlParser from "@lib/ReactHtmlParser";
import { Profile, Article as IArticle, Comment } from "~/types";
import Title from "./Title";
import "./style.scss";

export interface ArticleProps {
    user: Profile;
    article: IArticle;
    comments: Comment[];
    /**
     * 댓글 생성 이벤트
     */
    onCreateComment?: (comment: { contents: string }) => void;
    /**
     * 댓글 삭제 이벤트
     */
    onDeleteComment?: (commentId: number) => void;
    /**
     * 댓글 수정 이벤트
     */
    onEditComment?: (comment: { id: number; contents: string }) => void;
    /**
     * 게시글 삭제 이벤트
     */
    onDeleteArticle: (id: number | string) => void;
}

const ArticleContents = ({ contents }: { contents: string }) => {
    return <div className="article_content">{ReactHtmlParser(contents)}</div>;
};

const Article = (props: ArticleProps) => {
    const {
        user,
        article,
        comments,
        onCreateComment,
        onDeleteComment,
        onEditComment,
        onDeleteArticle,
    } = props;

    return (
        <div className="article_page">
            <Title
                article={article}
                user={user}
                onDeleteArticle={onDeleteArticle}
            />
            <ArticleContents contents={article.contents} />
            <CommentContainer
                comments={comments}
                user={user}
                onCreateComment={onCreateComment}
                onDeleteComment={onDeleteComment}
                onEditComment={onEditComment}
            />
        </div>
    );
};

export default Article;
