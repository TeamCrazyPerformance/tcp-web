import React, { CSSProperties } from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { SideNavigationItemProps } from "../../atoms/SideNavigationItem";
import SideNavigation from ".";

export default {
    title: "Molecules / SideNavigation",
    component: SideNavigation,
    decorators: [withKnobs]
};

const WrapperStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "5rem",
    height: "80vh"
};

export const index = () => {
    const items: SideNavigationItemProps[] = [
        {
            itemId: "#회의록",
            name: text("item1-name", "회의록")
        },
        {
            itemId: "#스터디",
            name: text("item2-name", "스터디")
        },
        {
            itemId: "#문서",
            name: text("item3-name", "문서")
        },
        {
            itemId: "#기출문서",
            name: text("item4-name", "기출문서"),
            subItems: [
                { itemId: "#2019", name: "2019" },
                { itemId: "#2018", name: "2018" },
                { itemId: "#2017", name: "2017" }
            ]
        },
        {
            itemId: "#프로젝트",
            name: text("item5-name", "프로젝트")
        }
    ];
    return (
        <div style={WrapperStyle}>
            <SideNavigation items={items} />
        </div>
    );
};
