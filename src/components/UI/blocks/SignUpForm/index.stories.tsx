import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import SignUpForm from ".";

export default {
    title: "Blocks / SingUpForm",
    decorators: [withKnobs],
    component: SignUpForm,
};

const userInfo = {
    user: {},
    validateState: {},
};

export const index = () => {
    return (
        <SignUpForm
            handleSubmit={action("submit")}
            userinfo={userInfo}
            handleBlur={action("validate")}
        />
    );
};
