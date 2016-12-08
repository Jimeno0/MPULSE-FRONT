import React, { Component } from 'react';

import SearchInput from './search_input';
import Modal from './modal';
import NavBar from './nav_bar';

class Header extends Component{

  toogleModal(){
    document.getElementsByClassName("modal")[0].style.setProperty('display','block');
  }

  render(){
    return (
      <div>
        <NavBar />
        <Modal/>
        <img  className="header-bg" src="../../assets/images/header_image.png" alt="header-img"></img>
        <SearchInput />
      </div>
    )
  }
}
export default Header;
