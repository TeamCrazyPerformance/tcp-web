import React from "react";
import Avatar from "@atoms/Avatar";
import { FiEdit3 as EditIcon } from "react-icons/fi";
import { IoMdClose as DeleteIcon } from "react-icons/io";
import { displayDate } from "~/utils";
import { Comment } from "~/types";
import "./style.scss";

export interface CommentCardProps {
    comment: Comment;
    /**
     *  삭제 버튼 노출 여부
     */
    deletable?: boolean;
    /**
     * 수정 버튼 노출 여부
     */
    editable?: boolean;
    /**
     * 댓글 삭제 이벤트
     */
    onDelete?: (commentId: number) => void;
    /**
     * 댓글 수정 이벤트
     */
    onEdit?: (comment: { id: number; contents: string }) => void;
}

const CommentCard = (props: CommentCardProps) => {
    const { comment, editable, deletable, onDelete } = props;
    const { author, createdAt, updatedAt, contents } = comment;
    const { avatar = "", github = "", username = "" } = author;

    const dateView = displayDate(updatedAt || createdAt, {
        format: "YYYY. MM. DD A hh:mm",
    });

    const handleDelete = () => onDelete && onDelete(comment.id);

    return (
        <div className="box_comment_card">
            <Avatar src={avatar} github={github} />
            <div className="box_comment">
                <div className="comment_head">
                    <span>
                        <div>
                            {username}
                            <strong>{`@${github}`}</strong>
                        </div>
                        <time>{dateView}</time>
                    </span>
                    <span className="comment_btns">
                        {editable && <EditIcon className="edit" />}
                        {deletable && <DeleteIcon onClick={handleDelete} />}
                    </span>
                </div>
                <div className="comment_body">
                    {contents.split("\n").map((line, idx) => (
                        <span key={idx}>
                            {line}
                            <br />
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

CommentCard.defaultProps = {
    deletable: false,
};

export default CommentCard;
