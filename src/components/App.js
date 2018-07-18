import React, { Component } from 'react';
import '../assets/css/App.css';
import { Route } from "react-router-dom";

import Nav from './nav';
import Welcome from './welcome';
import Shop from './shop';
import OurMacarons from './our-macarons';
import Contact from './contact';
import Box from './box';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Nav />
        <Route exact path="/" component={Shop} />
        <Route path="/our-macarons" component={OurMacarons} />
        <Route path="/contact" component={Contact} />
        <Route path="/box" component={Box} />
      </div>
    );
  }
}

export default App;
