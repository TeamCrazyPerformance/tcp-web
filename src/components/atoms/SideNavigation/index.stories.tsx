import React, { CSSProperties } from "react";
import StoryRouter from "storybook-react-router";
import { withKnobs, text } from "@storybook/addon-knobs";
import { SideNavigationItemProps } from "~/components/atoms/SideNavigation/SideNavigationItem";
import SideNavigation from ".";

export default {
    title: "Molecules / SideNavigation",
    component: SideNavigation,
    decorators: [withKnobs, StoryRouter()],
};

const WrapperStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "5rem",
    height: "80vh",
};

export const index = () => {
    const items: SideNavigationItemProps[] = [
        {
            id: "#회의록",
            to: "/?category=회의록",
            name: text("item1-name", "회의록"),
        },
        {
            id: "#스터디",
            to: "/?category=스터디",
            name: text("item2-name", "스터디"),
        },
        {
            id: "#문서",
            to: "/?category=문서",
            name: text("item3-name", "문서"),
        },
        {
            id: "#기출문서",
            to: "/?category=기출문제",
            name: text("item4-name", "기출문서"),
            subItems: [
                {
                    id: "#2019",
                    to: "/?category=[기출문제,2019]",
                    name: "2019",
                },
                {
                    id: "#2018",
                    to: "/?category=[기출문제,2018]",
                    name: "2018",
                },
                {
                    id: "#2017",
                    to: "/?category=[기출문제,2017]",
                    name: "2017",
                },
            ],
        },
        {
            id: "#프로젝트",
            to: "/?category=프로젝트",
            name: text("item5-name", "프로젝트"),
        },
    ];
    return (
        <div style={WrapperStyle}>
            <SideNavigation items={items} />
        </div>
    );
};
