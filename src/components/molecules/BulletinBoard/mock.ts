import { BulletinBoardProps } from ".";

const bulletinBoardMock: BulletinBoardProps = {
    articles: [
        {
            id: 37,
            isNotice: true,
            title: "[회의록] 2020 동아리 홍보",
            commentCount: 12,
            createdAt: new Date("2020-03-02"),
            author: "이송열",
            viewCount: 10,
        },
        {
            id: 36,
            title: "리액트 쵝고 ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ",
            commentCount: 12,
            createdAt: new Date(),
            author: "이송열",
            viewCount: 10,
        },
        {
            id: 35,
            title: "[회의록] 2020 동아리 홍보",
            commentCount: 12,
            createdAt: new Date("2020-03-02"),
            author: "이송열",
            viewCount: 10,
        },
        {
            id: 34,
            title: "Team Crazy Perfomance !! ",
            commentCount: 12,
            createdAt: new Date("2019. 12. 29."),
            author: "이송열",
            viewCount: 10,
        },
        // {
        //     id: 33,
        //     title: "김희라 짱짱 ",
        //     commentCount: 12,
        //     createdAt: new Date("2020-03-02"),
        //     author: "이송열",
        //     viewCount: 10,
        // },
        // {
        //     id: 33,
        //     title: "글 제목이다",
        //     commentCount: 12,
        //     createdAt: new Date("2020-03-02"),
        //     author: "이송열",
        //     viewCount: 10,
        // },
    ],
};

export default bulletinBoardMock;
