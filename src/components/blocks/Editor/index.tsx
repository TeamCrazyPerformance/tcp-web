import React, { useMemo } from "react";
import Button from "@atoms/Button";
import Select from "~/components/atoms/Form/FormSelect";
import Input from "~/components/atoms/Form/FormInput";
import ReactEditor from "~/components/atoms/Editor";
import { Category } from "~/types";

const TITLE = "title";
const CONTENTS = "contents";

const selectProps = {
    labelName: "카테고리",
    invalid: false,
    invalidCaption: "카테고리를 선택해주세요",
};

const inputProps = {
    labelName: "제목",
    name: "title",
    invalid: false,
};

export type FORM_KEYS = "title" | "contents";
type Accumulator = { value: number; contents: string }[];
export interface EditorProps {
    categories?: Category[];
    initialValue?: { title: string; contents: string };
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    handleChange: (payload: { key: FORM_KEYS; value: string }) => void;
    handleCategoryChange: (seletedTab: number) => void;
}

const convertCategoryToOptions = (categories: Category[]): Accumulator => {
    return categories.reduce((acc: Accumulator, cur: Category) => {
        const { id: value, name: contents, subItems } = cur;
        if (subItems) {
            return [
                ...acc,
                { value, contents },
                ...subItems.map(({ id: value, name }) => ({
                    value,
                    contents: `${contents}/${name}`,
                })),
            ];
        }

        return [...acc, { value, contents }];
    }, []);
};

//TODO category 리스트 추가, 제목 추가
const Editor = (props: EditorProps) => {
    const {
        handleSubmit,
        initialValue = { title: "", contents: "" },
        handleChange,
        categories = [],
        handleCategoryChange,
    } = props;

    const options = useMemo(() => convertCategoryToOptions(categories), [
        categories,
    ]);

    const handleChangeCategory = (e: React.FocusEvent<HTMLSelectElement>) => {
        const { value } = e.target;

        handleCategoryChange(parseInt(value));
    };

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSubmit && handleSubmit(e);
    };

    const handleChangeContents = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleChange({ key: TITLE, value: e.target.value });
    };

    const handleChangeTitle = (value: string) => {
        handleChange({ key: CONTENTS, value });
    };

    return (
        <form onSubmit={handleOnSubmit}>
            <Select
                {...selectProps}
                options={options}
                onBlur={handleChangeCategory}
            />
            <Input
                {...inputProps}
                defaultValue={initialValue.title}
                onChange={handleChangeContents}
            />
            <ReactEditor
                handleChange={handleChangeTitle}
                initialValue={initialValue.contents}
            />
            <Button name="등록" />
        </form>
    );
};

export default Editor;
