import React from "react";
import StoryRouter from "storybook-react-router";
import { withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import ArticleListMock from "~/components/blocks/ArticleList/mock";
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
        user: {
            id: "1",
            isAdmin: true,
            avatar:
                "https://avatars1.githubusercontent.com/u/22452742?s=40&u=e6bf6f13b8cfd32c5ed31d15bc2f9e6ee6463d1c&v=4",
            github: "lallaheeee",
            username: "김희라",
        },
    };

    return (
        <main>
            <BulletinBoard {...props} />
        </main>
    );
};
