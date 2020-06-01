import React, { AnchorHTMLAttributes } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

interface StyledLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    /**
     * React Router 링크
     *
     * @type {string}
     * @memberof StyledLinkProps
     */
    to?: string;
    /**
     *외부 링크
     *
     * @type {string}
     * @memberof StyledLinkProps
     */
    href?: string;
    /**
     * 노출할 이름
     *
     * @type {(string | number)}
     * @memberof StyledLinkProps
     */
    name?: string | number;
}

function StyledLink(props: StyledLinkProps) {
    const { to, href, name, children } = props;

    return (
        <>
            {to ? (
                <Link className="internal_link" to={to}>
                    {children || name}
                </Link>
            ) : (
                <a href={href} className="a_href">
                    {children || name}
                </a>
            )}
        </>
    );
}

export default StyledLink;
