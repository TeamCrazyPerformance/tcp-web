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
    onCommentCreate?: (comment: { contents: string }) => void;
    /**
     * 댓글 삭제 이벤트
     */
    onCommentDelete?: (id: number) => void;
    /**
     * 댓글 수정 이벤트
     */
    onCommentEdit?: (comment: { id: number; contents: string }) => void;
};

const Article = (props: Props) => {
    const {
        article,
        comments,
        categories,
        user,
        onCommentCreate,
        onCommentDelete,
        onCommentEdit,
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
                        onCommentCreate={onCommentCreate}
                        onCommentEdit={onCommentEdit}
                        onCommentDelete={onCommentDelete}
                    />
                </main>
            </div>
        </>
    );
};

export default Article;
