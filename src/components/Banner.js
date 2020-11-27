import React, { Component } from 'react';
import banner from '../img/banner.jpg';

class Banner extends Component {

render() {
    const mystyle = {
        padding: "20px 0px",
        textAlign: "center",
        cursor:"pointer"
      };
    return (
        <center><img src={banner} alt="" width="1080" height="" style={mystyle} /></center>
    )
    }
}

export default Banner;