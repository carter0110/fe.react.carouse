import React, { Component } from 'react'
//import photo from './img/1.jpg';

const cx = (obj) => Object.keys(obj).filter(key => obj[key]).join(' ');

class CarouselItem extends Component {
    
    render(){
        const isEnd = this.props.getIsEnd(this.props.id);
//console.log(this.props.id + ' ' + isEnd);

        let className = cx({
            item: true,
            left: this.props.id < this.props.currentId && !isEnd,
            right: this.props.id > this.props.currentId || isEnd,
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