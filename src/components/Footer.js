import React, { Component } from 'react';

class Footer extends Component {
    
render() {
    return (
        <div class="">
        <nav class="footer">
            <ul class="footer-colunm1">
                <li><a class="" href="#">About us</a></li>
                <li><a class="" href="#">Customer Service</a></li>
            </ul>
            <ul class="footer-colunm2">
                <li><a class="" href="#">Search Terms</a></li>
                <li><a class="" href="#">Privacy and Cookie Policy</a></li>
                <li><a class="" href="#">Advanced Search</a></li>
                <li><a class="" href="#">Orders and Returns</a></li>
                <li><a class="" href="#">Contact Us</a></li>
            </ul>
            <div class="send-email">
                <input class="email-icon" type="text" placeholder="      Enter your email address"></input><button>&nbsp;&nbsp;Subscribe&nbsp;&nbsp;</button> 
            </div>
        </nav>
        <div class="credit">Copyright © 2020 Avery and Co., Ltd. All rights reserved.</div>   
        </div>
    )
    }
}

export default Footer;
