import React from 'react';
import './App.css';
import Cards from './components/cards';

class AjaxCall extends React.Component {
    //First Call Constructor
    constructor() {
        //1. We can use parent class method properties
        super();
        //2. this.state
        this.state = {
            "cards": null
        }
        // this.FormHandle = this.FormHandle.bind(this);
    }

    /* The componentDidMount() method runs after the component output has been rendered to the DOM.
        Correct place to call default API */
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/photos").then(res => res.json())
            .then(
                (result) => {
                    console.log(result.slice(0, 10))
                    this.setState({ cards: result.slice(0, 10) }, () => {
                        console.log("Status value updated")
                        console.log(this.state)
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }).catch((err) => {

                })
        if (this.state.showData === true) {
            this.setState({ showData: false, cards: null })
        } else {
            this.setState({ showData: true })
        }
    }

   
    render() { 
        // 1. mounting phace 2. Whenever state changes happen It will be trigger. 3. this.setstate
        // when virtual dom is happen render is not trigger
        console.log("this is render")
        return (
            <div>
                <div className="App">
                    {this.state.cards ? <Cards data={this.state.cards} /> : <img alt="" src="https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" />}
                </div>
             
            </div>
        )
    }
}

export default AjaxCall;


