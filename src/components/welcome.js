import React from 'react';
import '../assets/css/welcome.css';

function Welcome( props ){

    return(
        <div className="welcomContainer">
            <div>
                <h1>Welcome to our Macaron page!</h1>
            </div>

            <div>
                <ul>
                    <li>Shop</li>
                    <li>About Us</li>
                    <li>Your Box</li>
                </ul>
            </div>

        </div>
    )
}

export default Welcome;