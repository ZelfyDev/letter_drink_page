import React, { Component } from 'react';
import logo from '../img/logo-letterdrink.png';
import christmas from '../img/christmas.jpg';
import congrats from '../img/congrats.jpg';
import newyear from '../img/new-year.jpg';
import quote from '../img/quote.jpg';
import birthday from '../img/birthday.jpg';



class Content extends Component {

render() {
    return (
        <div class="content">
            <div class="logo-content">
            <center><img src={logo} alt="" width="230px" height="55px"></img></center>
            </div>
        <div class="text-content">
            <h1>Let you share good vibes the way you want.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dolores sit natus modi aut aliquid numquam fuga, suscipit impedit pariatur</p>
            <p>blanditiis harum, a! Possimus, asperiores, animi.</p>
        </div>
        <div class="img-content">
            <div class="christmas"><img src={christmas} alt="" width="341" height="569"></img></div>
            <div class="congrats"><img src={congrats} alt="" width="728" height=""></img></div>
            <div class="newyear"><img src={newyear} alt="" width="360" height=""></img></div>
            <div class="quote"><img src={quote} alt="" width="358" height=""></img></div>
            <div class="birthday"><img src={birthday} alt="" width="712" height="262"></img></div>
        </div> 
        </div>
    )
}
}

export default Content;