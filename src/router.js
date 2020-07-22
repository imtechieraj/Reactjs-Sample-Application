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
import Fragments from "./Fragments";
import PropTypesCom from "./PropTypes";

const menuData = {
    "NavbarBrand": "angular-Bootstrap",
    "NavLink": [
        'lifeCycleMethod',
        'AjaxCall',
        'ComVsPureCom',
        'Memo',
        'fragments',
        'PropTypes',
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
                    <Route exact path="/fragments">
                        <Fragments />
                    </Route>
                    <Route exact path="/PropTypes">
                        <PropTypesCom />
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

function NoMatch(){
    return <h1>404 error</h1>
}