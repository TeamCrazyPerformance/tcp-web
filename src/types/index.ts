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
    username: string;
    avatar: string;
}

export interface Article {
    id: number;

    author: Profile;
    title: string;
    contents: string;

    commentCount: number;
    viewCount: number;

    createdAt: Date;
    updatedAt?: Date;
}

export interface Comment {
    id: number;
    author: Profile;
    createdAt: string | Date;
    updatedAt?: string | Date;
    contents: string;
}
