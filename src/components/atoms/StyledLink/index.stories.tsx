import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import StoryRouter from "storybook-react-router";
import Link from ".";

export default {
    title: "Atoms / Link",
    decorators: [withKnobs, StoryRouter()],
    component: Link
};

export const RouterLink = () => {
    return (
        <div>
            <Link to={text("to:/", "/")} name={text("name:홈", "홈")} />
            <Link
                to={text("to:/boards", "/boards")}
                name={text("name:게시판", "게시판")}
            />
            <Link
                to={text("to:/members", "/members")}
                name={text("name:팀원 소개", "팀원 소개")}
            />
        </div>
    );
};

export const hrefLink = () => {
    return (
        <Link
            href={text("href", "http://www.github.com")}
            name={text("name", "깃헙으로 이동")}
        />
    );
};
