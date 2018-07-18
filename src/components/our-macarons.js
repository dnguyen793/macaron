import React from 'react';
import "../assets/css/our-macaron.css";
import macaronBanner from '../assets/images/our-macarons-image.png';
import macaronBg from "../assets/images/our-macarons-background.png";

function ourMacaron(props){
    return(
        <div className="container">
            <div className="image">
                <img src={macaronBanner} alt="macaronBanner" />
            </div>

            <div className="intro">
                <p className="header">Our macarons are freshly made by hand </p>
                <p className="para">
                    The vivid hues of our unique macarons reflect the natural flavors and essences that infuse the ganache filling of these delicious almond cookies - each has its own personality, and all of them are made to savour for their delicacy and unique character.
                </p>
            </div>

            <div className="flavorContainer row body valign-wrapper">
                <div className="list">
                    <ul>
                        <li>Classics</li>
                        <li>caribbean chocolate</li>
                        <li>coconut</li>
                        <li>colombian coffee</li>
                        <li>green tea</li>
                        <li>lemon</li>
                        <li>madagascar vanilla</li>
                        <li>passion fruit</li>
                        <li>rose</li>
                        <li>raspberry</li>
                        <li>tiffany blue</li>
                        <li>sicilian pistachio</li>
                        <li>sweet wedding almond</li>
                        <li>violet cassis</li>
                        <li>salted caramel</li>
                    </ul>
                </div>

                <div className="col s8 valign-wrapper ourMacaronsBg">
                    <img src={macaronBg} alt="macaronBackground"/>
                </div>
            </div>
            <div className="conclusion">
                <p className="para">
                    After purchase we recommend keeping macarons in the refrigerator; let them come to room temperature before serving - about 10 minutes. For best degustation, our macarons should be consumed within 3 days.
                </p>
            </div>
        </div>
    );
}

export default ourMacaron;
