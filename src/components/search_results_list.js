import React, { Component } from 'react';
import { connect } from 'react-redux';
import ConcertCard from './concert_card';
import { Grid } from 'semantic-ui-react'


class SearchResultList extends Component {
  renderList(){
    if (this.props.searchConcerts.length === 0) {
      return <li>No cocerts for this artist yet...</li>
    }
    else {
      return this.props.searchConcerts.map((concert) =>{
        return (<Grid.Column key={concert.concert_id}>
          <ConcertCard  concert={concert}/>
        </Grid.Column>)
      })
    }
  }
  render(){
    return(
        <Grid >
          <Grid.Row columns={3} centered={true}>
            {this.renderList()}
          </Grid.Row>
        </Grid>

    )
  }
}

function mapStateToProps(state){
  return {searchConcerts: state.searchConcerts}
}

export default connect(mapStateToProps)(SearchResultList);
// export default SearchResultList;