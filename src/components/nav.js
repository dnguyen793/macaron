import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/nav.css';

class Nav extends Component{
    render(){
        return(
            <nav>
                <div className="nav-container">
                    <ul>
                        <li>
                            <Link to="/" >Welcome</Link>
                        </li>
                        <li>
                            <Link to="/our-macarons">Our Macarons</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Nav;