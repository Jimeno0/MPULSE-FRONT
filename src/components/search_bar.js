import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchConcerts } from '../actions/index';


class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = {
      term: ''
    }
  }

  handlerSubmit(event){
    event.preventDefault();

    this.props.fetchConcerts(this.state.term);
    this.setState({term: ''});

  }
  render(){
    return(
      <form onSubmit={this.handlerSubmit.bind(this)}>
        <input type="text" placeholder="Search an artist..."
          value={this.state.term}
          onChange={(event)=>{this.setState({term: event.target.value})}}
        />
        <button type="submit">Search</button>
      </form>
    )
  }
}

function mapToDispatch(dispatch) {
  return bindActionCreators({fetchConcerts},dispatch);
}

export default connect(null,mapToDispatch)(SearchBar);