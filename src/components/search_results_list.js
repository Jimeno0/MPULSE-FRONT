import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchResultList extends Component {
  renderList(){
    if (!this.props.searchConcerts[0]) {
      return <li>No cocerts for this artist yet...</li>
    }
    return this.props.searchConcerts.map((concert) =>{
      return <li key={concert.concert_id}>{concert.name}</li>
    })
  }
  render(){
    return(
      <div>
        <ul>
          {this.renderList()}
        </ul>
      </div>

    )
  }
}

function mapStateToProps(state){
  return {searchConcerts: state.searchConcerts}
}

export default connect(mapStateToProps)(SearchResultList);
// export default SearchResultList;