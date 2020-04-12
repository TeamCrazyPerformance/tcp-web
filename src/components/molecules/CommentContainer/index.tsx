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
}

const Comment = (props: CommentProps) => {
    const { user, comments } = props;

    return (
        <div className="comment_container">
            <CommentTextArea user={user} />
            <Divider />
            <div className="box_comments">
                {comments.length &&
                    comments.map((comment) => (
                        <CommentCard
                            key={comment.id}
                            comment={comment}
                            deletable={comment.author.id === user.id}
                            editable={comment.author.id === user.id}
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
