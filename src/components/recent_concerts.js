import React, { Component } from 'react';
import { RecentConcertsList } from './concerts_list';

class RecentConcerts extends Component {
  render() {
    return (
      <div>
        <div className="row search-result-header">
          <span>Recent Concerts</span>
        </div>
        <div className="row">
          <RecentConcertsList />
        </div>
      </div>

    );
  }
}

export default RecentConcerts;
