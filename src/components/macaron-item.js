import React from 'react';
import '../assets/css/macarons.css';

export default props => {
    // console.log('images props', props);

    const {src} = props.about;
    const {name} = props.about;
    const {description} = props.about;

    return (
        <div>
            <div >
                <p className="item-name">{name}</p>
                <p className="item-price">$3.00</p>
                <button className="add-to-box">Add to Box</button>
            </div>

            {/* <p className="item-description">{description}</p> */}
            <div className="item-container">
                <img src={src} alt={name}/>
            </div>
        </div>
    )
}