import React from "react";
import Divider from "@atoms/Divider";
import CommentTextArea from "@molecules/CommentTextArea";
import CommentCard from "@molecules/CommentCard";
import { Profile, Comment as IComment } from "~/types";

import "./style.scss";

export interface CommentProps {
    /**
     * 현재 접속중인 user
     */
    user: Profile;
    /**
     * Comment 리스트
     */
    comments: IComment[];
    /**
     * 댓글 생성 이벤트
     */
    onCommentCreate?: (comment: { contents: string }) => void;
    /**
     * 댓글 삭제 이벤트
     */
    onCommentDelete?: (commentId: number) => void;
    /**
     * 댓글 수정 이벤트
     */
    onCommentEdit?: (comment: { id: number; contents: string }) => void;
}

//TODO 댓글이 없을 경우 no comments 노출
const Comment = (props: CommentProps) => {
    const {
        user,
        comments,
        onCommentCreate,
        onCommentDelete,
        onCommentEdit,
    } = props;

    return (
        <div className="comment_container">
            <CommentTextArea handleClick={onCommentCreate} user={user} />
            <Divider />
            <div className="box_comments">
                {comments.length &&
                    comments.map(comment => (
                        <CommentCard
                            key={comment.id}
                            comment={comment}
                            deletable={comment.author.id === user.id}
                            editable={comment.author.id === user.id}
                            onDelete={onCommentDelete}
                            onEdit={onCommentEdit}
                        />
                    ))}
            </div>
        </div>
    );
};

Comment.defaultProps = {
    deletable: false,
};

export default Comment;
