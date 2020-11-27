import React, { Component } from 'react';

class Navbar extends Component {
    

render() {
    return (
        <nav class="navbar">
            <ul>
                <li><a class="" href="#">What's New</a>   
                </li>
                <li><a class="" href="#">Woman&nbsp;&nbsp;<i class="arrow-down"/></a>
                    <ul>
                        <li><a class="" href="#">News #1</a></li>
                        <li><a class="" href="#">News #2</a></li>
                    </ul> 
                </li>
                <li><a class="" href="#">Men&nbsp;&nbsp;<i class="arrow-down"/></a>
                    <ul>
                        <li><a class="" href="#">News #1</a></li>
                        <li><a class="" href="#">News #2</a></li>
                    </ul> 
                </li>
                <li><a class="" href="#">Gear&nbsp;&nbsp;<i class="arrow-down"/></a>
                    <ul>
                        <li><a class="" href="#">News #1</a></li>
                        <li><a class="" href="#">News #2</a></li>
                    </ul> 
                </li>
                <li><a class="" href="#">Trainning&nbsp;&nbsp;<i class="arrow-down"/></a>
                    <ul>
                        <li><a class="" href="#">News #1</a></li>
                        <li><a class="" href="#">News #2</a></li>
                    </ul> 
                </li>
                <li><a class="" href="#">Sale</a></li>
            </ul>
        </nav>
        
    )
    }
}

export default Navbar;