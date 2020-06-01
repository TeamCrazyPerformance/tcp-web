import React, { CSSProperties } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import StoryRouter from "storybook-react-router";
import ArticleListMock from "./mock";
import ArticleList from ".";

export default {
    title: "Molecules / ArticleList",
    component: ArticleList,
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
        <ArticleList {...ArticleListMock} />
    </div>
);
