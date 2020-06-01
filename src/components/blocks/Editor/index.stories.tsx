import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { Category } from "~/types";
import Editor from ".";

const categoryDummy: Category[] = [
    {
        id: 1,
        name: text("item1-name", "회의록"),
    },
    {
        id: 2,
        name: text("item2-name", "스터디"),
    },
    {
        id: 3,
        name: text("item3-name", "문서"),
    },
    {
        id: 4,
        name: text("item4-name", "기출문서"),
        subItems: [
            {
                id: 5,
                name: "2019",
            },
            {
                id: 6,
                name: "2018",
            },
            {
                id: 7,
                name: "2017",
            },
        ],
    },
    {
        id: 8,
        name: text("item5-name", "프로젝트"),
    },
];

export default {
    title: "Organisms / Editor",
    component: Editor,
    decorators: [withKnobs],
};

export const index = () => {
    return (
        <Editor
            handleCategoryChange={action("categorychange")}
            handleChange={action("change")}
            handleSubmit={action("submit")}
            categories={categoryDummy}
        />
    );
};
