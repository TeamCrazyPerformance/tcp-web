import React from "react";
import { withKnobs, number } from "@storybook/addon-knobs";
import CommentCountIcon from ".";

export default {
    title: "Atoms / CommentCountIcon",
    decorators: [withKnobs],
    component: CommentCountIcon
};

export const index = () => {
    return <CommentCountIcon count={number("count", 12)} />;
};
