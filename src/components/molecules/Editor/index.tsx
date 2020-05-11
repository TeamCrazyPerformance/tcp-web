import React, { useRef } from "react";
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

    const handleOnChange = () => {
        handleChange &&
            editRef.current &&
            handleChange(editRef.current.getInstance().getHtml());
    };

    return (
        <ReactEditor
            height={"80vh"}
            previewStyle="vertical"
            initialEditType="markdown"
            useCommandShortcut={true}
            initialValue={initialValue}
            ref={editRef}
            events={{ change: handleOnChange }}
        />
    );
};

export default Editor;
