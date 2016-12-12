import React, { Component } from 'react';

import SearchResultHeader from './search_results_header';
import ConcertsList from './concerts_list';


export default class SearchResult extends Component {
  render() {
    return (
      <div>
        <SearchResultHeader />
        <ConcertsList numberOfColumns={3} />
      </div>
    );
  }
}
