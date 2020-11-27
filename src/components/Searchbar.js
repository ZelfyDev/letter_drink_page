import React, { Component } from 'react';
import cart from '../img/shopping-cart.png';

class Searchbar extends Component {

render() {
    return (
        <div class="logo">
            <a class="letter" href="#">LETTER</a>
            <a class="drink" href="#">DRINK</a>
            <div class="search">
            <input class="search-icon" type="text" placeholder="Search entire store here..."></input><img src={cart} class="cart"></img>
            </div>
        </div>
    )
    }
}

export default Searchbar;