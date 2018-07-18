import React from 'react';
import '../assets/css/macarons.css';
import macaronData from './macaron-data';
import MacaronImg from './macaron-item';

export default props => {
    console.log('macaron props', props);
    const images = macaronData.map((img, index) => {
        return <MacaronImg key={index} about={img}/>
    });

    const {item} = props;
    console.log('images', images);

    return(
        <div className="macaron-container">
            {images[item]}
        </div>
    )
}