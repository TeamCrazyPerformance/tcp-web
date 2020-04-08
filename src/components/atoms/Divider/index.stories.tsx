import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Divider from ".";

export default {
    title: "Atoms / Divider",
    decorators: [withKnobs],
    component: Divider,
};

export const index = () => {
    return (
        <div style={{ paddingTop: "4rem" }}>
            <Divider />
        </div>
    );
};
