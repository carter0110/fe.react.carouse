import React, { Component } from 'react';
import './Carousel.css';
import CarouselItem from './CarouselItem';

class CarouselBox extends Component {
    constructor(props){
        super(props);
        
    }

    state = {
        currentId: 1,
    }

    componentDidMount() {
        setTimeout(function() {
            let newCurrentId = this.state.currentId < 5 ? (this.state.currentId + 1) : 1;
            this.setState({currentId: newCurrentId});
        }.bind(this), 2000);
    }

    render() {
        return (
             <div className='CarouselBox'>
                 {
                     this.props.photoList.map((item, idx) => {
                         return (
                            <CarouselItem key={item.id} currentId={this.state.currentId} {...item}/>
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

export default CarouselBox;