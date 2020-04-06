import React, { CSSProperties } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import BulletinBoard from ".";

export default {
    title: "Molecules / BulletinBoard",
    component: BulletinBoard,
    decorators: [withKnobs],
};

const WrapperStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "5rem",
};

export const index = () => {
    const props = {
        posts: [
            {
                no: "공지",
                title: "[회의록] 2020 동아리 홍보",
                commentCount: 12,
                date: new Date("2020-03-02"),
                writer: "이송열",
                viewCount: 10,
            },
            {
                no: 36,
                title: "리액트 쵝고 ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ",
                commentCount: 12,
                date: new Date(),
                writer: "이송열",
                viewCount: 10,
            },
            {
                no: 35,
                title: "[회의록] 2020 동아리 홍보",
                commentCount: 12,
                date: new Date("2020-03-02"),
                writer: "이송열",
                viewCount: 10,
            },
            {
                no: 34,
                title: "Team Crazy Perfomance !! ",
                commentCount: 12,
                date: "2019. 12. 29.",
                writer: "이송열",
                viewCount: 10,
            },
            {
                no: 33,
                title: "김희라 짱짱 ",
                commentCount: 12,
                date: new Date("2020-03-02"),
                writer: "이송열",
                viewCount: 10,
            },
            {
                no: 33,
                title: "글 제목이다",
                commentCount: 12,
                date: new Date("2020-03-02"),
                writer: "이송열",
                viewCount: 10,
            },
        ],
    };
    return (
        <div style={WrapperStyle}>
            <BulletinBoard {...props} />
        </div>
    );
};
