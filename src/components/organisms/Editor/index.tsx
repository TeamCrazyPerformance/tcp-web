import React from "react";
import Button from "@atoms/Button";
import Select from "@molecules/FormSelect";
import Input from "@molecules/FormInput";
import ReactEditor from "@molecules/Editor";

const selectProps = {
    labelName: "카테고리",
    invalid: false,
    invalidCaption: "카테고리를 선택해주세요",
    options: [],
};

const inputProps = {
    labelName: "제목",
    name: "title",
    invalid: false,
};

export type FORM_KEYS = "title" | "contents";

export interface EditorProps {
    categories?: [];
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    handleChange: (payload: { key: FORM_KEYS; value: string }) => void;
    initialValue?: string;
}

//TODO category 리스트 추가, 제목 추가
const Editor = (props: EditorProps) => {
    const { handleSubmit, initialValue = "", handleChange } = props;

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSubmit && handleSubmit(e);
    };

    const handleChangeContents = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleChange({ key: "title", value: e.currentTarget.value });
    };

    const handleChangeTitle = (value: string) => {
        handleChange({ key: "contents", value });
    };

    return (
        <form onSubmit={handleOnSubmit}>
            <Select {...selectProps} />
            <Input {...inputProps} onChange={handleChangeContents} />
            <ReactEditor
                handleChange={handleChangeTitle}
                initialValue={initialValue}
            />
            <Button name="등록" />
        </form>
    );
};

export default Editor;
