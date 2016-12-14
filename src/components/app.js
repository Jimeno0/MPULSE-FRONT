import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginUser, fetchLastConcerts, fetchFavs, fetchUserArtist } from '../actions/index';

import LoginForm from './login_form';
import RegisterForm from './register_form';
import Header from './header';
import Modal from './modal';
import ErrorsToast from './errors_toast';

 class App extends Component {

  componentDidMount() {
    const { loginUser, fetchLastConcerts, fetchFavs, fetchUserArtist } = this.props;
    const token = window.localStorage.getItem('token');
    if (token) { loginUser({ token }); }
    fetchLastConcerts();
  }

  render() {
    return (
      <div>
        <ErrorsToast />
        <Modal>
          <div className="one-half column">
            <LoginForm />
          </div>
          <div className="one-half column">
            <RegisterForm />
          </div>
        </Modal>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ loginUser, fetchLastConcerts, fetchFavs, fetchUserArtist }, dispatch)
);

export default connect(null, mapDispatchToProps)(App);
