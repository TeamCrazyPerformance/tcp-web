import React from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import FormInput from ".";

export default {
    title: "Molecules / FormInput",
    decorators: [withKnobs],
    component: FormInput
};

export const index = () => {
    return (
        <FormInput
            labelName={text("name", "이메일")}
            onChange={action("onChange")}
            required={boolean("required", false)}
            invalid={boolean("invalid", false)}
            disabled={boolean("disabled", false)}
        />
    );
};
