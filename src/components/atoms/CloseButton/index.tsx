import React, { ButtonHTMLAttributes } from "react";
import "./style.scss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * 이벤트 핸들러
     */
    onClick?: () => void;
}

export const CloseButton = (props: ButtonProps) => {
    const { onClick } = props;

    return <button onClick={onClick} className="close"></button>;
};

export default CloseButton;
