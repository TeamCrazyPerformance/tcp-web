import React, { SelectHTMLAttributes, OptionHTMLAttributes } from "react";
import "./style.scss";

interface OptionsProps extends OptionHTMLAttributes<HTMLOptionElement> {}

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    labelName: string;
    required?: boolean;
    invalid?: boolean;
    options: OptionsProps[];
}

export default function FormSelect(props: FormSelectProps) {
    const { labelName, required, invalid, options, ...rest } = props;
    return (
        <div className="form_input_wrapper">
            <label>
                {labelName} {required && <span className="require">*</span>}
            </label>
            <select {...rest} className={invalid ? "invalid" : ""}>
                {options.map(({ value, ...rest }, idx) => (
                    <option key={idx} {...rest}>
                        {value}
                    </option>
                ))}
            </select>
        </div>
    );
}
