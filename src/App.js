import React from 'react';
import './App.css';

// import NavMenu from './components/header';
import Cards from './components/cards';
import Breadcrumbs from './components/Breadcrumbs';
import { Form, Button } from 'react-bootstrap';
class App extends React.Component {
  //First Call Constructor
  constructor() {
    //1. We can use parent class method properties
    super();
    //2. this.state
    this.state = {
      navMenuData: {
        "NavbarBrand": "angular-Bootstrap",
        "NavLink": [
          'home',
          'about',
          'blog',
          'contact',
        ]
      },
      "cards": null,
      "showData": false,
      "value": 1,
      testArr: ["one", "two", "three"],
      //3. Bind the function
      formvalue: {

      }
    }
    // this.FormHandle = this.FormHandle.bind(this);
  }

  /* The componentDidMount() method runs after the component output has been rendered to the DOM.
      Correct place to call default API */
  componentDidMount() {

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

  onClick = () => {
    this.setState({ value: 1 })
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

  render() { // 1. mounting phace 2. Whenever state changes happen It will be trigger. 3. this.setstate
    // when virtual dom is happen render is not trigger
    console.log("this is render")
    return (
      <div>
        {/* <Popup /> */}
        <div className="App">
          {/* <NavMenu navMenuData={this.state.navMenuData} /> */}
          <button onClick={this.onClick}>Click me</button>
          {this.state.value}
          {this.state.cards ? <Cards data={this.state.cards} /> : <img alt={``} src={`https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif`} />}

        </div>
        <h1>Fragments</h1>
        {this.state.testArr.map((data,i) => {
          return <Breadcrumbs key={i}></Breadcrumbs>
        })}

        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" onChange={(e) => { this.FormHandle(e, "I am email") }} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
    </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
  </Button>
        </Form>
      </div>
    )
  }
}

export default App;


