/* import React from 'react';
import SimpleNavBar from './SimpleNavBar';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Text from './Text';
import Form from './Form';
import User from './User';
import Home from './Home';
import '../styles/app.css'

function App() {
  return (
    <div className="App">
<switch>
      <Router>       
        <SimpleNavBar/>
        <div className="main-container">
        <Route exact path="/" component={Home}/>
          <Route path="/text" component={Text}/>
          <Route path="/form" component={Form}/>
          <Route path="/user" component={User}/>
        </div>
      </Router>
      </switch>
    </div>
  );
} */

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Text from './Text';
import Form from './Form';
import User from './User';
import Home from './Home';
import '../styles/app.css'
  
import SimpleNavBar from './SimpleNavBar';

class App extends Component {
  state = {
    text: {}
  }

  handleText = (text) => {
    this.setState({
      text: text
    })   
  }

  render (){
    return (
      <div className="App">
        <Router>
        <SimpleNavBar/>
          <div className="main-container">
          <Route exact path="/" component={Home}/>
            <Route path="/text" render={(props)=> <Text text={this.state.text} {...props}/>}/>
            <Route path="/form" render={(props) => <Form handleText={this.handleText} {...props}/>}/>
            <Route path="/user" component={User}/>
          </div>
        </Router>
      </div>   
       )
  };
}

export default App;
