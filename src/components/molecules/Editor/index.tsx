import React, { useRef, useEffect, useCallback } from "react";
import ReactEditor from "@lib/Editor";
import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";

export interface EditorProps {
    initialValue?: string;
    handleChange?: (value: string) => void;
}

const Editor = (Editorprops: EditorProps) => {
    const { initialValue = "", handleChange } = Editorprops;
    const editRef = useRef<ReactEditor>(null);

    const setInitialValue = useCallback(() => {
        if (!initialValue) return;

        editRef.current?.getInstance().setHtml(initialValue);
    }, [initialValue]);

    const handleOnChange = () => {
        handleChange &&
            editRef.current &&
            handleChange(editRef.current.getInstance().getHtml());
    };

    useEffect(setInitialValue, [initialValue]);

    return (
        <ReactEditor
            height={"80vh"}
            previewStyle="vertical"
            initialEditType="markdown"
            useCommandShortcut={true}
            ref={editRef}
            events={{ change: handleOnChange }}
        />
    );
};

export default Editor;
