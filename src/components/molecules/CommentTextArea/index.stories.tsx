import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { Profile } from "~/types";
import CommentTextArea from ".";

export default {
    title: "Molecules / CommentTextArea",
    component: CommentTextArea,
    decorators: [withKnobs],
};

const user: Profile = {
    avatar:
        "https://avatars1.githubusercontent.com/u/22452742?s=40&u=e6bf6f13b8cfd32c5ed31d15bc2f9e6ee6463d1c&v=4",
    github: "lallaheeee",
    id: "0",
    username: "string",
};

export const index = () => {
    return <CommentTextArea user={user} />;
};
