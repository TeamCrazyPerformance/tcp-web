import { Article } from "~/types";
import Action from "./actions";

export type ArticleListAction =
    | { type: Action.FETCH_ARTICLIES_LOADING }
    | { type: Action.FETCH_ARTICLIES_SUCCESS; payload: { articles: Article[] } }
    | { type: Action.FETCH_ARTICLIES_ERROR }
    | { type: Action.SET_PAGE; page: number };

export interface ArticleListState {
    articles: Article[];
    loading: boolean;
    error: boolean;
    page: number;
}

export const initialState: ArticleListState = {
    articles: [],
    loading: false,
    error: false,
    page: 0
};

export function ArticleListReducer(
    state: ArticleListState,
    action: ArticleListAction
): ArticleListState {
    switch (action.type) {
        case Action.FETCH_ARTICLIES_LOADING: {
            return { ...state, loading: true };
        }
        case Action.FETCH_ARTICLIES_SUCCESS: {
            const { articles } = action.payload;
            return { ...state, articles };
        }
        case Action.FETCH_ARTICLIES_ERROR: {
            return { ...state, error: true };
        }
        case Action.SET_PAGE: {
            return { ...state, page: action.page };
        }
        default:
            return state;
    }
}
