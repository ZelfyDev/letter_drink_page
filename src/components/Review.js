import React, { Component } from 'react';
import Review01 from '../img/201113_Letter_Drink-banner-18.jpg';
import Review02 from '../img/201113_Letter_Drink-banner-19.jpg';
import Review03 from '../img/201113_Letter_Drink-banner-20.jpg';

class Review extends Component {

render() {
    return (
        <div class="">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <div class="text-seller">
            <h1 class="best-seller">Review<div class="border-seller"></div></h1>
        </div>
        <div class="img-review">
            <div class="review01"><img src={Review01} alt="" width="" height=""></img>
                <div class="text-img-review">
                    <p>
                    <span class="fa fa-star star_checked"></span>&nbsp;
                    <span class="fa fa-star star_checked"></span>&nbsp;
                    <span class="fa fa-star star_checked"></span>&nbsp;
                    <span class="fa fa-star star_checked"></span>&nbsp;
                    <span class="fa fa-star star_checked"></span>&nbsp;
                    </p>
                    <p>blanditiis harum, a! Possimus,</p>
                    <p>blanditiis harum, a! Possimus,</p>
                    <p>asperiores, animi.</p>
                </div>
            </div>
            <div class="review02"><img src={Review02} alt="" width="" height=""></img>
                <div class="text-img-review">
                <p>
                    <span class="fa fa-star star_checked"></span>&nbsp;
                    <span class="fa fa-star star_checked"></span>&nbsp;
                    <span class="fa fa-star star_checked"></span>&nbsp;
                    <span class="fa fa-star star_checked"></span>&nbsp;
                    <span class="fa fa-star star_gray"></span>&nbsp;
                    </p>
                    <p>blanditiis harum, a! Possimus,</p>
                    <p>asperiores, animi.</p>
                </div>
            </div>
            <div class="review03"><img src={Review03} alt="" width="" height=""></img>
                <div class="text-img-review">
                <p>
                    <span class="fa fa-star star_checked"></span>&nbsp;
                    <span class="fa fa-star star_checked"></span>&nbsp;
                    <span class="fa fa-star star_checked"></span>&nbsp;
                    <span class="fa fa-star star_checked"></span>&nbsp;
                    <span class="fa fa-star star_checked"></span>&nbsp;
                    </p>
                    <p>blanditiis harum, a! Possimus,</p>
                    <p>blanditiis harum, a! Possimus,</p>
                    <p>asperiores, animi.</p>
                </div>
            </div>
        </div>
        </div>
    )
}
}

export default Review;