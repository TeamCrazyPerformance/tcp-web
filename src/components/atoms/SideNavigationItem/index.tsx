import React, { useState, SyntheticEvent } from "react";
import "./style.scss";

export interface SideNavigationItemProps {
    children?: string | React.ReactElement;
    /**
     * 식별자
     */
    itemId: string;
    /**
     * 라벨에 표시될 내용
     */
    name: string;
    /**
     * 현재 클릭된 상태인지
     */
    active?: boolean;
    /**
     * 하위 목록 리스트
     */
    subItems?: SideNavigationItemProps[];
    /**
     * 이벤트 핸들러
     */
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    className?: string;
}

export interface SideNavigationSubItemsProps {
    parentId: string;
    activeItemId: string;
    items: SideNavigationItemProps[];
    onClick: (e: SyntheticEvent<HTMLDivElement>) => void;
}

const SideNavigationSubItems = ({
    parentId,
    activeItemId,
    items,
    onClick
}: SideNavigationSubItemsProps) => (
    <div className="side_navigation_sub_container" onClick={onClick}>
        {items.map(item => (
            <SideNavigationItem
                {...item}
                itemId={`${parentId}-${item.itemId}`}
                key={item.itemId}
                active={activeItemId === item.itemId}
                className="subItem"
            />
        ))}
    </div>
);

export const SideNavigationItem = (props: SideNavigationItemProps) => {
    const {
        name,
        onClick,
        active = false,
        children = "",
        itemId,
        subItems = [],
        className = ""
    } = props;
    const [currentItemId, setActiveItemId] = useState<string>(
        subItems.length ? subItems[0].itemId : ""
    );

    const handleClick = (e: SyntheticEvent<HTMLDivElement>) => {
        if (subItems.length) setActiveItemId(subItems[0].itemId);
        if (!(e.target instanceof HTMLDivElement) || !e.target.dataset) return;

        let datasetId;
        if (!(datasetId = e.target.dataset.itemId)) return;

        if (datasetId.startsWith(`${itemId}-`)) {
            setActiveItemId(datasetId.split("-")[1]);
        }
    };

    return (
        <div
            data-item-id={itemId}
            onClick={onClick}
            className={`side_navigation_item ${
                active ? "active" : ""
            } ${className}`}
        >
            {children || name}
            {active && !!subItems.length && (
                <SideNavigationSubItems
                    parentId={itemId}
                    activeItemId={currentItemId}
                    onClick={handleClick}
                    items={subItems}
                />
            )}
        </div>
    );
};

SideNavigationItem.deaultProps = {
    active: false,
    children: "",
    subItems: [],
    className: ""
};

export default SideNavigationItem;
