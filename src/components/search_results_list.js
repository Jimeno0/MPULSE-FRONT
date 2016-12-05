import React, { Component } from 'react';
import { connect } from 'react-redux';
import ConcertCard from './concert_card';

class SearchResultList extends Component {
  renderList(){
    if (this.props.searchConcerts.length === 0) {
      return <span>No cocerts for this artist yet...</span>
    }
    else {
      return this.props.searchConcerts.map((concert) =>{
        return (
          <ConcertCard key={concert.concert_id} concert={concert}/>
          )
      })
    }
  }
  render(){
    return(
      <div className="row">
        {this.renderList()}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {searchConcerts: state.searchConcerts}
}

export default connect(mapStateToProps)(SearchResultList);
