import React from "react";
import { withKnobs, number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Pagination from ".";

export default {
    title: "Molecules / Pagination",
    component: Pagination,
    decorators: [withKnobs],
};

export const index = () => {
    return (
        <Pagination
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            pageCount={number("page", 10)}
            onPageChange={action("onPageChagne")}
        />
    );
};
