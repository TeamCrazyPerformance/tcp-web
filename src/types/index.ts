export interface User {
    id: string;
    blog: string;
    email: string;
    username: string;
    avatar: string;
    exist: boolean;
    github: string;
}

export interface Profile {
    id: string;
    avatar: string;
    grade: string;
    schoolRegister: string;
    phone: string;
    birth: string;
    username: string;
    email: string;
    blog: string;
    exist: boolean;
}

export interface Article {
    id: number;

    author: Partial<User>;
    title: string;
    contents: string;

    comment: string;

    commentCount: number;
    viewCount: number;

    createdAt: Date;
    updatedAt?: Date;
}

export interface Comment {
    id: number;
    author: Partial<User>;
    createdAt: string | Date;
    updatedAt?: string | Date;
    contents: string;
}
