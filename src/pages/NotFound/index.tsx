import React from "react";
import Header from "~/components/blocks/Header";
import "./style.scss";

const NotFound = () => (
    <>
        <Header />
        <main className="not_found">
            <p>
                We&apos;re Sorry
                <span role="img" aria-label="Chick">
                    🐣
                </span>
            </p>
            <p>We can&apos;t Find it. please try again.</p>
        </main>
    </>
);

export default NotFound;
