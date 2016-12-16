import React, { Component } from 'react';

import SearchResultHeader from './search_results_header';
import { SearchConcerts } from './concerts_list';


export default class SearchResult extends Component {
  render() {
    return (
      <div>
        <SearchResultHeader />
        <SearchConcerts />
      </div>
    );
  }
}
