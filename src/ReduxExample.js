import React from "react";
// import { Form } from "react-bootstrap/lib/Navbar";
import { connect } from "react-redux";
import store, { Increment, Decrement } from "./Redux/store";
import { ajaxcall } from "./Redux/actions";
import Cards from "./components/cards";

class ReduxExample extends React.Component {
    constructor() {
        super();
        this.state = {
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
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/photos").then(res => res.json())
            .then(
                (result) => {
                    console.log(result.slice(0, 10))
                    // this.setState({ cards: result.slice(0, 10) }, () => {
                    //     console.log("Status value updated")
                    //     console.log(this.state)
                    // })
                    this.props.ajaxCallforProps(result.slice(0, 10))
                },
                (error) => {
                    // this.setState({
                    //     isLoaded: true,
                    //     error
                    // });
                }).catch((err) => {

                })
    }
    render() {

        console.log(this.props)
        return (
            <div>
                <h1>Redux Example {this.props.count}</h1>
                <button onClick={this.IncrementFun}>Increment</button>
                <button onClick={this.DecrementFun}>Decrement</button>
                {this.props.cards ? <Cards data={this.props.cards} /> : <img alt="" src="https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" />}

            </div>
        )
    }

}

// 
const mapStateToProps = (state) => {
    console.log(state)
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        ajaxCallforProps: data => dispatch(ajaxcall(data))
        // incrementFunctionProps: () => dispatch(incrementFunction()),
        // decrementFunctionProps: () => dispatch(decrementFunction()),
        // searchFunctionProps: (data) => dispatch(searchFunction(data))
    };
}

// export default ReduxExample;

export default connect(mapStateToProps, mapDispatchToProps)(ReduxExample)