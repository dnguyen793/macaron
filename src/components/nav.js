import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component{
    render(){
        return(
            <nav>
                <div className="nav-wrapper">
                    <Link to="/">Welcome</Link>
                    <Link to="/our-macarons">Our Macarons</Link>
                </div>
            </nav>
        );
    }
}

export default Nav;