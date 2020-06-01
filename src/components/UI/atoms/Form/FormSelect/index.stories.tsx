import React from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import FormSelect from ".";

export default {
    title: "Atoms / Form / FormSelect",
    decorators: [withKnobs],
    component: FormSelect
};

export const index = () => {
    return (
        <FormSelect
            labelName={text("name", "학적 상태")}
            required={boolean("required", false)}
            invalid={boolean("invalid", false)}
            disabled={boolean("disabled", false)}
            options={[
                { value: "", selected: true, hidden: true },
                { value: "재학" },
                { value: "휴학" },
                { value: "졸업" },
                { value: "휴학 예정" },
                { value: "졸업 예정" },
                { value: "재학 예정" }
            ]}
            onBlur={action("선택ㅎ")}
        />
    );
};
