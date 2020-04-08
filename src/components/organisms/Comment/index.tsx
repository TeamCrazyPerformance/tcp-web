import React from "react";
import Divider from "@atoms/Divider";
import CommentTextArea from "@molecules/CommentTextArea";
import CommentCard, { CommentCardProps } from "@molecules/CommentCard";
import { User } from "~/types";

import "./style.scss";

export interface CommentProps {
    user: User;
    comments: CommentCardProps[];
}

const Comment = (props: CommentProps) => {
    const { user, comments } = props;

    return (
        <div className="comment_container">
            <CommentTextArea user={user} />
            <Divider />
            <div className="box_comments">
                {comments.length &&
                    comments.map(({ id, writer, ...rest }) => (
                        <CommentCard
                            key={id}
                            id={id}
                            writer={writer}
                            {...rest}
                            deletable={writer.id === user.id}
                            editable={writer.id === user.id}
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
