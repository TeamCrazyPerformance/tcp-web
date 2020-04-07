import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import StoryRouter from "storybook-react-router";
import Avatar from ".";

export default {
    title: "Atoms / Avatar",
    decorators: [withKnobs, StoryRouter()],
    component: Avatar,
};

const props = {
    src:
        "https://avatars3.githubusercontent.com/u/22452742?s=460&u=e6bf6f13b8cfd32c5ed31d15bc2f9e6ee6463d1c&v=4",
    github: "lallaheeee",
};

export const index = () => {
    return <Avatar {...props} />;
};
