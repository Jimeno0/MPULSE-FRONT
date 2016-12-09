import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginUser } from '../actions/index';

// import SearchResultList from './search_results_list';
import SearchResult from './search_results';

import Header from './header';
import Modal from './modal';

 class App extends Component {

  componentWillMount() {
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
        <div className="container">
          <SearchResult />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => (bindActionCreators({ loginUser }, dispatch));

export default connect(null, mapDispatchToProps)(App);
