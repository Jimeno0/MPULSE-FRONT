import React, { Component } from 'react';
import SearchInput from './search_input';
import Modal from './modal';

class Header extends Component{

  toogleModal(){
    document.getElementsByClassName("modal")[0].style.setProperty('display','block');
  }

  render(){
    return (
      <div>
        <div className="navbar">
          <ul>
            <li><img src="../../assets/icons/logo.svg" alt="mpulse"/></li>
            <li><a onClick={this.toogleModal.bind(this)} >Sign up</a></li>
            <li><a>|</a></li>
            <li><a onClick={this.toogleModal.bind(this)} >Log in</a></li>
          </ul>
        </div>
        <Modal/>
        <img  className="header-bg" src="../../assets/images/header_image.png" alt="header-img"></img>
        <SearchInput />
      </div>
    )
  }
}
export default Header;
