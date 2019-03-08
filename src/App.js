import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sales from './Sales';


class App extends Component {
  render() {
    var courses = [
      {name: 'Complete Books', price: 30},
      {name: 'Complete Books One', price: 60},
      {name: 'Complete Books Two', price: 40},
      {name: 'Complete Books Three', price: 50}
    ];
    return (
      <div className="App">
        
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to Sales made with React</p>
            <Sales items= {courses}/>
          
          
        
      </div>
    );
  }
}

export default App;
