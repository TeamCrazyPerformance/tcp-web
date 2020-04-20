import React, { useState, SyntheticEvent } from "react";
import StyledLink from "@atoms/StyledLink";
import "./style.scss";

export interface SideNavigationItemProps {
    children?: string | React.ReactElement;
    /**
     * 식별자
     */
    id: number | string;
    /**
     * 라벨에 표시될 내용
     */
    name: string;
    /**
     * 현재 클릭된 상태인지
     */
    active?: boolean;
    /**
     * 클릭시 이동할 곳
     */
    to?: string;
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
    parentId: number | string;
    activeItemId: number | string;
    items: SideNavigationItemProps[];
    onClick: (e: SyntheticEvent<HTMLElement>) => void;
}

const SideNavigationSubItems = ({
    parentId,
    activeItemId,
    items,
    onClick,
}: SideNavigationSubItemsProps) => (
    <section className="side_navigation_sub_container" onClick={onClick}>
        <ul>
            {items.map(item => (
                <li key={item.id}>
                    <SideNavigationItem
                        {...item}
                        id={`${parentId}-${item.id}`}
                        active={activeItemId === item.id.toString()}
                        className="subItem"
                    />
                </li>
            ))}
        </ul>
    </section>
);

export const SideNavigationItem = (props: SideNavigationItemProps) => {
    const {
        name,
        to,
        onClick,
        active = false,
        children = "",
        id,
        subItems = [],
        className = "",
    } = props;
    const [currentItemId, setActiveItemId] = useState<number | string>(
        subItems.length ? subItems[0].id : ""
    );

    const handleClick = (e: SyntheticEvent<HTMLElement>) => {
        if (subItems.length) setActiveItemId(subItems[0].id);
        if (!(e.target instanceof HTMLElement && e.target.dataset)) return;

        const datasetId = e.target.dataset.itemId;
        if (!datasetId) return;

        if (datasetId.startsWith(`${id}-`)) {
            setActiveItemId(datasetId.split("-")[1]);
        }
    };

    return (
        <>
            {!!subItems.length ? (
                <div
                    data-item-id={id}
                    onClick={onClick}
                    className={`side_navigation_item ${
                        active ? "active" : ""
                    } ${className}`}
                >
                    {children || name}
                    {active && (
                        <SideNavigationSubItems
                            parentId={id}
                            activeItemId={currentItemId}
                            onClick={handleClick}
                            items={subItems}
                        />
                    )}
                </div>
            ) : (
                <StyledLink to={to}>
                    <div
                        data-item-id={id}
                        onClick={onClick}
                        className={`side_navigation_item ${
                            active ? "active" : ""
                        } ${className}`}
                    >
                        {children || name}
                    </div>
                </StyledLink>
            )}
        </>
    );
};

SideNavigationItem.deaultProps = {
    active: false,
    children: "",
    subItems: [],
    className: "",
};

export default SideNavigationItem;
