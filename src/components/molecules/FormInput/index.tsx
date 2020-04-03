import React, { InputHTMLAttributes } from "react";
import "./style.scss";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    labelName: string;
    required?: boolean;
    invalid?: boolean;
}

export default function FormInput(props: FormInputProps) {
    const {
        labelName,
        required,
        invalid,
        type = "text",
        className,
        ...rest
    } = props;
    return (
        <div className={`form_input_wrapper ${className ? className : ""}`}>
            <label>
                {labelName} {required && <span className="require">*</span>}
            </label>
            <input type={type} className={invalid ? "invalid" : ""} {...rest} />
        </div>
    );
}
