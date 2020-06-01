import React, { useMemo } from "react";
import "./style.scss";

export interface DropdownItem {
    /**
     * 드롭다운 아이템에 표시될 이름
     */
    name: string;
    /**
     * 이벤트 핸들러
     */
    onClick: () => void;
}

interface DropdownProps {
    /**
     * 드롭다운 아이템({name,onClick}) 리스트
     */
    items: DropdownItem[];
    /**
     * 화면 노출 여부
     */
    visibility?: boolean;
}

const Dropdown = (props: DropdownProps) => {
    const { items, visibility = true } = props;
    const dropdownItems = useMemo(
        () =>
            items.map(({ name, onClick }) => (
                <div className="dropdown_item" onClick={onClick} key={name}>
                    {name}
                </div>
            )),
        [items]
    );

    return (
        <div className="dropdown_container">{visibility && dropdownItems}</div>
    );
};

Dropdown.defaultProps = {
    visibility: true
};

export default Dropdown;
