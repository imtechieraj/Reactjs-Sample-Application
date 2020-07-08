import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavMenu from './components/header';
import Cards from './components/cards';

class App extends React.PureComponent {
  //First Call Constructor
  constructor() {
    //1. We can use parent class method properties
    super();
    //2. this.state
    this.state = {
      navMenuData: {
        "NavbarBrand": "angular-Bootstrap",
        "NavLink": [
          'Home',
          'about',
          'blog',
          'contact',
        ]
      },
      "cards": null,
      "showData": false,
      //3. Bind the function
    }
  }

  /* The componentDidMount() method runs after the component output has been rendered to the DOM.
      Correct place to call default API */
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/photos").then(res => res.json())
      .then(
        (result) => {
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
  }

  componentDidUpdate() {
    console.log("I am a update")
  }
  onClick = () => {
    if (this.state.showData === true) {
      this.setState({ showData: false, cards: null })
    } else {
      this.setState({ showData: true })
    }
  }

  render() { // 1. mounting phace 2. Whenever state changes happen It will be trigger. 3. this.setstate
    // when virtual dom is happen render is not trigger
    return (
      <div>
        {/* <Popup /> */}
        <div className="App">
          <NavMenu navMenuData={this.state.navMenuData} />
          {/* <button onClick={this.onClick}>Click me</button> */}
          {this.state.cards ? <Cards data={this.state.cards} /> : "Loading"}
        </div>
      </div>
    )
  }
}

export default App;


