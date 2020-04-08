import React, { InputHTMLAttributes } from "react";
import "./style.scss";

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    /**
     * 라벨에 표시될 내용
     */
    labelName: string;
    /**
     * 필수 항목 여부 * 표시
     */
    required?: boolean;
    /**
     * validate 통과 여부
     * true일 시 invalid
     */
    invalid?: boolean;
    /**
     * invalid시 노출될 안내 문구
     */
    invalidCaption?: string;
}

function FormInput(props: FormInputProps) {
    const {
        labelName,
        required,
        invalid,
        type,
        className,
        invalidCaption,
        ...rest
    } = props;
    return (
        <div className={`form_input_wrapper ${className ? className : ""}`}>
            <label>
                {labelName} {required && <span className="require">*</span>}
            </label>
            <input type={type} className={invalid ? "invalid" : ""} {...rest} />
            <div className="invalid_caption">{invalid && invalidCaption}</div>
        </div>
    );
}

FormInput.defaultProps = {
    type: "text",
    invalidCaption: "다시 한번 확인해주세요",
};

export default React.memo(FormInput);
