import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import PencilButton from ".";

export default {
    title: "Atoms / PencilButton",
    decorators: [withKnobs],
    component: PencilButton,
};

export const index = () => {
    return <PencilButton onClick={action("click")} />;
};
