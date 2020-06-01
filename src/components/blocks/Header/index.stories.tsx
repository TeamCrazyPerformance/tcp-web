import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import StoryRouter from "storybook-react-router";
import Header from ".";

export default {
    title: "Organisms / Header",
    decorators: [withKnobs, StoryRouter()],
    component: Header,
};

export const index = () => {
    return <Header />;
};
