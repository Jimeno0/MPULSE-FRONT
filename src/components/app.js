import React, { Component } from 'react';

import SearchInput from './search_input';
import SearchResultList from './search_results_list';
import ConcertCard from './concert_card';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <SearchInput />
        <SearchResultList />
      </div>
    );
  }
}
