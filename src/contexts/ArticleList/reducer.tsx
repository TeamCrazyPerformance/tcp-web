import { ArticleInfo, NoticeInfo } from "~/types";
import Action from "./actions";

export type ArticleListAction =
    | { type: Action.FETCH_ARTICLIES_LOADING }
    | {
          type: Action.FETCH_ARTICLIES_SUCCESS;
          payload: {
              articles: ArticleInfo[];
              articlesCount: number;
              notices: NoticeInfo[];
          };
      }
    | { type: Action.FETCH_ARTICLIES_ERROR }
    | { type: Action.SET_PAGE; page: number };

export interface ArticleListState {
    notices: NoticeInfo[];
    articles: ArticleInfo[];
    articlesCount: number;
    loading: boolean;
    error: boolean;
    page: number;
}

export const initialState: ArticleListState = {
    notices: [],
    articles: [],
    articlesCount: 0,
    loading: false,
    error: false,
    page: 0,
};

export function ArticleListReducer(
    state: ArticleListState,
    action: ArticleListAction,
): ArticleListState {
    switch (action.type) {
        case Action.FETCH_ARTICLIES_LOADING: {
            return { ...state, loading: true };
        }
        case Action.FETCH_ARTICLIES_SUCCESS: {
            const { articles, articlesCount, notices } = action.payload;
            return {
                ...state,
                articles,
                articlesCount,
                notices,
                loading: false,
            };
        }
        case Action.FETCH_ARTICLIES_ERROR: {
            return { ...state, error: true, loading: false };
        }
        case Action.SET_PAGE: {
            return { ...state, page: action.page };
        }
        default:
            return state;
    }
}
