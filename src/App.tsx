import React from "react";
import { useAuth, AuthProvider } from "./contexts/Auth";
import Router from "~/routes";
import "./index.scss";

const App = () => {
    const {
        state: { user, isAuthenticated },
    } = useAuth();

    if (!user && isAuthenticated) {
        return null;
    }

    return (
        <AuthProvider>
            <Router />
        </AuthProvider>
    );
};

export default App;
