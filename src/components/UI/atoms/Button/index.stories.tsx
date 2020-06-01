import React from "react";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Button from ".";

export default {
    title: "Atoms / Button",
    decorators: [withKnobs],
    component: Button
};

const type = {
    label: "type",
    options: ["white", "grey"],
    defaultValue: "grey"
};

export const index = () => {
    const { label, options, defaultValue } = type;

    return (
        <Button
            className={select(label, options, defaultValue)}
            name={text("name", "Button")}
            onClick={action("onClick")}
        />
    );
};
