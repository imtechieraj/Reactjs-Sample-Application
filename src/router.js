import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import NavMenu from "./components/header";
import LifeCycle from "./LifeCycle";
import AjaxCall from "./AjaxCall";
import ComVsPureCom from "./ComVsPureCom";
import App from "./App";
import Memo from "./Memo";

const menuData = {
    "NavbarBrand": "angular-Bootstrap",
    "NavLink": [
        'lifeCycleMethod',
        'AjaxCall',
        'ComVsPureCom',
        'Memo',
        'contact',
    ]
};

export default function HomeRouter() {
    return (
        <Router>
            <div>
                <NavMenu navMenuData={menuData} />
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route exact path="/lifeCycleMethod">
                        <LifeCycle />
                    </Route>
                    <Route exact path="/AjaxCall">
                        <AjaxCall />
                    </Route>
                    <Route exact path="/ComVsPureCom">
                        <ComVsPureCom />
                    </Route>
                    <Route exact path="/Memo">
                        <Memo />
                    </Route>
                    <Route exact path="/">
                        <App />
                    </Route>
                    <Route>
                        <NoMatch />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Blog() {
    return <h2>Blog page</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Contact() {
    return <h2>Contact</h2>;
}

function NoMatch(){
    return <h1>404 error</h1>
}