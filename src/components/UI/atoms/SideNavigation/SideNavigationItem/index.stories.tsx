import React from "react";
import StoryRouter from "storybook-react-router";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import SideNavigationItem from ".";

export default {
    title: " Atoms / SideNavigationItem",
    decorators: [withKnobs, StoryRouter()],
    component: SideNavigationItem,
};

export const index = () => {
    return (
        <>
            <SideNavigationItem
                to={"/articles?category=회의록"}
                active={boolean("active", false)}
                name={text("name1", "회의록")}
                onClick={action("onClick")}
                id={"#회의록"}
            />
        </>
    );
};

export const withSubItems = () => {
    return (
        <SideNavigationItem
            to={"/?category=기출문제"}
            active={boolean("active:기출문서", true)}
            name={text("name2", "기출문서")}
            onClick={action("onClick")}
            id={"#기출문서"}
            subItems={[
                { id: "#2019", name: "2019" },
                { id: "#2018", name: "2018" },
                { id: "#2017", name: "2017" },
            ]}
        />
    );
};
