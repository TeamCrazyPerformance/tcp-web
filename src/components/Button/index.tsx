import React, { FunctionComponent, ButtonHTMLAttributes } from "react";
import "./style.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FunctionComponent<ButtonProps> = props => {
    const { name, onClick, className = "white" } = props;

    return (
        <button onClick={onClick} className={className}>
            {name}
        </button>
    );
};

export default Button;
