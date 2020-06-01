import React from "react";
import { Route, RouteProps } from "react-router-dom";
import { Home } from "~/components/pages";
import { useAuth } from "~/contexts/Auth";

const PrivateRoute = (props: RouteProps) => {
    const {
        state: { user },
    } = useAuth();

    return user ? <Route {...props} /> : <Home />;
};

export default PrivateRoute;
