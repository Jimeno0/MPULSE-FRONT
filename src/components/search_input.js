import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchConcerts, setSearchedArtist } from '../actions/index';

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }
  handlerSubmit(event) {
    event.preventDefault();

    this.props.fetchConcerts(this.state.term);
    this.props.setSearchedArtist(this.state.term);
    this.setState({ term: '' });
  }
  render() {
    return (
      <div className="search-bar">
        <div className="header-slogan">
          <p className="header-title">Lorem ipsum dolor sit amet</p>
          <p className="header-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <form onSubmit={this.handlerSubmit.bind(this)}>
          <input
            type='text' placeholder='Search artist...'
            value={this.state.term}
            onChange={(event) => { this.setState({ term: event.target.value }); }}
          />
        </form>
      </div>

    );
  }
}
const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ fetchConcerts, setSearchedArtist }, dispatch
  ));

export default connect(null, mapDispatchToProps)(SearchInput);
