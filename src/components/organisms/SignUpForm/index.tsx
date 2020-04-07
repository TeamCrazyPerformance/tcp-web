import React, { FormHTMLAttributes } from "react";
import Button from "@atoms/Button";
import FormInput from "@molecules/FormInput";
import FormSelect from "@molecules/FormSelect";
import "./style.scss";

interface SignUpFormProps extends FormHTMLAttributes<HTMLFormElement> {
    handleSubmit: (e: React.SyntheticEvent) => void;
    handleBlur: (e: React.FocusEvent<HTMLFormElement>) => void;
    userinfo: any;
}

function SignUpForm(props: SignUpFormProps) {
    const { handleSubmit, userinfo, handleBlur } = props;

    const { user, validateState: isValid } = userinfo;
    if (!user) return null;
    return (
        <>
            <h1>회원가입</h1>
            <form onSubmit={handleSubmit} onBlur={handleBlur}>
                <FormInput
                    name="grade"
                    labelName="학번"
                    placeholder="ex) 19"
                    maxLength={2}
                    required={true}
                    invalid={isValid.grade}
                />
                <FormSelect
                    name="schoolRegister"
                    labelName="학적 상태"
                    options={[
                        { value: "", hidden: true },
                        { value: "재학" },
                        { value: "휴학" },
                        { value: "졸업" },
                        { value: "휴학 예정" },
                        { value: "졸업 예정" },
                        { value: "재학 예정" },
                    ]}
                    required={true}
                    invalid={isValid.schoolRegister}
                />
                <FormInput
                    name="phone"
                    labelName="연락처"
                    placeholder="- 없이 번호 입력"
                    maxLength={11}
                    required={true}
                    invalid={isValid.phone}
                />
                <FormInput
                    name="birth"
                    labelName="생년월일"
                    placeholder=" 6자리를 입력 ex) 940422"
                    maxLength={6}
                    required={true}
                    invalid={isValid.birth}
                />
                <FormInput
                    className="input_long"
                    defaultValue={user.username || ""}
                    name="username"
                    labelName="이름"
                    required={true}
                    invalid={isValid.name}
                />
                <FormInput
                    className="input_long"
                    defaultValue={user.email || ""}
                    name="email"
                    labelName="이메일"
                    invalid={isValid.email}
                />
                <FormInput
                    className="input_long"
                    defaultValue={user.blog || ""}
                    name="blog"
                    labelName="블로그"
                    placeholder="ex) https://lallaheeee.github.io/"
                    required={true}
                    invalid={isValid.blog}
                />
                <Button name="가입하기" />
            </form>
        </>
    );
}
export default SignUpForm;
