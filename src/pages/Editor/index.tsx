import React, { useReducer, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { FORM_KEYS } from "@organisms/Editor";
import { EditorReducer, initialState, Action } from "./reducer";
import View from "./View";
import * as ArticleApi from "~/apis/Article";
import { CategoryProvider } from "~/contexts/Category";

const Editor = () => {
    const [state, dispatch] = useReducer(EditorReducer, initialState);
    const { id } = useParams();
    const history = useHistory();

    const fetchArticle = () => {
        if (id === "new" || !id) return;

        ArticleApi.getArticle(id)
            .then(payload => {
                const { title, contents } = payload.article;
                dispatch({
                    type: Action.SET_FORM,
                    form: { title, contents },
                });
            })
            .catch(err => console.log(err));
    };

    useEffect(fetchArticle, [id]);

    const handleChange = (payload: { key: FORM_KEYS; value: string }) => {
        dispatch({
            type: Action.UPDATE_FORM,
            payload,
        });
    };

    const handleCategoryChange = (seletedTab: number) => {
        dispatch({
            type: Action.SET_CATEGORY,
            seletedTab,
        });
    };

    const handleSubmit = async () => {
        try {
            const { form: article, category } = state;
            let payload;

            if (id !== "new" && id) {
                payload = await ArticleApi.updateArticle({
                    id: parseInt(id),
                    ...article,
                });
            } else {
                payload = await ArticleApi.createArticle(article, category);
            }

            history.push(`/article/${payload.article.id}`);
        } catch (error) {
            console.log(error);
            if (error.status === 422) {
                dispatch({ type: Action.SET_ERROR, errors: error.data.errors });
            }
        }
    };

    return (
        <CategoryProvider>
            <View
                initialValue={state.form}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                handleCategoryChange={handleCategoryChange}
            />
        </CategoryProvider>
    );
};

export default Editor;
