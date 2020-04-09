import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import Avatar from "@atoms/Avatar";
import Button from "@atoms/Button";
import { Profile } from "~/types";
import "./style.scss";

interface CommentTextAreaProps {
    /**
     * 현재 로그인 중인 유저
     */
    user: Profile;
}

const CommentTextArea = (props: CommentTextAreaProps) => {
    const { user } = props;

    if (!user) return null;

    return (
        <section className="box_comment_textarea">
            <Avatar src={user.avatar} github={user.github} />
            <div className="box_textarea">
                <TextareaAutosize
                    minRows={2}
                    maxRows={6}
                    placeholder="댓글을 입력해주세요"
                />
            </div>
            <Button name="등록하기" />
        </section>
    );
};

export default CommentTextArea;
