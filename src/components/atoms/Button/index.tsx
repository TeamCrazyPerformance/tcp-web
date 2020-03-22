import React, { ButtonHTMLAttributes } from "react";
import "./style.scss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * 버튼에 표시될 내용
     */
    name: string;
    /**
     * 이벤트 핸들러
     */
    onClick?: () => void;
    /**
     * 버튼 스타일 ex) grey, white
     */
    className?: string;
}

export const Button = (props: ButtonProps) => {
    const { name, onClick, className = "grey" } = props;

    return (
        <button onClick={onClick} className={className}>
            {name}
        </button>
    );
};

Button.defaultProps = {
    className: "grey"
};

export default Button;
