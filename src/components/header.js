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
        <img
          className="header-bg"
          src="../../assets/images/header_image.png"
          alt="header-img"
        />
        <SearchInput />
      </div>
    );
  }
}
export default Header;
