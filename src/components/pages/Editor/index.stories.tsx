import React from "react";
import StoryRouter from "storybook-react-router";
import { withKnobs } from "@storybook/addon-knobs";
import Editor from ".";

export default {
    title: "Pages / Editor",
    component: Editor,
    decorators: [withKnobs, StoryRouter()],
};

export const index = () => {
    return <Editor />;
};
