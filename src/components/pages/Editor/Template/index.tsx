import React from "react";
import BaseTemplate from "~/components/pages/template";
import { Category } from "~/types";
import EditorComponent, { EditorProps } from "~/components/UI/blocks/Editor";

type Props = {
    categories: Category[];
} & EditorProps;

const EditorTemplate = (props: Props) => {
    const { categories, ...rest } = props;

    return (
        <BaseTemplate categories={categories}>
            <EditorComponent categories={categories} {...rest} />
        </BaseTemplate>
    );
};

export default EditorTemplate;
