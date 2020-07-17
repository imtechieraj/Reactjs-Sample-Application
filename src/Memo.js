import React from 'react';
import NavMenu from './components/header';
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
class Memo extends React.Component {
    //First Call Constructor
    constructor() {
        //1. We can use parent class method properties
        super();
        //2. this.state
        this.state = {
            value: "raj",
        }
        // this.FormHandle = this.FormHandle.bind(this);
    }

    /* The componentDidMount() method runs after the component output has been rendered to the DOM.
        Correct place to call default API */
    componentDidMount() {
        setInterval(() => {
            this.setState({ value: "raj" })
        }, 1000)
    }

    componentDidUpdate() {
        console.log("I am a update")
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //   if (this.state.value === nextState.value) {
    //     return false
    //   } return true
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //   return true
    // }

    FormHandle = (e, data) => {
        e.preventDefault();
        console.log(e)

        // this.setState({
        //   formvalue: {
        //     [e.target.name]: e.target.value
        //   }
        // });
        // console.log(this.state.formvalue)
    }

    // FormHandle() {
    //   console.log("this")
    // }

    render() { // 1. mounting phace 2. Whenever state changes happen It will be trigger. 3. this.setstate
        // when virtual dom is happen render is not trigger
        console.log("this is render")
        return (
            <div><h1>{this.state.value}</h1>
            <NavMenu navMenuData={menuData}></NavMenu>
            </div>
        )
    }
}

export default Memo;


