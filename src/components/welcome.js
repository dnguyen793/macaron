import React from 'react';
import '../assets/css/welcome.css';

function Welcome( props ){

    return(
        <div className="welcomContainer">
            <div className="nav-bar">
                <ul>
                    <li>Shop</li>
                    <li>About Us</li>
                    <li>Your Box<i className="fas fa-shopping-cart"></i></li>
                </ul>
            </div>

            <div className="welcome-message">
                <h1>Welcome to our Macaron page!</h1>
            </div>

        </div>
    )
}

export default Welcome;