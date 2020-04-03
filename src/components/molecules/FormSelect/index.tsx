import React, { SelectHTMLAttributes, OptionHTMLAttributes } from "react";
import "./style.scss";

interface OptionsProps extends OptionHTMLAttributes<HTMLOptionElement> {}

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    labelName: string;
    required?: boolean;
    invalid?: boolean;
    invalidCaption?: string;
    options: OptionsProps[];
}

const FormSelect = (props: FormSelectProps) => {
    const {
        labelName,
        required,
        invalid,
        invalidCaption,
        options,
        ...rest
    } = props;
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
            <div className="invalid_caption">{invalid && invalidCaption}</div>
        </div>
    );
};

FormSelect.defaultProps = {
    invalidCaption: "다시 한번 확인해주세요"
};

export default React.memo(FormSelect);
