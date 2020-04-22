import React from "react";
import StoryRouter from "storybook-react-router";
import { withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import ArticleListMock from "@molecules/ArticleList/mock";
import BulletinBoard from ".";

export default {
    title: "Organisms / BulletinBoard",
    component: BulletinBoard,
    decorators: [withKnobs, StoryRouter()],
};

const articles = ArticleListMock.articles;

export const index = () => {
    const props = {
        articles,
        articlesCount: 100,
        onPageChange: ({ selected }: { selected: number }) => {
            action(selected.toString());
        },
    };

    return (
        <main>
            <BulletinBoard {...props} />
        </main>
    );
};
