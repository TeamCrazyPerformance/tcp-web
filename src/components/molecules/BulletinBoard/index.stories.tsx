import React, { CSSProperties } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import bulletinBoardMock from "./mock";
import BulletinBoard from ".";

export default {
    title: "Molecules / BulletinBoard",
    component: BulletinBoard,
    decorators: [withKnobs],
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
        <BulletinBoard {...bulletinBoardMock} />
    </div>
);
