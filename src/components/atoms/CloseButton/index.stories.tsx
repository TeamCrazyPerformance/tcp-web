import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import CloseButton from ".";

export default {
    title: "Atoms / CloseButton",
    decorators: [withKnobs],
    component: CloseButton,
};

export const index = () => {
    return <CloseButton onClick={action("click")} />;
};
