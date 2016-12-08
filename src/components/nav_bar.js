import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logoutUser } from '../actions/index';


class NavBar extends Component{
  toogleModal(){
    document.getElementsByClassName("modal")[0].style.setProperty('display','block');
  }
  handleLogout(event){
    const params = {
      token:this.props.user.token
    }
    this.props.logoutUser(params);
  }

  render(){
    let isLoggedIn = this.props.user.name;
    let navbarFeed = null;
    if (isLoggedIn) {
      navbarFeed  = <li>
        <span>{this.props.user.name}</span>
        <span>|</span>
        <span onClick={this.handleLogout.bind(this)}>Log out</span>
      </li>
    }
    else{
      navbarFeed = <li onClick={this.toogleModal.bind(this)}>
        <span>Sign up</span>
        <span>|</span>
        <span>Log in</span>
      </li>
    }


    return(
      <div className="navbar">
        <ul>
          <li><img src="../../assets/icons/logo.svg" alt="mpulse"/></li>
          {navbarFeed}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {user: state.user}
}
function mapToDispatch(dispatch) {
  return bindActionCreators({logoutUser},dispatch);
}

export default connect(mapStateToProps,mapToDispatch)(NavBar);


// export default NavBar