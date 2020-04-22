import API from "./utils";
import { Comment as IComment } from "~/types";

type Comment = {
    comment: IComment;
};

export function createComment(
    articleId: string | number,
    category: { category: number },
    comment: { contents: string }
) {
    return API.post<Comment>(`/articles/${articleId}/comments`, {
        comment,
        category,
    }).then(res => res.data);
}

export function updateComment(
    articleId: string | number,
    comment: {
        id: number;
        contents: string;
    }
) {
    return API.patch<Comment>(`/articles/${articleId}/comments/${comment.id}`, {
        comment,
    }).then(({ config: { data } }) => {
        return JSON.parse(data);
    });
}

export function deleteComment(articleId: string | number, commentId: number) {
    return API.delete<null>(`/articles/${articleId}/comments/${commentId}`);
}
