import React, { ReactNode } from "react";
import Header from "~/components/UI/blocks/Header";
import SideNavigation from "~/components/UI/atoms/SideNavigation";
import { Category } from "~/types";
import "./style.scss";

interface Props {
    categories: Category[];
    children: ReactNode;
}

const BaseTemplate = (props: Props) => {
    const { categories, children } = props;

    return (
        <>
            <Header />
            <div className="body_wrapper">
                <nav>
                    <SideNavigation items={categories} />
                </nav>
                <main>{children}</main>
            </div>
        </>
    );
};

export default BaseTemplate;
