import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logoutUser } from '../actions/index';


class NavBar extends Component {
  toogleModal() {
    document.getElementsByClassName('modal')[0].style.setProperty('display', 'block');
  }
  handleLogout() {
    const { user, logoutUser } = this.props;

    const params = {
      data: {
        token: user.token
      }
    };
    logoutUser(params);
  }

  render() {
    const { user } = this.props;
    let navbarFeed = null;

    if (user && user.token) {
      navbarFeed = (<li>
        <span>{this.props.user.name}</span>
        <span>|</span>
        <span onClick={this.handleLogout.bind(this)}>Log out</span>
      </li>);
    }
    else {
      navbarFeed = (<li onClick={this.toogleModal.bind(this)}>
        <span>Sign up</span>
        <span>|</span>
        <span>Log in</span>
      </li>);
    }


    return (
      <div className="navbar">
        <ul>
          <li><img src="../../assets/icons/logo.svg" alt="mpulse" /></li>
          {navbarFeed}
        </ul>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  user: state.user,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logoutUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
