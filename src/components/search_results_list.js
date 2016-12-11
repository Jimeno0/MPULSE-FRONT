import React, { Component } from 'react';
import { connect } from 'react-redux';
import ConcertCard from './concert_card';

class SearchResultList extends Component {
  renderList() {
    const { numberOfColumns, searchConcerts } = this.props;
    if (searchConcerts.length === 0) {
      return (<span>No concerts for this artist yet...</span>);
    }
    const columnsClass = numberOfColumns === 2 ? 'one-half column' : 'one-third column';
    const concertsByRow = partition(searchConcerts, numberOfColumns);

    function partition(array, n) {
      return array.length ? [array.splice(0, n)].concat(partition(array, n)) : [];
    }
    return concertsByRow.map((row) => (
      <div className="row">
        {row.map((concert) => (
          <div className={columnsClass}>
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

const mapStateToProps = (state) => ({ searchConcerts: state.searchConcerts });

export default connect(mapStateToProps)(SearchResultList);
