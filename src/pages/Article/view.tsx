import React from "react";
import Header from "@organisms/Header";
import SideNavigation from "@molecules/SideNavigation";
import { default as ArticleView, ArticleProps } from "@organisms/Article";
import { Category } from "~/types";
import "./style.scss";

export type Props = ArticleProps & { categories: Category[] } & {
    /**
     * 댓글 생성 이벤트
     */
    onCreateComment?: (comment: { contents: string }) => void;
    /**
     * 댓글 삭제 이벤트
     */
    onDeleteComment?: (id: number) => void;
    /**
     * 댓글 수정 이벤트
     */
    onEditComment?: (comment: { id: number; contents: string }) => void;
};

const Article = (props: Props) => {
    const {
        article,
        comments,
        categories,
        user,
        onCreateComment,
        onDeleteComment,
        onEditComment,
    } = props;

    if (!(article && user)) return null;

    return (
        <>
            <Header />
            <div className="body_wrapper">
                <nav>
                    <SideNavigation items={categories} />
                </nav>
                <main>
                    <ArticleView
                        article={article}
                        comments={comments}
                        user={user}
                        onCreateComment={onCreateComment}
                        onEditComment={onEditComment}
                        onDeleteComment={onDeleteComment}
                    />
                </main>
            </div>
        </>
    );
};

export default Article;
