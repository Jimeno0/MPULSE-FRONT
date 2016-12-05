import React, { Component } from 'react';
import SearchBar from './search_input';
import NavBar from './nav_bar';

import SearchResultList from './search_results_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <SearchBar />
        <SearchResultList />
      </div>
    );
  }
}
