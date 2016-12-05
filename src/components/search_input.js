import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchConcerts } from '../actions/index';

class SearchInput extends Component {
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
      <div>
        <form onSubmit={this.handlerSubmit.bind(this)}>
          <input
            type='text' placeholder='Search artist...'
            value={this.state.term}
            onChange={(event)=>{this.setState({term: event.target.value})}}
          />
        </form>
      </div>

    )
  }
}

function mapToDispatch(dispatch) {
  return bindActionCreators({fetchConcerts},dispatch);
}

export default connect(null,mapToDispatch)(SearchInput);