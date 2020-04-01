import React, { FormHTMLAttributes } from "react";
import Button from "../../atoms/Button";
import FormInput from "../../molecules/FormInput";
import FormSelect from "../../molecules/FormSelect";
import "./style.scss";

interface SignUpFormProps extends FormHTMLAttributes<HTMLFormElement> {
    handleSubmit: () => void;
}

export default function SignUpForm(props: SignUpFormProps) {
    const { handleSubmit } = props;

    return (
        <>
            <h1>회원가입</h1>
            <form onSubmit={handleSubmit}>
                <FormInput labelName="학번" placeholder="ex) 19" />
                <FormSelect
                    labelName="학적 상태"
                    options={[
                        { value: "", selected: true, hidden: true },
                        { value: "재학" },
                        { value: "휴학" },
                        { value: "졸업" },
                        { value: "휴학 예정" },
                        { value: "졸업 예정" },
                        { value: "재학 예정" }
                    ]}
                />
                <FormInput labelName="연락처" placeholder="- 없이 번호 입력" />
                <FormInput
                    labelName="생년월일"
                    placeholder=" 6자리를 입력 ex) 940422"
                />
                <FormInput labelName="성" />
                <FormInput labelName="이름" />
                <FormInput labelName="이메일" />
                <FormInput
                    labelName="블로그"
                    placeholder="ex) https://lallaheeee.github.io/"
                />
                <Button name="가입하기" />
            </form>
        </>
    );
}
