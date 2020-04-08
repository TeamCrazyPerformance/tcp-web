import React from "react";
import Avatar from "@atoms/Avatar";
import PencilButton from "@atoms/PencilButton";
import CloseButton from "@atoms/CloseButton";
import { displayDate } from "~/utils";
import { User } from "~/types";
import "./style.scss";

export interface CommentCardProps {
    /**
     * 댓글 식별자
     */
    id: any;
    /**
     * 댓글 작성자
     */
    writer: Partial<User>;
    /**
     * 댓글 작성일
     */
    createAt: string | Date;
    /**
     *  삭제 버튼 노출 여부
     */
    deletable?: boolean;
    /**
     * 수정 버튼 노출 여부
     */
    editable?: boolean;
    /**
     * 댓글 내용
     */
    contents: string;
}

const CommentCard = (props: CommentCardProps) => {
    const { writer, createAt, contents, editable, deletable } = props;
    const dateView = displayDate(createAt, { format: "YYYY. MM. DD A hh:mm" });

    const { avatar = "", github = "", username = "" } = writer;

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
                        {editable && <PencilButton />}
                        {deletable && <CloseButton />}
                    </span>
                </div>
                <div className="comment_body">
                    {contents.split("\n").map((line) => (
                        <span>
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
