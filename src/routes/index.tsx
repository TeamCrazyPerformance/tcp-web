import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import {
    Home,
    SignUp,
    ArticleList,
    Article,
    Editor,
    MemberList,
    Admin,
    MyPage,
    NotFound,
    Redirect,
} from "~/pages";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";

export default () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={SignUp} />
            <Route path="/redirect" component={Redirect} />
            <Route path="/articles" component={ArticleList} />
            <PrivateRoute path="/article/:id" component={Article} />
            <PrivateRoute path="/editor/:id" component={Editor} />
            <Route path="/members" component={MemberList} />
            <AdminRoute path="/admin" component={Admin}/>
            <PrivateRoute path="/settings" component={MyPage} />
            <Route component={NotFound} />
        </Switch>
    </Router>
);
