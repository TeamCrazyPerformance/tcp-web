import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Editor from ".";

export default {
    title: "Molecules / Editor",
    component: Editor,
    decorators: [withKnobs],
};

export const index = () => {
    return <Editor />;
};
