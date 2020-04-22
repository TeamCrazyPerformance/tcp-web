import React from "react";
import Button from "@atoms/Button";
import Select from "@molecules/FormSelect";
import Input from "@molecules/FormInput";
import ReactEditor from "@molecules/Editor";
import "@toast-ui/editor/dist/toastui-editor.css";

const selectProps = {
    labelName: "카테고리",
    invalid: false,
    invalidCaption: "카테고리를 선택해주세요",
    options: [],
};

const inputProps = {
    labelName: "제목",
    invalid: false,
};

const Editor = () => {
    return (
        <>
            <Select {...selectProps} />
            <Input {...inputProps} />
            <ReactEditor />
            <Button name="등록" />
        </>
    );
};

export default Editor;
