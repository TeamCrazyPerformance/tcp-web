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
    onCreateComment?: (comment: { contents: string }) => void;
    /**
     * 댓글 삭제 이벤트
     */
    onDeleteComment?: (commentId: number) => void;
    /**
     * 댓글 수정 이벤트
     */
    onEditComment?: (comment: { id: number; contents: string }) => void;
}

//TODO 댓글이 없을 경우 no comments 노출
const Comment = (props: CommentProps) => {
    const {
        user,
        comments,
        onCreateComment,
        onDeleteComment,
        onEditComment,
    } = props;

    return (
        <div className="comment_container">
            <CommentTextArea handleClick={onCreateComment} user={user} />
            <Divider />
            <div className="box_comments">
                {comments.length &&
                    comments.map(comment => (
                        <CommentCard
                            key={comment.id}
                            comment={comment}
                            deletable={comment.author.id === user.id}
                            editable={comment.author.id === user.id}
                            onDelete={onDeleteComment}
                            onEdit={onEditComment}
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
