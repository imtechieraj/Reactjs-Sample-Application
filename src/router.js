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
import ErrorBoundary from "./ErrorBoundary";
import PropTypesCom from "./PropTypes";
import ReactRef from "./ReactRef";
import HocExample from "./HocExample";
import ChildToParent from "./childToParent";
import ReduxExample from "./ReduxExample";
import ReduxExample2 from "./ReduxExample2";
// import hooksExample from "./components/hooksExample";

const menuData = {
    "NavbarBrand": "React-Bootstrap",
    "NavLink": [
        'lifeCycleMethod',
        'AjaxCall',
        'ComVsPureCom',
        'Memo',
        'fragments',
        'PropTypes',
        'ReactRef',
        'ErrorBoundary',
        'Hoc',
        'childToParent',
        'Redux',
        'Redux2',
        'hooks'
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
                    <Route exact path="/ReactRef">
                        <ReactRef />
                    </Route>
                    <Route exact path="/ErrorBoundary">
                        <ErrorBoundary />
                    </Route>
                    <Route exact path="/Hoc">
                        <HocExample />
                    </Route>
                    <Route exact path="/childToParent">
                        <ChildToParent />
                    </Route>
                    <Route exact path="/Redux">
                        <ReduxExample />
                    </Route>
                    <Route exact path="/Redux2">
                        <ReduxExample2 />
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

function NoMatch() {
    return <h1>404 error</h1>
}