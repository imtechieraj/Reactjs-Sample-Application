import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import NavMenu from "./components/header";
import App from "./App";

const menuData = {
    "NavbarBrand": "angular-Bootstrap",
    "NavLink": [
        'home',
        'about',
        'blog',
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
                    <Route exact path="/home">
                        <App />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/blog">
                        <Blog />
                    </Route>
                    <Route exact path="/contact">
                        <Contact />
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