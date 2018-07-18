import React, {Component} from 'react';
import '../assets/css/shop.css';
import Macarons from './macarons';


class Shop extends Component{
    constructor(props){
        super(props);
        this.state = {
            counter: 0
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event) =>{

        if(this.state.counter === 15){
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

    render(){
        return(
            <div className="shop-container">
                <Macarons item={this.state.counter}/>
            </div>
        )
    }
}

export default Shop;