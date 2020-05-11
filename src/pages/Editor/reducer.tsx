export enum Action {
    SET_CATEGORY = "SET_CATEGORY",
    SET_FORM = "SET_FORM",
    UPDATE_FORM = "UPDATE_FORM",
    SET_ERROR = "SET_ERROR",
}

export type EditorAction =
    | { type: Action.SET_CATEGORY; seletedTab: number }
    | {
          type: Action.SET_FORM;
          form: Form;
      }
    | {
          type: Action.UPDATE_FORM;
          payload: { key: keyof Form; value: Form[keyof Form] };
      }
    | { type: Action.SET_ERROR; errors: Errors };

interface Errors {
    [key: string]: string[];
}

interface Form {
    title: string;
    contents: string;
}
export interface EditorState {
    form: Form;
    category: number;
    errors: Errors;
    loading: boolean;
}

export const initialState: EditorState = {
    form: {
        title: "",
        contents: "",
    },
    category: 0,
    errors: {},
    loading: false,
};

export function EditorReducer(
    state: EditorState,
    action: EditorAction
): EditorState {
    switch (action.type) {
        case Action.SET_CATEGORY: {
            return { ...state, category: action.seletedTab };
        }
        case Action.SET_FORM: {
            const { form } = action;
            return { ...state, form };
        }
        case Action.UPDATE_FORM: {
            const { key, value } = action.payload;
            return { ...state, form: { ...state.form, [key]: value } };
        }

        case Action.SET_ERROR: {
            const { errors } = action;
            return {
                ...state,
                errors,
            };
        }
        default:
            return state;
    }
}
