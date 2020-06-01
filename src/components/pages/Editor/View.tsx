import React from "react";
import Header from "~/components/UI/blocks/Header";
import EditorComponent, { EditorProps } from "~/components/UI/blocks/Editor";
import { useCategory } from "~/contexts/Category";

const EditorView = (props: EditorProps) => {
    const {
        state: { categories },
    } = useCategory();

    return (
        <>
            <Header />
            <main>
                <EditorComponent categories={categories} {...props} />
            </main>
        </>
    );
};

export default EditorView;
