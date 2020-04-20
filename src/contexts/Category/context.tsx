import React, { createContext, useReducer, useEffect, useContext } from "react";
import {
    categoryReducer,
    initialState,
    CategoryAction,
    CategoryState,
} from "./reducer";
import * as api from "~/apis/Category";
import Action from "./actions";
import { useQuery } from "~/hooks";

type CategoryContextProps = {
    state: CategoryState;
    dispatch: React.Dispatch<CategoryAction>;
};

const CategoryContext = createContext<CategoryContextProps>({
    state: initialState,
    dispatch: () => initialState,
});

export function CategoryProvider(props: React.PropsWithChildren<{}>) {
    const [state, categoryDispatch] = useReducer(categoryReducer, initialState);
    const { category } = useQuery();

    const fetchCategory = () => {
        categoryDispatch({
            type: Action.FETCH_LOADING,
        });

        api.getCategories()
            .then(categories => {
                return categoryDispatch({
                    type: Action.FETCH_SUCCESS,
                    payload: categories,
                });
            })
            .catch(() =>
                categoryDispatch({
                    type: Action.FETCH_ERROR,
                })
            );
    };

    const setCategory = () => {
        if (!category) return;

        const id = Array.isArray(category)
            ? parseInt(category[0], 10)
            : parseInt(category, 10);

        categoryDispatch({ type: Action.SET_TAB, payload: { id } });
    };

    useEffect(fetchCategory, []);
    useEffect(setCategory, [category]);

    return (
        <CategoryContext.Provider
            value={{
                state,
                dispatch: categoryDispatch,
            }}
            {...props}
        />
    );
}

export default function useCategory() {
    return useContext(CategoryContext);
}
