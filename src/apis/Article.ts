import API from "./utils";
import { Article as IArticle } from "~/types";

type Articles = {
    articles: IArticle[];
    articlesCount: number;
};

type Article = {
    article: IArticle;
};

type Category = {
    category: string[];
};

function limit(count: number, p: number = 0) {
    return `limit=${count}&offset=${p * count}`;
}

export function getCategories() {
    return API.get<Category>(`/categories`);
}

export function getArticles(page: number) {
    return API.get<Articles>(`/articles?${limit(10, page)}`);
}

export function getArticle(id: number) {
    return API.get<Article>(`/articles/${id}`);
}

export function updateArticle(article: {
    id: number;
    title: string;
    contents: string;
}) {
    return API.patch<Article>(`/articles/${article.id}`, { article });
}

export function deleteArticle(id: number) {
    return API.delete<null>(`/articles/${id}`);
}

export function createArticle(article: { title: string; contents: string }) {
    return API.post<Article>(`/articles`, { article });
}
