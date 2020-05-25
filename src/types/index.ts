export interface User {
    id: string;
    email: string;
    username: string;
    avatar: string;

    github: string;
    grade: string;
    schoolRegister: string;
    phone: string;
    birth: string;
    blog: string;
}

export interface Profile {
    id: string;
    github: string;
    isAdmin: boolean;
    username: string;
    avatar: string;
}

export interface Category {
    id: number;
    to?: string;
    name: string;
    subItems?: Category[];
}

export interface Article {
    id: number | string;
    isNotice?: "전체" | "게시판" | undefined;

    author: Profile;
    title: string;
    contents: string;

    commentCount: number;
    viewCount: number;

    createdAt: Date;
    updatedAt?: Date;
}

export type ArticleInfo = Omit<Article, "contents" | "author"> & {
    author: string;
};

export type NoticeInfo = {
    type: "전체" | "게시판";
    article: ArticleInfo;
};

export interface Comment {
    id: number;
    author: Profile;
    createdAt: string | Date;
    updatedAt?: string | Date;
    contents: string;
}
