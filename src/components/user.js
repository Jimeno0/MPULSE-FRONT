import React, { Component } from 'react';
import FilterSidebar from './filter_sidebar';

export default class Home extends Component {
  render() {
    return (
    <div className="container">
      <div className="row">
        <div className="one-third column">
          <FilterSidebar />
        </div>
        <div className="two-thirds column">
          <h1>Container</h1>
        </div>
      </div>
    </div>
  );
  }
}
