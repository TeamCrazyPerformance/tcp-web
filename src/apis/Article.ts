import API from "./utils";
import { Article as IArticle, ArticleInfo, Comment } from "~/types";

type ArticleList = {
    articles: ArticleInfo[];
    articlesCount: number;
};

type Article = {
    article: IArticle;
    comments: Comment[];
};

function limit(count: number, p: number = 0) {
    return `limit=${count}&offset=${p * count}`;
}

function categoryQuery(category?: number) {
    if (!category) return "";

    return `category=${category}`;
}

export function getArticles(page: number, category?: number) {
    const query = categoryQuery(category);

    return API.get<ArticleList>(
        `/articles?${query && `${query}&`}${limit(10, page)}`,
    ).then(({ data }) => data);
}

export function getArticle(id: string) {
    return API.get<Article>(`/articles/${id}`).then(res => res.data);
}

export function updateArticle(article: {
    id: number;
    title: string;
    contents: string;
}) {
    return API.patch<Article>(`/articles/${article.id}`, { article }).then(
        res => res.data,
    );
}

export function deleteArticle(id: number | string) {
    return API.delete<null>(`/articles/${id}`);
}

export function createArticle(
    article: { title: string; contents: string },
    category: number,
) {
    return API.post<Article>(`/articles`, { article, category }).then(
        res => res.data,
    );
}
