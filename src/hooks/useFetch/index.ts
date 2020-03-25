import { useState, useEffect, useReducer, Reducer } from "react";
import axios from "axios";
import { DEFAULT_REQUEST_OPTION } from "../../config";
import APIReducer, { StateProps, ActionProps } from "./reducer";
import {
    createloadAction,
    createSuccessAction,
    createFailAction
} from "./actionCreator";

enum Method {
    POST = "post",
    GET = "get",
    PATCH = "patch",
    PUT = "put",
    DELETE = "delete"
}

interface FetchProps<T> {
    method?: Method;
    url?: string;
    body?: T;
}

const API = axios.create(DEFAULT_REQUEST_OPTION);

export default function useFetch<T>({
    method = Method.GET,
    url,
    body
}: FetchProps<T>) {
    const [request, setRequest] = useState({ method, url, body });
    const [state, dispatchFetchState] = useReducer<
        Reducer<StateProps<T>, ActionProps<T>>
    >(APIReducer, {
        data: undefined,
        loading: false,
        error: false,
        status: false
    });

    const doFetch = () => {
        const { method, url, body } = request;
        dispatchFetchState(createloadAction());
        API({
            method,
            url,
            data: body
        })
            .then(res => dispatchFetchState(createSuccessAction(res)))
            .catch(error => dispatchFetchState(createFailAction(error)));
    };

    useEffect(() => {
        if (!request.url) return;
        doFetch();
    }, [request]);

    return [state, setRequest];
}
