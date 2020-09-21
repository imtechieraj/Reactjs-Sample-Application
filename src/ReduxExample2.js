import React from "react";
import { connect } from "react-redux";
// import store, { Increment, Decrement } from "./Redux/store";

const ReduxExample2 = (props) => {
return (
    <div>
        <h1>Redux example 2 {props.count}</h1>
    </div>
)
}

// 
const mapStateToProps = (state) => {
    return state
}

// export default ReduxExample;

export default connect(mapStateToProps, null)(ReduxExample2)