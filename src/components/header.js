import React, { Component } from 'react';
import SearchInput from './search_input';
export default class Header extends Component{
  render(){
    const height = '400px';

    return (
      <div>
        <div className="navbar">
          <ul>
            <li><img src="../../assets/icons/logo.svg" alt="mpulse"/></li>
            <li><a href="#">Sign up</a></li>
            <li><a href="#">|</a></li>
            <li><a href="#">Log in</a></li>
          </ul>
        </div>

        <img  className="header-bg" src="../../assets/images/header_image.png" alt="header-img"></img>
        <SearchInput />
      </div>

    )
  }
}