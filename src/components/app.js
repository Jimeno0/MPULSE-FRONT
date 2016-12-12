import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginUser, fetchLastConcerts } from '../actions/index';

import Header from './header';
import Modal from './modal';

 class App extends Component {

  componentDidMount() {
    const { loginUser, fetchLastConcerts } = this.props;
    const token = window.localStorage.getItem('token');
    if (token) {
      const params = { token };
      loginUser(params);
    }
    fetchLastConcerts();
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

const mapDispatchToProps = (dispatch) => (bindActionCreators({ loginUser, fetchLastConcerts }, dispatch));

export default connect(null, mapDispatchToProps)(App);
