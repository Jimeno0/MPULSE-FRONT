import React, { Component } from 'react';
import { connect } from 'react-redux';
import ConcertsList from './concerts_list';

class RecentConcerts extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <p>Recent Concerts</p>
        </div>
        <div className="row">
          <ConcertsList numberOfColumns={3} renderingLastConcerts />
        </div>
      </div>

    );
  }
}

export default RecentConcerts;
