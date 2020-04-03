import React, { InputHTMLAttributes } from "react";
import "./style.scss";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    labelName: string;
    required?: boolean;
    invalid?: boolean;
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
    invalidCaption: "다시 한번 확인해주세요"
};

export default React.memo(FormInput);
