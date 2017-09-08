import React, { Component } from 'react';
import './Carousel.css';
import CarouselItem from './CarouselItem';

class CarouselBox extends Component {
    constructor(props){
        super(props);
        
    }

    state = {
        currentId: 1,
        autoPlay: false,
    }

    startPlay(){
        this.autoPlayFlag = setInterval(function() {
            var newCurrentId = this.state.currentId < 5 ? (this.state.currentId + 1) : 1;
            this.setState({currentId: newCurrentId});
            
        }.bind(this), 2000);
    }

    getIsEnd = (id) => {
        return parseInt(id) === 1 && this.state.currentId === 5;
    }

    componentDidMount() {
        this.startPlay();
    }

    render() {
        return (
             <div className='CarouselBox'>
                 {
                     this.props.photoList.map((item, idx) => {
                         return (
                            <CarouselItem key={item.id} currentId={this.state.currentId} {...item} getIsEnd={this.getIsEnd}/>
                         );
                     })
                 }
             </div>
        );
    }
}

CarouselBox.defaultProps = {
    photoList: [
        {id: 3, path: './img/3.jpg'}, 
        {id: 4, path: './img/4.jpg'}, 
        {id: 5, path: './img/5.jpg'},
    ], 
    currentId: 1,
};

CarouselBox.autoPlayFlag = null;

export default CarouselBox;