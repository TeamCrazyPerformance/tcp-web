import React, { useState, useRef } from "react";
import Avatar from "@atoms/Avatar";
import Button from "@atoms/Button";
import TextArea from "@lib/TextArea";
import { EditIcon, DeleteIcon } from "@lib/Icons";
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
    const editRef = useRef(null);
    const [isEditMode, setIsEditMode] = useState(false);

    const dateView = displayDate(updatedAt || createdAt, {
        format: "YYYY. MM. DD A hh:mm",
    });

    const isEditClassName = isEditMode ? "edit_mode" : "";

    const handleStartEdit = () => setIsEditMode(true);

    const handleDelete = () => onDelete && onDelete(comment.id);

    return (
        <div className={`box_comment_card ${isEditClassName}`}>
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
                        {editable && (
                            <EditIcon
                                className="edit"
                                onClick={handleStartEdit}
                            />
                        )}
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
                {isEditMode && (
                    <section className="box_comment_textarea box_textarea edit_comment">
                        <TextArea
                            minRows={2}
                            maxRows={6}
                            defaultValue={contents}
                            ref={editRef}
                        />

                        <Button name="수정" />
                    </section>
                )}
            </div>
        </div>
    );
};

CommentCard.defaultProps = {
    deletable: false,
};

export default CommentCard;
