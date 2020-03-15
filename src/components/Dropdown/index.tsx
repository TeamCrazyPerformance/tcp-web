import React, { FunctionComponent } from "react";
import "./style.scss";

export interface DropdownItem {
    name: string;
    onClick: () => void;
}

interface DropdownProps {
    items: DropdownItem[];
}

const Dropdown: FunctionComponent<DropdownProps> = props => {
    const { items } = props;

    return (
        <div className="dropdown_container">
            {items.map(({ name, onClick }) => (
                <div className="dropdown_item" onClick={onClick} key={name}>
                    {name}
                </div>
            ))}
        </div>
    );
};

export default Dropdown;
