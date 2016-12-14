import React, { Component } from 'react';
import SearchInput from './search_input';
import NavBar from './nav_bar';

class Header extends Component {

  toogleModal() {
    document.getElementsByClassName('modal')[0].style.setProperty('display', 'block');
  }

  render() {
    return (
      <div className="header-container">
        <NavBar />

        <div className="header-bg" >
          <video loop autoPlay muted poster="../../assets/images/screenshot.jpg">
            <source src="../../assets/video/mpulse_header.webm" type="video/webm" />
            <source src="../../assets/video/mpulse_header.mp4" type="video/mp4" />
          </video>
        </div>
        {/* <img
          className="header-bg"
          src="../../assets/images/screenshot.jpg"
          alt="header-img"
        /> */}
        <SearchInput />
      </div>
    );
  }
}
export default Header;
