import React, { Component } from 'react';
import { connect } from 'react-redux';
import ConcertCard from './concert_card';

class SearchResultList extends Component {
  renderList() {
    if (this.props.searchConcerts.length === 0) {
      return (<span>No concerts for this artist yet...</span>);
    }

    return this.props.searchConcerts.map((concert) => (
        <ConcertCard key={concert.concert_id} concert={concert} />
      )
    );
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
