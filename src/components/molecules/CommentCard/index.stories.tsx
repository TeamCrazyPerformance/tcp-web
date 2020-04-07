import React from "react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import CommentCard, { CommentCardProps } from ".";

export default {
    title: "Molecules / CommentCard",
    component: CommentCard,
    decorators: [withKnobs],
};

export const index = () => {
    const props: CommentCardProps = {
        id: "xdfsfdszd",
        writer: {
            id: "1",
            avatar:
                "https://avatars1.githubusercontent.com/u/22452742?s=40&u=e6bf6f13b8cfd32c5ed31d15bc2f9e6ee6463d1c&v=4",
            github: "lallaheeee",
            username: "김희라",
        },
        createAt: new Date("2020-03-04 02:03"),
        deletable: boolean("deletable", true),
        editable: boolean("editable", true),
        contents:
            "댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글\n 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 ",
    };

    return <CommentCard {...props} />;
};
