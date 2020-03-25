import Action from "./action";

export interface StateProps<T> {
    loading: boolean;
    error: boolean;
    data?: T | undefined;
    status?: number | boolean;
}

export interface ActionProps<T> {
    type: Action;
    payload?: PayloadProps<T> | undefined;
}

interface PayloadProps<T> {
    data?: T;
    status?: number;
}

type Reducer<T> = (
    state: StateProps<T>,
    payload?: PayloadProps<T>
) => StateProps<T>;

function APIReducer<T>(
    state: StateProps<T>,
    { type, payload }: ActionProps<T>
): StateProps<T> {
    const { API_LOADING, API_SUCCESS, API_FAIL } = Action;

    const reducers: { [key: string]: Reducer<T> } = {
        [API_LOADING]: (): StateProps<T> => ({
            data: undefined,
            loading: true,
            error: false,
            status: false
        }),
        [API_SUCCESS]: (
            state: StateProps<T>,
            payload?: PayloadProps<T>
        ): StateProps<T> => ({
            ...state,
            data: payload?.data,
            status: payload?.status,
            loading: false
        }),
        [API_FAIL]: (state: StateProps<T>): StateProps<T> => ({
            ...state,
            loading: false,
            error: true
        })
    };

    const reducer = reducers[type];
    return reducer ? reducer(state, payload) : state;
}

export default APIReducer;
