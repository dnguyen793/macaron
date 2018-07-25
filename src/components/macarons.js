import React, {Component} from 'react';
import '../assets/css/macarons.css';
import macaronData from './macaron-data';

class Macarons extends Component{
    constructor(props){
        super(props);
        this.state = {
            counter: 0
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount(){

        this.macaronContainer.onscroll = e => {
            console.log('SCROLL EVENT:', e);
            this.handleScroll();
        }
    }

    // componentWillUnmount(){
    //     window.removeEventListener('scroll', this.handleScroll);
    // }

    handleScroll = (event) =>{

        if(this.state.counter === 14){
            this.setState({
                counter: 0
            })
        }
        else{
            this.setState({
                counter: this.state.counter + 1
            })
        }
    }

    renderMacaron(){

        // const {item} = this.state.counter;
        // console.log("this is the item num", item);
        const {src, name} = macaronData[this.state.counter];

        return(
            <div className="item-container">
                <div className="item-info">
                    <p className="item-name">{name}</p>
                    <p className="item-price">$3.00</p>
                    <button className="add-to-box">Add to Box</button>
                </div>

                <div className="item-img">
                    <img src={src} alt={name}/>
                </div>
            </div>
        )
    }

    render(){
    
        return(
            <div className="macaron-container" ref={e => this.macaronContainer = e}>
                {this.renderMacaron()}
            </div>
        )
    }

}

export default Macarons;