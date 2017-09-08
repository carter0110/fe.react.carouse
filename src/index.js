import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import CarouselBox from './component/CarouselBox';
//import registerServiceWorker from './registerServiceWorker';

var photoList = [
    {id: 1, path: './img/1.jpg'}, 
    {id: 2, path: './img/2.jpg'}, 
    {id: 3, path: './img/3.jpg'}, 
    {id: 4, path: './img/4.jpg'}, 
    {id: 5, path: './img/5.jpg'},
];


ReactDOM.render(<CarouselBox photoList={photoList}/>, document.getElementById('root'));
//registerServiceWorker();
