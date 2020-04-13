import React, { createContext, useReducer, useEffect, useContext } from "react";
import {
    categoryReducer,
    initialState,
    CategoryAction,
    CategoryState
} from "./reducer";
import * as api from "~/apis/Category";
import Action from "./actions";

type CategoryContextProps = {
    state: CategoryState;
    dispatch: React.Dispatch<CategoryAction>;
};

const CategoryContext = createContext<CategoryContextProps>({
    state: initialState,
    dispatch: () => initialState
});

export function CategoryProvider(props: React.PropsWithChildren<{}>) {
    const [state, categoryDispatch] = useReducer(categoryReducer, initialState);

    const fetchCategory = () => {
        categoryDispatch({
            type: Action.FETCH_LOADING
        });

        api.getCategories()
            .then(categories =>
                categoryDispatch({
                    type: Action.FETCH_SUCCESS,
                    payload: categories
                })
            )
            .catch(() =>
                categoryDispatch({
                    type: Action.FETCH_ERROR
                })
            );
    };

    useEffect(fetchCategory, []);

    return (
        <CategoryContext.Provider
            value={{
                state,
                dispatch: categoryDispatch
            }}
            {...props}
        />
    );
}

export default function useCategory() {
    return useContext(CategoryContext);
}
