import React from "react";
import { Route, RouteProps } from "react-router-dom";
import { Home } from "~/components/pages";
import { useAuth } from "~/contexts/Auth";

const AdminRoute = (props: RouteProps) => {
    const {
        state: { user },
    } = useAuth();

    return user?.isAdmin ? <Route {...props} /> : <Home />;
};

export default AdminRoute;
