import React, { CSSProperties } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import StoryRouter from "storybook-react-router";
import mock from "./mock";
import Members from ".";

export default {
    title: "Blocks / Admin / Members",
    component: Members,
    decorators: [withKnobs, StoryRouter()],
};

const WrapperStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "5rem",
};

export const index = () => (
    <div style={WrapperStyle}>
        <Members members={mock} />
    </div>
);
