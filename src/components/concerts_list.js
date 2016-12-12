import React, { Component } from 'react';
import { connect } from 'react-redux';
import ConcertCard from './concert_card';

class ConcertsList extends Component {
  renderList() {
    const { numberOfColumns, concerts } = this.props;

    if (concerts.length === 0) {
      return (<span>No concerts for this artist yet...</span>);
    }

    const columnsClass = numberOfColumns === 2 ? 'one-half column' : 'one-third column';
    const concertsByRow = partition(concerts, numberOfColumns);

    function partition(array, n) {
      return array.length ? [array.splice(0, n)].concat(partition(array, n)) : [];
    }
    return concertsByRow.map((row, i) => (
      <div key={`row${i}`} className="row">
        {row.map((concert, j) => (
          <div key={`column${j}`} className={columnsClass}>
            <ConcertCard key={concert.concert_id} concert={concert} />
          </div>))}
      </div>
    ));
  }
  render() {
    return (
      <div>
        <div className="row">
          {this.renderList()}
        </div>
      </div>
    );
  }
}

export const RecentConcertsList = connect(state => ({
  concerts: state.recentConcerts
}))(ConcertsList);

export const SearchConcerts = connect(state => ({
  concerts: state.searchConcerts
}))(ConcertsList);

