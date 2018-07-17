import React, { Component } from 'react';
import '../assets/css/contact.css';
import contactImg from '../assets/images/contact-image.png';
import macImg from "../assets/images/macarons-image.png";

class Contact extends Component{
    render(){
        return(
            <div className="container">
                <div className="image">
                    <img src={contactImg} />
                </div>

                <div className="contact-body">
                    <div className="visit-us">
                        <p className="header">Visit us!</p>
                        <p className="para1">
                            Monday - Friday | 10am - 9pm
                        </p>
                        <p className="para1">
                            Saturday | 10am - 8pm
                        </p>
                        <p className="para1">
                            Sunday | 11am - 7pm
                        </p>
                        <p className="para1 margin">
                            Closed Thanksgiving Day, Christmas Day and Easter Day
                        </p>
                        <p className="para2 addressMargin">
                            1625 Post St
                        </p>
                        <p className="para2">
                            San Francisco, CA 94115
                        </p>
                        <p className="para">
                            949.800-3111
                        </p>
                        <p className="para">
                            <a href="mailto:orders@mboutique.com?Subject=New%20order" target="_top">orders@mboutique.com</a>
                        </p>
                        <p className="para">
                            Send your questions, comments and flavor suggestions or place an order!
                        </p>

                    </div>

                    <div className="contact-form">
                        <p className="header">Contact Form</p>

                        <div className="input-field">
                            <input id="name" type="text" className="validate" placeholder="Name" />
                        </div>
                        <div className="input-field">
                            <input id="email" type="email" className="validate" placeholder="Email" />
                        </div>
                    
                        <div className="input-field">
                            <input id="phone" type="number" className="validate" placeholder="Phone" />
                        </div>
                    
                        <div className="input-field">
                            <input id="subject" type="text" className="validate" placeholder="Subject" />
                        </div>
                
                        <div className="input-field">
                            <input id="message" type="text" className="validate" placeholder="Message" />
                        </div>

                        <button className="btn">SEND</button>


                    </div>

                    <div className="mac-img">
                        <img src={macImg} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;