import API from "./utils";
import { Article as IArticle, Category } from "~/types";

type Articles = {
    articles: IArticle[];
    articlesCount: number;
};

type Article = {
    article: IArticle;
};

function limit(count: number, p: number = 0) {
    return `limit=${count}&offset=${p * count}`;
}

function categoryQuery(category?: string | Category) {
    if (!category) return "";
    const name = typeof category === "string" ? category : category.name;
    return `category=${name}`;
}

export function getArticles(page: number, category?: string | Category) {
    const query = categoryQuery(category);

    return API.get<Articles>(
        `/articles?${query && `${query}&`}${limit(10, page)}`
    ).then(({ data }) => data);
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
