import React, { useMemo, useState, SyntheticEvent } from "react";
import SideNavigationItem, {
    SideNavigationItemProps,
} from "@atoms/SideNavigationItem";
import "./style.scss";

interface SideNavigationProps {
    /**
     * 카테고리 아이템({name,onClick}) 리스트
     */
    items: SideNavigationItemProps[];
    /**
     * 기본 선택할 아이템 id
     */
    activeItemId?: string;
}

const SideNavigation = (props: SideNavigationProps) => {
    const { items, activeItemId } = props;

    const [currentItemId, setActiveItemId] = useState(
        activeItemId || items[0]?.itemId
    );
    const handleClick = (e: SyntheticEvent<HTMLDivElement>) => {
        if (!(e.target instanceof HTMLDivElement && e.target.dataset)) return;

        let datasetId;
        if (!(datasetId = e.target.dataset.itemId)) return;

        const clickedItemId = datasetId.split("-")[0];
        setActiveItemId(clickedItemId);
    };

    const SideNavigationItems = useMemo(
        () =>
            items.map(({ itemId, ...props }) => (
                <SideNavigationItem
                    data-item-id={itemId}
                    {...props}
                    itemId={itemId}
                    key={itemId}
                    active={currentItemId === itemId}
                />
            )),
        [items, currentItemId]
    );

    if (!items.length) return null;

    return (
        <div className="side_navigation_container" onClick={handleClick}>
            {SideNavigationItems}
        </div>
    );
};

SideNavigation.defaultProps = {};

export default SideNavigation;
