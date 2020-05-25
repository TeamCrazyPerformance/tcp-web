import React from "react";
import Header from "@organisms/Header";
import EditorComponent, { EditorProps } from "@organisms/Editor";
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
