import React, { Component } from 'react';
import '../assets/css/App.css';
import { Route, withRouter} from "react-router-dom";

import Nav from './nav';
import Welcome from './welcome';
import OurMacarons from './our-macarons';
import Contact from './contact';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Route exact path="/" component={Welcome} />
        <Route path="/our-macarons" component={OurMacarons} />
        <Route path="/contact" component={Contact} />
      </div>
    );
  }
}

export default App;
