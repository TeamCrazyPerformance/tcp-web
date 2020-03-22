import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "../../atoms/Button";
import Dropdown, { DropdownItem } from "../../molecules/Dropdown";
import logo from "./logo.jpg";
import "./style.scss";

const Header = () => {
    let loginState = true;
    let name = "김희라";
    const history = useHistory();

    const items: DropdownItem[] = [
        {
            name: "마이페이지",
            onClick: () => history.push("/mypage")
        },
        {
            name: "로그아웃",
            onClick: () => {
                console.log("로그아웃");
            }
        }
    ];

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleClickOpenDropDown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <header>
            <div className="logo">
                <img src={logo} alt={logo} />
                <div> tcp </div>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">홈</Link>
                    </li>
                    <li>
                        <Link to="/boards">게시판</Link>
                    </li>
                    <li>
                        <Link to="/members">팀원 소개</Link>
                    </li>
                </ul>
            </nav>
            <div className="login_status_wrapper">
                {loginState ? (
                    <>
                        <div className="tri"></div> &nbsp;
                        <b
                            className="username"
                            onClick={handleClickOpenDropDown}
                        >
                            {name}
                            {dropdownOpen && <Dropdown items={items} />}
                        </b>
                        <span>&nbsp;님, 안녕하세요</span>
                    </>
                ) : (
                    <>
                        <Button name="Log in" className="white" />
                        <Button name="Join us" />
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;
