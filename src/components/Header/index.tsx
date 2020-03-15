import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import logo from "./logo.jpg";
import "./style.scss";

const Header = () => {
    let loginState = true;
    let name = "김희라";
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
                        <b className="username">{name}</b>
                        <span>&nbsp;님, 안녕하세요</span>
                    </>
                ) : (
                    <>
                        <Button name="Log in" />
                        <Button name="Join us" className="grey" />
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;
