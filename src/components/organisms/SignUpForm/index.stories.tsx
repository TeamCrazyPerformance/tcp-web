import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import SignUpForm from ".";

export default {
    title: "Organisms / SingUpForm",
    decorators: [withKnobs],
    component: SignUpForm
};

export const index = () => {
    return <SignUpForm handleSubmit={action("submit")} />;
};
