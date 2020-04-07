import React from "react";
import icon from "./comment.svg";

export interface CommentIcon {}

export const CommentIcon = (props: CommentIcon) => {
    return <img src={icon} alt={"코멘트"} />;
};

export default CommentIcon;
