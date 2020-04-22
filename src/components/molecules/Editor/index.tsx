import React, { useRef } from "react";
import ReactEditor from "@lib/Editor";
import "@toast-ui/editor/dist/toastui-editor.css";

const Editor = () => {
    const editRef = useRef<ReactEditor>(null);

    return (
        <ReactEditor
            height={"100%"}
            previewStyle="vertical"
            initialEditType="wysiwyg"
            useCommandShortcut={true}
            ref={editRef}
        />
    );
};

export default Editor;
