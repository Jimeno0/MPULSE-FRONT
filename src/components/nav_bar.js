import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
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
      navbarFeed = (
        <li className="dropdown">
          <span className="dropbtn">{this.props.user.name}</span>
          <div className="dropdown-content">
            <Link to={`/${user.name}`}>Profile</Link>
            <a onClick={this.toogleModal.bind(this)}>Settings</a>
            <a onClick={this.handleLogout.bind(this)}>Log out</a>
          </div>
        </li>
    );
    } else {
      navbarFeed = (<li onClick={this.toogleModal.bind(this)}>
        <span>Sign up</span>
        <span>|</span>
        <span>Log in</span>
      </li>);
    }

    return (
      <div className="navbar">
        <ul>
          <li>
            <Link to="/">
              <img src="../../assets/icons/logo.svg" alt="mpulse" />
            </Link>
          </li>
          {navbarFeed}
        </ul>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => (bindActionCreators({ logoutUser }, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
