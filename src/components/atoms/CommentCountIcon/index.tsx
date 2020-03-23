import React from "react";
import commentIcon from "./comment.svg";
import "./style.scss";

const MAX_DISPLAY_NUM = 999;

export interface CommentIcon {
    /**
     * 댓글 수
     */
    count: number;
}

export const CommentCountIcon = (props: CommentIcon) => {
    const { count } = props;
    const view = count > MAX_DISPLAY_NUM ? MAX_DISPLAY_NUM + "+" : count;

    return (
        <span className="comment_count_wrapper">
            <img src={commentIcon} alt={"코멘트"} /> {view}
        </span>
    );
};

CommentCountIcon.defaultProps = {
    count: 0
};

export default CommentCountIcon;
