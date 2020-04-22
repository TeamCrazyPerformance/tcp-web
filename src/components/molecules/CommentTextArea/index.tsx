import React, { useRef } from "react";
import Avatar from "@atoms/Avatar";
import Button from "@atoms/Button";
import TextArea from "@lib/TextArea";
import { Profile } from "~/types";
import "./style.scss";

interface CommentTextAreaProps {
    /**
     * 현재 로그인 중인 유저
     */
    user: Profile;
    /**
     * 댓글 생성 이벤트
     */
    handleClick?: (comment: { contents: string }) => void;
}

const CommentTextArea = (props: CommentTextAreaProps) => {
    const { user, handleClick } = props;
    const editRef = useRef<HTMLTextAreaElement>(null);

    if (!user) return null;

    const handleCreateComment = () => {
        if (!(handleClick && editRef.current)) return;

        handleClick({ contents: editRef.current.value });
    };

    return (
        <section className="box_comment_textarea">
            <Avatar src={user.avatar} github={user.github} />
            <div className="box_textarea">
                <TextArea
                    minRows={2}
                    maxRows={6}
                    placeholder="댓글을 입력해주세요"
                    inputRef={editRef}
                />
            </div>
            <Button name="등록하기" onClick={handleCreateComment} />
        </section>
    );
};

export default CommentTextArea;
