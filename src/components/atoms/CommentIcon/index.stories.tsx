import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import CommentIcon from ".";

export default {
    title: "Atoms / CommentIcon",
    decorators: [withKnobs],
    component: CommentIcon,
};

export const index = () => {
    return <CommentIcon />;
};
