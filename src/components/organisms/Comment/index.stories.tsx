import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Comment, { CommentProps } from ".";

export default {
    title: "Organisms / Comment",
    component: Comment,
    decorators: [withKnobs],
};

export const index = () => {
    const props: CommentProps = {
        user: {
            avatar:
                "https://avatars1.githubusercontent.com/u/22452742?s=40&u=e6bf6f13b8cfd32c5ed31d15bc2f9e6ee6463d1c&v=4",
            github: "lallaheeee",
            username: "김희라",
            id: "0",
            blog: "string",
            email: "string",
            exist: true,
        },
        comments: [
            {
                id: "1",
                writer: {
                    id: "0",
                    avatar:
                        "https://avatars1.githubusercontent.com/u/22452742?s=40&u=e6bf6f13b8cfd32c5ed31d15bc2f9e6ee6463d1c&v=4",
                    github: "lallaheeee",
                    username: "김희라",
                },
                createAt: new Date(),
                contents: `(1절)\n 동해물과 백두산이 마르고 닳도록\n하느님이 보우하사 우리나라만세\n(후렴)무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세\n \n(2절)\n남산위에 저 소나무 철갑을 두른듯\n 바람서리 불변함은 우리기상 일세\n(후렴)무궁화 삼천리 화려강산 대한사람 대한으로 길이보전하세\n \n(3절)\n가을하늘 공활한데 높고 구름없이\n밝은달은 우리가슴 일편단심일세\n(후렴)무궁화 삼천리 화려강산 대한사람 대한으로 길이보전하세\n\n(4절)\n이 기상과 이 맘으로 충성을 다하여\n괴로우나 즐거우나 나라사랑하세\n(후렴)무궁화 삼천리 화려강산 대한사람 대한으로 길이보전하세\n`,
            },
            {
                id: "2",
                writer: {
                    id: "1",
                    avatar:
                        "https://avatars1.githubusercontent.com/u/22452742?s=40&u=e6bf6f13b8cfd32c5ed31d15bc2f9e6ee6463d1c&v=4",
                    github: "kangJiJi",
                    username: "강지훈",
                },
                createAt: new Date("2020-03-07 02:45"),
                contents: "김희라 짱짜자자짱짱 ",
            },
            {
                id: "3",
                writer: {
                    id: "0",
                    avatar:
                        "https://avatars1.githubusercontent.com/u/22452742?s=40&u=e6bf6f13b8cfd32c5ed31d15bc2f9e6ee6463d1c&v=4",
                    github: "lallaheeee",
                    username: "김희라",
                },
                createAt: new Date("2020-03-04 02:03"),
                contents:
                    "내가 작성한 거니까 삭ㅈㅔ 및 수정 가능 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ",
            },
        ],
    };

    return <Comment {...props} />;
};
