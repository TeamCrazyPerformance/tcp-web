import React, { ButtonHTMLAttributes } from "react";
import icon from "./icon.svg";
import "./style.scss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * 이벤트 핸들러
     */
    onClick?: () => void;
}

export const PencilButton = (props: ButtonProps) => {
    const { onClick } = props;

    return (
        <button onClick={onClick} className="edit">
            <img src={icon} alt="edit_icon" />
        </button>
    );
};

export default PencilButton;
