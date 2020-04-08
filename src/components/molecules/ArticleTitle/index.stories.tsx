import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import ArticleTitle, { ArticleTitleProps } from ".";

export default {
    title: "Molecules / ArticleTitle",
    component: ArticleTitle,
    decorators: [withKnobs],
};

export const index = () => {
    const props: ArticleTitleProps = {
        article: {
            id: 1,
            author: {
                id: "1",
                avatar:
                    "https://avatars1.githubusercontent.com/u/22452742?s=40&u=e6bf6f13b8cfd32c5ed31d15bc2f9e6ee6463d1c&v=4",
                github: "lallaheeee",
                username: "김희라",
            },
            createdAt: new Date("2020-03-04 02:03"),
            title: "이것은 제목임 ",
            commentCount: 25,
            viewCount: 25,
        },
    };

    return <ArticleTitle {...props} />;
};
