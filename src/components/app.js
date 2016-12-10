import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginUser } from '../actions/index';

import Header from './header';
import Modal from './modal';

 class App extends Component {

  componentDidMount() {
    const token = window.localStorage.getItem('token');
    const params = { token };

    console.log('Before login: ', params);
    this.props.loginUser(params);
  }

  render() {
    return (
      <div>
        <Modal />
        <Header />
        {this.props.children}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => (bindActionCreators({ loginUser }, dispatch));

export default connect(null, mapDispatchToProps)(App);
