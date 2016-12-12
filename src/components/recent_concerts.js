import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RecentConcertsList } from './concerts_list';

class RecentConcerts extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <p>Recent Concerts</p>
        </div>
        <div className="row">
          <RecentConcertsList numberOfColumns={3} />
        </div>
      </div>

    );
  }
}

export default RecentConcerts;