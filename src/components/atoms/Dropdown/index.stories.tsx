import React, { CSSProperties } from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Dropdown, { DropdownItem } from ".";

export default {
    title: "Atoms / DropDown",
    component: Dropdown,
    decorators: [withKnobs]
};

const WrapperStyle: CSSProperties = {
    position: "relative",
    width: "9rem"
};

export const index = () => {
    const items: DropdownItem[] = [
        {
            name: text("item1-name", "마이페이지"),
            onClick: action("마이페이지로 이동")
        },
        {
            name: text("item2-name", "로그아웃"),
            onClick: action("로그아웃")
        }
    ];
    return (
        <div style={WrapperStyle}>
            <Dropdown items={items} visibility={boolean("visibility", true)} />
        </div>
    );
};
