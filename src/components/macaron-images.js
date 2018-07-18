import React from 'react';
import '../assets/css/macarons.css';

export default props => {
    // console.log('images props', props);

    const {src} = props.about;
    const {name} = props.about;
    const {description} = props.about;

    return (
        <div>
            <img src={src} alt={name}/>
            <p>{name}</p>
            <p>{description}</p>

        </div>
    )
}