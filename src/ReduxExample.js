import React from "react";
import store, { Increment, Decrement } from "./Redux/store";

class ReduxExample extends React.Component {
    constructor() {
        super();
        this.state={
        }
    }
    IncrementFun = () => {
        console.log("in");
        store.dispatch({ type: Increment });
        console.log(store.getState())
    }
    DecrementFun = () => {
        console.log("de");

        store.dispatch({ type: Decrement })
        console.log(store.getState())

    }
    render() {
        return (
            <div>
                <h1>Redux Example</h1>
                <button onClick={this.IncrementFun}>Increment</button>
                <button onClick={this.DecrementFun}>Decrement</button>
            </div>
        )
    }
}

export default ReduxExample;