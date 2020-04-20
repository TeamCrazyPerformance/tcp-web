import { Category } from "~/types";
import Action from "./actions";

const DEFAULT_SELECTED_ID = 1;

export type CategoryAction =
    | { type: Action.FETCH_LOADING }
    | { type: Action.FETCH_SUCCESS; payload: { categories: Category[] } }
    | { type: Action.FETCH_ERROR }
    | { type: Action.SET_TAB; payload: { id: number } };

export interface CategoryState {
    categories: Array<Category>;
    loading: boolean;
    error: boolean;
    selectedTab: number;
}

export const initialState: CategoryState = {
    categories: [],
    loading: false,
    error: false,
    selectedTab: DEFAULT_SELECTED_ID,
};

export function categoryReducer(
    state: CategoryState,
    action: CategoryAction
): CategoryState {
    switch (action.type) {
        case Action.FETCH_LOADING: {
            return { ...state, loading: true };
        }
        case Action.FETCH_SUCCESS: {
            const { categories } = action.payload;
            return { ...state, categories };
        }
        case Action.FETCH_ERROR: {
            return { ...state, error: true };
        }
        case Action.SET_TAB: {
            const { id } = action.payload;
            return { ...state, selectedTab: id };
        }
        default:
            return state;
    }
}
