import React, { Component } from 'react';
import '../assets/css/App.css';
import { Route, withRouter} from "react-router-dom";

import Nav from './nav';
import Welcome from './welcome';
import OurMacarons from './our-macarons';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Route expact path="/" component={Welcome} />
        <Route path="/our-macarons" component={OurMacarons} />
      </div>
    );
  }
}

export default App;
