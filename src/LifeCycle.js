import React from 'react';

class LifeCycle extends React.Component {
    //First Call Constructor
    constructor() {
        //1. We can use parent class method properties
        super();
        //2. this.state
        this.state = {
        }
        //3. Bind the function
        // this.FormHandle = this.FormHandle.bind(this);
    }

    componentDidMount() {
        /* The componentDidMount() method runs after the component output has been rendered to the DOM.
            Correct place to call default API */
        console.log("I am component Did mount")
    }

    componentDidUpdate() {
        console.log("I am a update");

    }
    componentWillUnmount() {
        console.log("When component will remove will trigger")
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //   if (this.state.value === nextState.value) {
    //     return false
    //   } return true
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //   return true
    // }


    render() {
        // 1. mounting phace 2. Whenever state changes happen It will be trigger. 3. this.setstate
        // when virtual dom is happen render is not trigger (Pure component)
        console.log("this is render")
        return (
            <div>
                <h1>LifeCycleMethod</h1>
            </div>
        )
    }
}

export default LifeCycle;


