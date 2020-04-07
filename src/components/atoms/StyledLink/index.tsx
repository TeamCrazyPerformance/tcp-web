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
    name: string | number;
}

function StyledLink(props: StyledLinkProps) {
    const { to, href, name } = props;
    if (to) return <Link to={to}>{name}</Link>;

    return (
        <a href={href} className="a_href">
            {name}
        </a>
    );
}

export default StyledLink;
