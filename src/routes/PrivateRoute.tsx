import React from "react";
import { Route, RouteProps } from "react-router-dom";
import { Home } from "~/pages";
import { useAuth } from "~/contexts/Auth";

//TODO 관리자 Auth 추가
const PrivateRoute = (props: RouteProps) => {
    const {
        state: { user },
    } = useAuth();

    return user ? <Route {...props} /> : <Home />;
};

export default PrivateRoute;
