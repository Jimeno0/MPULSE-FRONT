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
    return concerts.map(concert => (
      <div key={concert.concert_id} className={columnsClass}>
        <ConcertCard concert={concert} />
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

