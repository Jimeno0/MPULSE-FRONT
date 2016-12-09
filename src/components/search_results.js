import React, { Component } from 'react';

import SearchResultHeader from './search_results_header';
import SearchResultList from './search_results_list';


export default class SearchResult extends Component {
  render() {
    return (
      <div>
        <SearchResultHeader />
        <SearchResultList />
      </div>
    );
  }
}
