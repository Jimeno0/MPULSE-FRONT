import React, { Component } from 'react';
import SearchResult from './search_results';
import RecentConcerts from './recent_concerts';

export default class Home extends Component {

  render() {
    return (
    <div className="container">
      <SearchResult />
      <RecentConcerts />
    </div>
  );
  }
}
