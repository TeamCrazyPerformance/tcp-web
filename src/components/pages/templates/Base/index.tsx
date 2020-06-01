import React from "react";
import Header from "~/components/UI/blocks/Header";
import SideNavigation from "~/components/UI/atoms/SideNavigation";
import { Category } from "~/types";
import "./style.scss";

interface Props {
    categories?: Category[];
    children: React.ReactNode;
}

const BaseTemplate = (props: Props) => {
    const { categories, children } = props;

    return (
        <>
            <Header />
            <div className="body_wrapper">
                {categories && <SideNavigation items={categories} />}
                <main>{children}</main>
            </div>
        </>
    );
};

export default BaseTemplate;
