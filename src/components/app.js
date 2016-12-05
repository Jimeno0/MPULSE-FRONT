import React, { Component } from 'react';

import SearchInput from './search_input';
import NavBar from './nav_bar';
import SearchResultList from './search_results_list';
import ConcertCard from './concert_card';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <SearchInput />
        <SearchResultList />
        
      </div>
    );
  }
}
