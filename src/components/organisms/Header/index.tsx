import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "@atoms/Button";
import StyledLink from "@atoms/StyledLink";
import Dropdown, { DropdownItem } from "@molecules/Dropdown";
import logo from "./logo.jpg";
import "./style.scss";

import { login } from "~/apis/Auth";
import { useAuth, Action } from "~/contexts/Auth";

const Nav = () => (
    <nav>
        <ul>
            <li>
                <StyledLink to="/" name="홈" />
            </li>
            <li>
                <StyledLink to="/boards" name="게시판" />
            </li>
            <li>
                <StyledLink to="/members" name="팀원 소개" />
            </li>
        </ul>
    </nav>
);

const Header = () => {
    const {
        state: { user },
        dispatch: userDispatch,
    } = useAuth();

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const history = useHistory();

    const items: DropdownItem[] = [
        {
            name: "마이페이지",
            onClick: () => history.push("/mypage"),
        },
        {
            name: "로그아웃",
            onClick: () => {
                userDispatch({
                    type: Action.LOGOUT,
                });
                history.push("/");
            },
        },
    ];

    const handleClickOpenDropDown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <header className="page_header">
            <div className="logo">
                <img src={logo} alt={logo} />
                <div> tcp </div>
            </div>
            <Nav />
            <div className="login_status_wrapper">
                {user ? (
                    <>
                        <div className="tri"></div> &nbsp;
                        <b
                            className="username"
                            onClick={handleClickOpenDropDown}
                        >
                            {user.username}
                            {dropdownOpen && <Dropdown items={items} />}
                        </b>
                        <span>&nbsp;님, 안녕하세요</span>
                    </>
                ) : (
                    <Button name="로그인" className="white" onClick={login} />
                )}
            </div>
        </header>
    );
};

export default Header;
