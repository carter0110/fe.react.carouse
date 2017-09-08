import React, { Component } from 'react'
//import photo from './img/1.jpg';

const cx = (obj) => Object.keys(obj).filter(key => obj[key]).join(' ');

class CarouselItem extends Component {
    
    render(){
        let className = cx({
            item: true,
            left: this.props.id < this.props.currentId,
            right: this.props.id > this.props.currentId,
        })

        const path = require(this.props.path + '');
        return(
            <div>
                <img src={path} className={className}/>
            </div>
        );
    }
}

CarouselItem.defaultProps = {
    path: './img/1.jpg',
}

export default CarouselItem;