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
                itemId={"#회의록"}
            />
        </>
    );
};

export const withSubItems = () => {
    return (
        <SideNavigationItem
            to={"/articles?category=기출문제"}
            active={boolean("active:기출문서", true)}
            name={text("name2", "기출문서")}
            onClick={action("onClick")}
            itemId={"#기출문서"}
            subItems={[
                { itemId: "#2019", name: "2019" },
                { itemId: "#2018", name: "2018" },
                { itemId: "#2017", name: "2017" },
            ]}
        />
    );
};
