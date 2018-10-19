import React, { Component } from 'react';
import './App.css';

import Form from './Components/Form/Form.js'
import Hero from './Components/Hero.js'

class App extends Component {
  render() {
    return (
      <div className="App">
         <Hero/>
         <Form/>
      </div>
    );
  }
}

export default App;
