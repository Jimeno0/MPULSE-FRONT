import React, { Component } from 'react';

export default class Header extends Component{
  render(){
    const height = String(window.innerHeight*2/3) + 'px';
    console.log(height);
    return (
      <div>
        <img style={{height: height, width:'100%'}} src="../../assets/images/header_image.png" alt="header-img"></img>
      </div>

    )
  }
}