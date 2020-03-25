import Action from "./action";

interface SuccessProps {
    status: number;
    data: any;
}

const { API_LOADING, API_SUCCESS, API_FAIL } = Action;

export function createloadAction() {
    return { type: API_LOADING };
}

export function createSuccessAction({ status, data }: SuccessProps) {
    return { type: API_SUCCESS, payload: { status, data } };
}

export function createFailAction(error: any) {
    return { type: API_FAIL, payload: error };
}
