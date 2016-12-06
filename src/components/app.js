import React, { Component } from 'react';


import SearchResultList from './search_results_list';
import ConcertCard from './concert_card';
import Header from './header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <SearchResultList />
        </div>
      </div>
    );
  }
}
