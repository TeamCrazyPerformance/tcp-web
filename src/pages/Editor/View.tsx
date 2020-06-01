import React from "react";
import Header from "~/components/blocks/Header";
import EditorComponent, { EditorProps } from "~/components/blocks/Editor";
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
