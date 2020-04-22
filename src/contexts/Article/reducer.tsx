import { Article, Comment } from "~/types";
import Action from "./actions";

export type ArticleAction =
    | { type: Action.FETCH_ARTICLIE_LOADING }
    | {
          type: Action.FETCH_ARTICLIE_SUCCESS;
          payload: { article: Article; comments: Comment[] };
      }
    | { type: Action.FETCH_ARTICLIE_ERROR }
    | { type: Action.ADD_COMMENT; payload: { comment: Comment } }
    | { type: Action.MODIFY_COMMENT; payload: { comment: Comment } }
    | { type: Action.DELETE_COMMENT; commentId: number };

export interface ArticleState {
    article: Article | null;
    comments: Comment[];
    loading: boolean;
    error: boolean;
}

export const initialState: ArticleState = {
    article: null,
    comments: [],
    loading: false,
    error: false,
};

export function ArticleListReducer(
    state: ArticleState,
    action: ArticleAction
): ArticleState {
    switch (action.type) {
        case Action.FETCH_ARTICLIE_LOADING: {
            return { ...state, loading: true };
        }
        case Action.FETCH_ARTICLIE_SUCCESS: {
            const { article, comments } = action.payload;
            return { ...state, article, comments, loading: false };
        }
        case Action.FETCH_ARTICLIE_ERROR: {
            return { ...state, error: true, loading: false };
        }
        case Action.ADD_COMMENT:
        case Action.MODIFY_COMMENT: {
            const { comment } = action.payload;
            return { ...state, comments: [...state.comments, comment] };
        }
        case Action.DELETE_COMMENT: {
            const { commentId } = action;
            const { comments } = state;
            return {
                ...state,
                comments: comments.filter(({ id }) => id !== commentId),
            };
        }
        default:
            return state;
    }
}
