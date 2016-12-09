import React, { Component } from 'react';
import SearchResult from './search_results';

export default class Home extends Component {

  render() {
    return (
    <div className="container">
      <SearchResult />
    </div>
  );
  }
}
