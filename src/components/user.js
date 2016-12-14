import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setFavsAsSearch } from '../actions/index';

import FilterSidebar from './filter_sidebar';
import { SearchConcerts } from './concerts_list';

class User extends Component {
  componentDidMount() {
  const token = window.localStorage.getItem('token');
  this.props.setFavsAsSearch(token);
  }
  render() {
    return (
    <div className="container">
      <div className="row">
        <div className="one-third column">
          <FilterSidebar />
        </div>
        <div className="two-thirds column">
          <SearchConcerts />
        </div>
      </div>
    </div>
  );
  }
}
const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ setFavsAsSearch }, dispatch)
);
export default connect(null, mapDispatchToProps)(User);
