import React, { useReducer, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Template from "./Template";
import { FORM_KEYS } from "~/components/UI/blocks/Editor";
import { EditorReducer, initialState, Action } from "./reducer";
import * as ArticleApi from "~/apis/Article";
import { CategoryProvider, useCategory } from "~/contexts/Category";

const View = () => {
    const [state, dispatch] = useReducer(EditorReducer, initialState);
    const {
        state: { categories },
    } = useCategory();

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
        <Template
            categories={categories}
            initialValue={state.form}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleCategoryChange={handleCategoryChange}
        />
    );
};

export default () => (
    <CategoryProvider>
        <View />
    </CategoryProvider>
);
