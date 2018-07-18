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
                            <Link to="/">Shop</Link>
                        </li>
                        <li>
                            <Link to="/our-macarons">Our Macarons</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/box">Box <i className="fas fa-box-open"></i></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Nav;