import React, { InputHTMLAttributes } from "react";
import "./style.scss";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    labelName: string;
    required?: boolean;
    invalid?: boolean;
}

export default function FormInput(props: FormInputProps) {
    const { labelName, required, invalid } = props;
    return (
        <div className="form_input_wrapper">
            <label>
                {labelName}{" "}
                {required && <span className="require">(필수)</span>}
            </label>
            <input {...props} className={invalid ? "invalid" : ""} />
        </div>
    );
}
