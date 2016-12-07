import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleModal } from '../actions/index';

import SearchInput from './search_input';
import Modal from './modal';

class Header extends Component{
  constructor(props){
    super(props);
    this.state = {display: 'none'};
  }

  toogleModal(event){
    event.preventDefault();
    this.setState({display: (this.state.display === 'none' ? 'block' : 'none')})
  }

  render(){
    const height = '400px';

    return (
      <div>
        <div className="navbar">
          <ul>
            <li><img src="../../assets/icons/logo.svg" alt="mpulse"/></li>
            <li><a onClick={this.toogleModal.bind(this)} href="">Sign up</a></li>
            <li><a>|</a></li>
            <li><a onClick={this.toogleModal.bind(this)} href="">Log in</a></li>
          </ul>
        </div>

        <Modal handleDisplay={this.toogleModal.bind(this)} display={this.state.display}/>
        <img  className="header-bg" src="../../assets/images/header_image.png" alt="header-img"></img>
        <SearchInput />
      </div>

    )
  }
}
function mapStateToProps(state){
  return {displayModal: state.displayModal}
}

function mapToDispatch(dispatch) {
  return bindActionCreators({toggleModal},dispatch);
}

export default connect(mapStateToProps,mapToDispatch)(Header);