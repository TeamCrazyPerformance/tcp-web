import React, { useMemo, useState, SyntheticEvent } from "react";
import SideNavigationItem, {
    SideNavigationItemProps,
} from "~/components/UI/atoms/SideNavigation/SideNavigationItem";
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
        activeItemId || items[0]?.id,
    );
    const [childActiveId, setChildActiveId] = useState("");

    const handleClick = (e: SyntheticEvent<HTMLElement>) => {
        if (!(e.target instanceof HTMLElement && e.target.dataset)) return;

        const datasetId = e.target.dataset.itemId;
        if (!datasetId) return;

        const [parent, child] = datasetId.split("-");

        setActiveItemId(parent);
        setChildActiveId(child);
    };

    const SideNavigationItems = useMemo(
        () =>
            items.map(item => (
                <SideNavigationItem
                    data-item-id={item.id}
                    key={item.id}
                    active={currentItemId === item.id.toString()}
                    childActive={childActiveId}
                    {...item}
                />
            )),
        [items, currentItemId, childActiveId],
    );

    if (!items.length) return null;

    return (
        <nav>
            <section
                className="side_navigation_container"
                onClick={handleClick}
            >
                <ul>{SideNavigationItems}</ul>
            </section>
        </nav>
    );
};

SideNavigation.defaultProps = {};

export default SideNavigation;
